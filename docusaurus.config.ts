import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Maria-js-education',
  tagline: 'Окунёмся в JS (JavaScript)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jeshio.github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/maria-js-education/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jeshio', // Usually your GitHub org/user name.
  projectName: 'maria-js-education', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Maria-js',
      logo: {
        alt: 'Тут логоВО',
        src: 'img/newyearegg.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Учить тут!',
        },
        {to: '/blog', label: 'Обновления', position: 'left'},
        {
          href: 'https://github.com/jeshio/maria-js-education/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Доки',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Где искать ответы?',
          items: [
            {
              label: 'ChatGPT',
              href: 'https://chatgpt.com',
            },
            {
              label: 'Google',
              href: 'https://google.com',
            },
          ],
        },
        {
          title: 'Тут можно добавить ещё что-то',
          items: [
            {
              label: 'Но ничего нет',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Копирайт за мной © ${new Date().getFullYear()} Maria-js, jeshio@yandex.ru`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
