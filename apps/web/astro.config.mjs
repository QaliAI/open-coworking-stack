import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { existsSync } from 'node:fs';

const base = process.env.PUBLIC_BASE_PATH || '';
const githubRepository = process.env.GITHUB_REPOSITORY;
const repositoryUrl =
  process.env.PUBLIC_REPOSITORY_URL ||
  (githubRepository ? `https://github.com/${githubRepository}` : undefined);
const site =
  process.env.PUBLIC_SITE_URL ||
  (githubRepository
    ? `https://${githubRepository.split('/')[0].toLowerCase()}.github.io`
    : 'http://localhost:4321');
const hasGeneratedWorkflows = existsSync(
  new URL('./src/content/docs/workflows/generated', import.meta.url),
);
const hasGeneratedTasks = existsSync(
  new URL('./src/content/docs/tasks/generated', import.meta.url),
);
const hasGeneratedRoles = existsSync(
  new URL('./src/content/docs/roles/generated', import.meta.url),
);

export default defineConfig({
  site,
  base: base || undefined,
  integrations: [
    starlight({
      title: 'Open Coworking Stack',
      description:
        'A practical, verified directory of free, open-source, source-available, freemium, and free-to-try technology for coworking operators.',
      social: repositoryUrl ? { github: repositoryUrl } : undefined,
      editLink: repositoryUrl ? { baseUrl: `${repositoryUrl}/edit/main/` } : undefined,
      lastUpdated: true,
      pagination: true,
      favicon: '/favicon.svg',
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', slug: 'index' },
            { label: 'How to use this project', slug: 'start/how-to-use' },
            { label: 'Evaluation criteria', slug: 'start/evaluation-criteria' },
            { label: 'License classes explained', slug: 'start/license-classes' },
            { label: 'Disclaimer', slug: 'start/disclaimer' },
          ],
        },
        {
          label: 'Directory',
          items: [
            { label: 'Interactive directory', slug: 'directory' },
            { label: 'All tools (table)', slug: 'tools/generated' },
            { label: 'By category', slug: 'navigation/by-category' },
            { label: 'By role', slug: 'navigation/by-role' },
            { label: 'By problem', slug: 'navigation/by-problem' },
            ...(hasGeneratedTasks
              ? [{ label: 'Operator tasks', autogenerate: { directory: 'tasks/generated' } }]
              : []),
            ...(hasGeneratedRoles
              ? [{ label: 'Operator roles', autogenerate: { directory: 'roles/generated' } }]
              : []),
            { label: 'Comparison index', slug: 'comparisons' },
          ],
        },
        {
          label: 'Decision paths',
          items: [
            { label: 'Stack Builder', slug: 'stack-builder' },
            { label: 'Capacity & payback estimator', slug: 'roi-calculator' },
            { label: 'By lifecycle', slug: 'navigation/by-lifecycle' },
            { label: 'By business model', slug: 'navigation/by-business-model' },
            { label: 'By technical ability', slug: 'navigation/by-technical-ability' },
            { label: 'By budget', slug: 'navigation/by-budget' },
          ],
        },
        {
          label: 'Reference stacks',
          autogenerate: { directory: 'stacks' },
        },
        {
          label: 'Workflows',
          items: [
            { label: 'Member onboarding', slug: 'workflows/member-onboarding' },
            { label: 'Room booking', slug: 'workflows/room-booking' },
            { label: 'Tour to close', slug: 'workflows/tour-to-close' },
            ...(hasGeneratedWorkflows
              ? [
                  {
                    label: 'Generated workflows',
                    autogenerate: { directory: 'workflows/generated' },
                  },
                ]
              : []),
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Guide index', slug: 'guides' },
            { label: 'Security baseline', slug: 'guides/security-baseline' },
            { label: 'Backup & restore', slug: 'guides/backup-and-restore' },
            { label: 'Privacy checklist', slug: 'guides/privacy-checklist' },
            { label: 'Deployment options', slug: 'guides/deployment-options' },
            { label: 'Starter packs', slug: 'guides/starter-packs' },
            {
              label: 'Tool guides',
              autogenerate: { directory: 'guides/tools' },
            },
          ],
        },
        {
          label: 'Integration recipes',
          autogenerate: { directory: 'integrations/generated' },
        },
        {
          label: 'Operations',
          autogenerate: { directory: 'ops' },
        },
        {
          label: 'Architecture',
          autogenerate: { directory: 'architecture' },
        },
        {
          label: 'Contribute',
          items: [
            { label: 'Contributing', slug: 'contribute' },
            { label: 'Taxonomy', slug: 'contribute/taxonomy' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#0f3d2e',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:locale',
            content: 'en_US',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
      ],
    }),
  ],
});
