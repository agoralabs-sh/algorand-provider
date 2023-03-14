// @ts-check
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Directories
const docsDir = path.resolve(__dirname, 'docs');
const assetsDir = path.resolve(docsDir, 'assets');
const scriptsDir = path.resolve(docsDir, 'scripts');
const stylesDir = path.resolve(docsDir, 'styles');

// Links
const githubLink = 'https://github.com/agoralabs-sh/algorand-provider';
const npmLink = 'https://npmjs.com/agoralabs-sh/algorand-provider';

// Titles
const title = 'Algorand Provider';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: title,
  tagline: 'Bridging the gap between dApps and wallets in a standardized way',
  favicon: 'images/favicon.png',
  url: 'https://algorand-provider.agoralabs.sh',
  baseUrl: '/',
  organizationName: 'agoralabs-sh',
  projectName: 'algorand-provider',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              {
                sync: true,
              },
            ],
          ],
          routeBasePath: '/',
          sidebarPath: require.resolve(path.resolve(scriptsDir, 'sidebars.js')),
        },
        theme: {
          customCss: [
            require.resolve(path.resolve(stylesDir, 'global.css')),
            require.resolve(path.resolve(stylesDir, 'navbar.css')),
          ],
        },
      }),
    ],
  ],

  staticDirectories: [assetsDir],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: title,
        logo: {
          alt: 'Algorand logo',
          src: 'images/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'getting-started/index',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'api-reference/index',
            position: 'left',
            label: 'API Reference',
          },
          // right
          {
            href: githubLink,
            position: 'right',
            className: 'header-icon-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: npmLink,
            position: 'right',
            className: 'header-icon-npm-link',
            'aria-label': 'npm registry',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: 'overview',
              },
              {
                label: 'Getting Started',
                to: 'getting-started',
              },
              {
                label: 'API Reference',
                to: 'api-reference',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: githubLink,
              },
              {
                label: 'npm',
                href: npmLink,
              },
            ],
          },
        ],
        copyright: `Developed with ❤️ by Agora Labs. Licensed under <a href="${githubLink}/blob/main/LICENSE" target="_blank">MIT</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
