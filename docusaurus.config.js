// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ───────────────────────────── Identidade ─────────────────────────────
  title: 'Brainrats',                         // (opcional) nome exibido no <title>
  tagline: 'Documentação do projeto Brainrats', // (opcional) slogan
  favicon: 'img/favicon.ico',                  // (opcional) coloque seu ícone em img/

  // ───────────────────────────── Deploy ─────────────────────────────
  deploymentBranch: 'gh-pages',               // branch que receberá o build
  url: 'https://brainrats.github.io',         // domínio raiz do GitHub Pages
  baseUrl: '/brain-rats/',                    // pasta do projeto no Pages
  organizationName: 'BrainRats',              // nome do user/org no GitHub
  projectName: 'brain-rats',                  // nome do repositório
  trailingSlash: false,                       // URLs sem barra final

  // ───────────────────────────── Qualidade ──────────────────────────
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // ───────────────────────────── Idioma ─────────────────────────────
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  // ──────────────────────────── Presets ─────────────────────────────
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ──────────────────────────── Tema / UI ───────────────────────────
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',            // (opcional) para pré‑visualização em redes
      navbar: {
        title: 'Início',
        items: [
          {
            href: 'https://github.com/BrainRats/brain-rats',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [{ label: 'Introdução', to: '/docs/intro' }],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Brain Rats.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
