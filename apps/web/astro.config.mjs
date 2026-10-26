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
        'Free and open-source software for running a coworking space, with plain-English setup guides and honest cost notes. A free resource from CoworkingSpace.ai.',
      social: repositoryUrl ? { github: repositoryUrl } : undefined,
      editLink: repositoryUrl ? { baseUrl: `${repositoryUrl}/edit/main/apps/web/` } : undefined,
      lastUpdated: true,
      // The sidebar is a set of libraries, not a reading sequence. Context links replace unrelated neighbours.
      pagination: false,
      components: {
        PageTitle: './src/components/ArticleTitle.astro',
        SiteTitle: './src/components/BrandTitle.astro',
        Footer: './src/components/BrandFooter.astro',
        Hero: './src/components/Hero.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        ThemeProvider: './src/components/BrandTheme.astro',
      },
      favicon: '/favicon.svg',
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      customCss: [
        '@fontsource-variable/figtree',
        '@fontsource-variable/bricolage-grotesque',
        './src/styles/custom.css',
        './src/styles/brand.css',
      ],
      sidebar: [
        { label: 'Browse all tools', slug: 'directory' },
        { label: 'Tools by category', slug: 'navigation/by-category' },
        {
          label: 'Plan your stack',
          collapsed: true,
          items: [
            { label: 'Build my tech stack', slug: 'stack-builder' },
            { label: 'Ready-made stacks', collapsed: true, autogenerate: { directory: 'stacks' } },
            { label: 'Cost and time estimator', slug: 'roi-calculator' },
          ],
        },
        {
          label: 'Setup guides',
          collapsed: true,
          items: [
            { label: 'All setup guides', slug: 'guides' },
            {
              label: 'Guides by tool',
              collapsed: true,
              autogenerate: { directory: 'guides/tools' },
            },
            { label: 'Hosting options', slug: 'guides/deployment-options' },
            { label: 'Starter packs', slug: 'guides/starter-packs' },
            { label: 'Security basics', slug: 'guides/security-baseline' },
            { label: 'Backups', slug: 'guides/backup-and-restore' },
            { label: 'Privacy checklist', slug: 'guides/privacy-checklist' },
          ],
        },
        {
          label: 'Compare and learn',
          collapsed: true,
          items: [
            { label: 'All resources', slug: 'library' },
            { label: 'Side-by-side comparisons', slug: 'comparisons' },
            { label: 'Everyday tasks', slug: 'tasks' },
            { label: 'Team roles', slug: 'roles' },
            { label: 'Workflows', slug: 'workflows' },
            { label: 'Member onboarding', slug: 'workflows/member-onboarding' },
            { label: 'Room booking', slug: 'workflows/room-booking' },
            { label: 'Tour to signed agreement', slug: 'workflows/tour-to-close' },
            { label: 'Connecting tools together', slug: 'integrations/generated' },
            { label: 'Tools by role', slug: 'navigation/by-role' },
            { label: 'Tools by problem', slug: 'navigation/by-problem' },
            { label: 'Tools by member journey stage', slug: 'navigation/by-lifecycle' },
            { label: 'Tools by business model', slug: 'navigation/by-business-model' },
            { label: 'Tools by technical skill', slug: 'navigation/by-technical-ability' },
            { label: 'Tools by budget', slug: 'navigation/by-budget' },
            { label: 'Running your tools', collapsed: true, autogenerate: { directory: 'ops' } },
          ],
        },
        {
          label: 'About',
          collapsed: true,
          items: [
            { label: 'Home', slug: 'index' },
            { label: 'New to choosing software?', slug: 'start/start-here' },
            { label: 'How to use this site', slug: 'start/how-to-use' },
            { label: 'How we review tools', slug: 'start/evaluation-criteria' },
            { label: 'Software licenses explained', slug: 'start/license-classes' },
            { label: 'Disclaimer', slug: 'start/disclaimer' },
            { label: 'Suggest a tool or fix', slug: 'contribute' },
            { label: 'Get setup help (CoworkingSpace.ai)', link: 'https://www.coworkingspace.ai/' },
          ],
        },
        {
          label: 'For developers',
          collapsed: true,
          items: [
            { label: 'Architecture', collapsed: true, autogenerate: { directory: 'architecture' } },
            { label: 'Category taxonomy', slug: 'contribute/taxonomy' },
            { label: 'Self-hosting and deployment', slug: 'guides/deployment-options' },
            { label: 'Maintenance and updates', slug: 'ops/maintenance' },
            { label: 'Trust and monetization policy', slug: 'ops/trust-policy' },
            {
              label: 'Contributing on GitHub',
              link: `${repositoryUrl}/blob/main/CONTRIBUTING.md`,
            },
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
