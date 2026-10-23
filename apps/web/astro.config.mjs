import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { existsSync } from 'node:fs';
import rehypeAccessibleContent from './src/plugins/rehype-accessible-content.mjs';

const base = process.env.PUBLIC_BASE_PATH || '';
const githubRepository = process.env.GITHUB_REPOSITORY;
const repositoryUrl =
  process.env.PUBLIC_REPOSITORY_URL ||
  (githubRepository
    ? `https://github.com/${githubRepository}`
    : 'https://github.com/QaliAI/open-coworking-stack');
const site =
  process.env.PUBLIC_SITE_URL ||
  (githubRepository
    ? `https://${githubRepository.split('/')[0].toLowerCase()}.github.io`
    : 'https://open-coworking-stack.vercel.app');
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
  markdown: {
    rehypePlugins: [rehypeAccessibleContent],
  },
  base: base || undefined,
  integrations: [
    starlight({
      title: 'Open Coworking Stack',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Open Coworking Stack logo',
      },
      description:
        'Free coworking technology directory with software, practical guides, clear licensing, costs and review status.',
      social: repositoryUrl ? { github: repositoryUrl } : undefined,
      editLink: repositoryUrl ? { baseUrl: `${repositoryUrl}/edit/main/apps/web/` } : undefined,
      lastUpdated: true,
      pagination: true,
      favicon: '/favicon.svg',
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Browse Tools', slug: 'directory' },
        { label: 'Categories', slug: 'navigation/by-category' },
        {
          label: 'Recommended Stacks',
          collapsed: true,
          items: [
            { label: 'Build My Tech Stack', slug: 'stack-builder' },
            { label: 'Capacity & payback estimator', slug: 'roi-calculator' },
            { label: 'Reference stacks', collapsed: true, autogenerate: { directory: 'stacks' } },
          ],
        },
        {
          label: 'Guides',
          collapsed: true,
          items: [
            { label: 'Guide index', slug: 'guides' },
            { label: 'Security baseline', slug: 'guides/security-baseline' },
            { label: 'Backup & restore', slug: 'guides/backup-and-restore' },
            { label: 'Privacy checklist', slug: 'guides/privacy-checklist' },
            { label: 'Deployment options', slug: 'guides/deployment-options' },
            { label: 'Starter packs', slug: 'guides/starter-packs' },
            { label: 'Tool guides', collapsed: true, autogenerate: { directory: 'guides/tools' } },
          ],
        },
        {
          label: 'About / Contribute',
          collapsed: true,
          items: [
            { label: 'About this directory', slug: 'index' },
            { label: 'New to choosing software?', slug: 'start/start-here' },
            { label: 'How to use this project', slug: 'start/how-to-use' },
            { label: 'Evaluation criteria', slug: 'start/evaluation-criteria' },
            { label: 'License classes explained', slug: 'start/license-classes' },
            { label: 'Disclaimer', slug: 'start/disclaimer' },
            { label: 'Contributing', slug: 'contribute' },
            { label: 'Taxonomy', slug: 'contribute/taxonomy' },
            { label: 'CoworkingSpace.ai', link: 'https://www.coworkingspace.ai/' },
          ],
        },
        {
          label: 'Operator Playbooks',
          collapsed: true,
          items: [
            { label: 'By role', slug: 'navigation/by-role' },
            { label: 'By problem', slug: 'navigation/by-problem' },
            { label: 'By lifecycle', slug: 'navigation/by-lifecycle' },
            { label: 'By business model', slug: 'navigation/by-business-model' },
            { label: 'By technical ability', slug: 'navigation/by-technical-ability' },
            { label: 'By budget', slug: 'navigation/by-budget' },
            ...(hasGeneratedTasks
              ? [
                  {
                    label: 'Tasks',
                    collapsed: true,
                    autogenerate: { directory: 'tasks/generated' },
                  },
                ]
              : []),
            ...(hasGeneratedRoles
              ? [
                  {
                    label: 'Roles',
                    collapsed: true,
                    autogenerate: { directory: 'roles/generated' },
                  },
                ]
              : []),
            { label: 'Member onboarding', slug: 'workflows/member-onboarding' },
            { label: 'Room booking', slug: 'workflows/room-booking' },
            { label: 'Tour to close', slug: 'workflows/tour-to-close' },
            ...(hasGeneratedWorkflows
              ? [
                  {
                    label: 'Workflow library',
                    collapsed: true,
                    autogenerate: { directory: 'workflows/generated' },
                  },
                ]
              : []),
            { label: 'Comparisons', slug: 'comparisons' },
            {
              label: 'Implementation recipes',
              collapsed: true,
              autogenerate: { directory: 'integrations/generated' },
            },
            { label: 'Operational guides', collapsed: true, autogenerate: { directory: 'ops' } },
          ],
        },
        {
          label: 'Advanced / Technical',
          collapsed: true,
          items: [
            { label: 'Architecture', collapsed: true, autogenerate: { directory: 'architecture' } },
            { label: 'All tools (table)', slug: 'tools/generated' },
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
