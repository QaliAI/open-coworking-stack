import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
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
export default defineConfig({
  site,
  markdown: {
    rehypePlugins: [rehypeAccessibleContent],
  },
  base: base || undefined,
  redirects: {
    '/guides/integration-recipes/': { status: 308, destination: '/integrations/generated/' },
  },
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
      // The sidebar is a set of libraries, not a reading sequence. Context links replace unrelated neighbours.
      pagination: false,
      components: {
        PageTitle: './src/components/ArticleTitle.astro',
        SiteTitle: './src/components/BrandTitle.astro',
        Footer: './src/components/BrandFooter.astro',
        ThemeProvider: './src/components/BrandTheme.astro',
      },
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
            { label: 'All resource libraries', slug: 'library' },
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
          label: 'Operator Resources',
          collapsed: true,
          items: [
            { label: 'All resource libraries', slug: 'library' },
            { label: 'Operator tasks', slug: 'tasks' },
            { label: 'Operator roles', slug: 'roles' },
            { label: 'Workflow library', slug: 'workflows' },
            { label: 'Comparison library', slug: 'comparisons' },
            { label: 'Integration recipes', slug: 'integrations/generated' },
            { label: 'By role', slug: 'navigation/by-role' },
            { label: 'By problem', slug: 'navigation/by-problem' },
            { label: 'By lifecycle', slug: 'navigation/by-lifecycle' },
            { label: 'By business model', slug: 'navigation/by-business-model' },
            { label: 'By technical ability', slug: 'navigation/by-technical-ability' },
            { label: 'By budget', slug: 'navigation/by-budget' },
            { label: 'Member onboarding', slug: 'workflows/member-onboarding' },
            { label: 'Room booking', slug: 'workflows/room-booking' },
            { label: 'Tour to close', slug: 'workflows/tour-to-close' },
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
