import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';

const root = process.cwd();
const git = (...args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 20e6 });
const sha = (text) => createHash('sha256').update(text.replaceAll('\r\n', '\n')).digest('hex');
async function walk(dir) {
  const entries = await readdir(path.join(root, dir), { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) => (e.isDirectory() ? walk(`${dir}/${e.name}`) : [`${dir}/${e.name}`])),
    )
  )
    .flat()
    .sort();
}
const output = process.argv[2];
if (!output) throw new Error('Usage: node scripts/audit-content-preservation.mjs OUTPUT [BEFORE]');
const canonical = git(
  'ls-files',
  'catalog/tools',
  'catalog/tasks',
  'catalog/workflows',
  'catalog/roles',
  'catalog/stacks',
  'guides/tools',
  'docs/integrations',
  'compose',
)
  .trim()
  .split('\n')
  .filter(Boolean);
const records = await Promise.all(
  canonical.map(async (file) => {
    const body = await readFile(file, 'utf8');
    return {
      file,
      id: body.match(/^id: (.+)$/m)?.[1] ?? null,
      sha256: sha(body),
      characters: body.length,
      sections: [...body.matchAll(/^#{1,3} (.+)$/gm)].map((m) => m[1]),
    };
  }),
);
const routes = (await walk('apps/web/dist'))
  .filter((f) => f.endsWith('.html'))
  .map((f) => f.replace('apps/web/dist', '').replace(/index\.html$/, ''));
const docs = (await walk('apps/web/src/content/docs')).filter((f) => /\.mdx?$/.test(f));
const pages = await Promise.all(
  docs.map(async (file) => {
    const body = await readFile(file, 'utf8');
    return {
      file,
      sha256: sha(body),
      characters: body.length,
      sections: [...body.matchAll(/^#{1,3} (.+)$/gm)].map((m) => m[1]),
    };
  }),
);
const catalog = JSON.parse(await readFile('apps/web/public/data/catalog.json', 'utf8'));
const counts = {
  tools: catalog.tool_count,
  tasks: catalog.task_count,
  workflows: catalog.workflow_count,
  stacks: catalog.stack_count,
  roles: catalog.role_count,
  pages: routes.length,
  comparisons: pages.filter(
    (p) => p.file.includes('/comparisons/') && !p.file.endsWith('/index.md'),
  ).length,
  guides: Object.fromEntries(
    ['full', 'stub', 'planned'].map((status) => [
      status,
      catalog.tools.filter((t) => t.guide_status === status).length,
    ]),
  ),
  tiers: Object.fromEntries(
    ['evaluated', 'research-backlog', 'commercial-benchmark', 'verified-core'].map((tier) => [
      tier,
      catalog.tools.filter((t) => t.verification_tier === tier).length,
    ]),
  ),
};
const historical = {};
for (const ref of ['e107548', 'c991598', 'dbdf68e']) {
  try {
    const sourceFiles = git(
      'ls-tree',
      '-r',
      '--name-only',
      ref,
      '--',
      'catalog/tools',
      'catalog/tasks',
      'catalog/workflows',
      'catalog/stacks',
      'catalog/roles',
      'guides/tools',
    )
      .trim()
      .split('\n')
      .filter(Boolean);
    const guideBodies = sourceFiles
      .filter((file) => /^guides\/tools\/.*\.mdx?$/.test(file))
      .map((file) => {
        const body = git('show', `${ref}:${file}`);
        const current = records.find((record) => record.file === file);
        return {
          file,
          sha256: sha(body),
          characters: body.length,
          matchesCurrentSource: current?.sha256 === sha(body),
          sections: [...body.matchAll(/^#{1,3} (.+)$/gm)].map((m) => m[1]),
        };
      });
    historical[ref] = {
      sourceFiles,
      guideBodies,
      commit: git('rev-parse', ref).trim(),
      changesToBaseline: git(
        'diff',
        '--name-status',
        ref,
        'dbdf68e',
        '--',
        'catalog',
        'guides',
        'docs/integrations',
        'apps/web/src/content/docs',
      )
        .trim()
        .split('\n')
        .filter(Boolean),
    };
  } catch {
    historical[ref] = { unavailable: true };
  }
}
const report = {
  reference: git('rev-parse', 'HEAD').trim(),
  counts,
  records,
  pages,
  routes,
  historical,
};
if (process.argv[3]) {
  const before = JSON.parse(await readFile(process.argv[3], 'utf8'));
  report.delta = {
    removedRoutes: before.routes.filter((route) => !routes.includes(route)),
    addedRoutes: routes.filter((route) => !before.routes.includes(route)),
    removedRecords: before.records.filter((record) => !records.some((r) => r.file === record.file)),
    changedRecords: records
      .filter((record) =>
        before.records.some((r) => r.file === record.file && r.sha256 !== record.sha256),
      )
      .map((r) => r.file),
    changedPages: pages
      .filter((page) => before.pages.some((p) => p.file === page.file && p.sha256 !== page.sha256))
      .map((p) => p.file),
  };
  if (report.delta.removedRoutes.length || report.delta.removedRecords.length)
    throw new Error(`Unexplained loss: ${JSON.stringify(report.delta)}`);
}
// Verify published guide bodies, not merely their URLs/counts. Only the duplicate source H1 is removed.
const guides = records.filter((r) => /^guides\/tools\/.*\.mdx?$/.test(r.file));
for (const guide of guides) {
  const source = (await readFile(guide.file, 'utf8')).replace(/\n# [^\n]+\n\n?/, '\n');
  const published = await readFile(`apps/web/src/content/docs/${guide.file}`, 'utf8');
  if (sha(source) !== sha(published))
    throw new Error(`Published guide body differs: ${guide.file}`);
}
report.publishedGuideBodiesVerified = guides.length;
for (const recipe of records.filter((r) => /^docs\/integrations\/.*\.md$/.test(r.file))) {
  const name = path.basename(recipe.file) === 'README.md' ? 'index.md' : path.basename(recipe.file);
  const source = await readFile(recipe.file, 'utf8');
  const linkPrefix = name === 'index.md' ? './' : '../';
  const body = source
    .replace(/^# [^\n]+\n\n?/, '')
    .replace(/\]\(([a-z0-9-]+)\.md\)/g, (_, target) =>
      target === 'README' ? `](${linkPrefix})` : `](${linkPrefix}${target}/)`,
    );
  const published = await readFile(
    `apps/web/src/content/docs/integrations/generated/${name}`,
    'utf8',
  );
  if (!published.replaceAll('\r\n', '\n').includes(body.replaceAll('\r\n', '\n')))
    throw new Error(`Recipe body lost: ${recipe.file}`);
}
report.publishedRecipeBodiesVerified = records.filter((r) =>
  /^docs\/integrations\/.*\.md$/.test(r.file),
).length;
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(report, null, 2) + '\n');
console.log(
  JSON.stringify(
    {
      counts,
      publishedGuideBodiesVerified: guides.length,
      delta: report.delta && { ...report.delta, changedPages: report.delta.changedPages.length },
    },
    null,
    2,
  ),
);
