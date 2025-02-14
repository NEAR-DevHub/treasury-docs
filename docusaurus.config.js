// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { ProvidePlugin } = require("webpack");
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEAR Treasury Docs',
  tagline: 'Simple treasury for decentralized teams',
  url: 'https://docs.neartreasury.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NEAR-DevHub', // Usually your GitHub org/user name.
  projectName: 'treasury-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: ['/'],
        docsDir: ["docs"],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //editUrl: "https://github.com/NEAR-DevHub/treasury-docs/edit/main/",
          routeBasePath: "/",
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    // Add custom webpack config to make @stoplight/elements work
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve("process/browser"),
            }),
          ],
          resolve: {
            fallback: {
              buffer: require.resolve("buffer"),
              stream: false,
              path: false,
              process: false,
            },
          },
        };
      },
    }),
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Treasury Logo',
          src: 'img/near_logo.svg',
          srcDark: 'img/near_logo_white.svg',
        },
        items: [
          {
            label: "Documentation",
            position: "left",
            to: "/"
          },
          {
            label: "Website",
            position: "left",
            to: "https://neartreasury.com/"
          },
          {
            label: "Contact us",
            position: "right",
            to: "https://neartreasury.com/contact-form"
          },
          {
            href: 'https://github.com/NEAR-DevHub/treasury-docs',
            label: 'GitHub',
            position: 'right',
            className: 'github-link'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "rust",
          "java",
          "python",
          "ruby",
          "go",
          "typescript",
          "scala",
          "csharp",
        ],
      },
    }),
};

module.exports = config;
