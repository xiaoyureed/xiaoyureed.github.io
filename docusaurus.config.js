const path = require('path')
const beian = '闽ICP备2020017848号-2'

const announcementBarContent = `<a href="/docs/rust-note" target="_blank">Rust 指北, 欢迎查看...</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xiaoyureed 的网络 Wiki',
  titleDelimiter: '-',
  url: 'https://xiaoyureed.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'xiaoyureed',
  projectName: 'xiaoyureed.github.io',
  tagline: '记录所学知识，领略编程之美',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.webp',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'xiaoyureed',
      },
      {
        name: 'keywords',
        content: 'blog, java, spring, microservice, python, rust, typescript, react, web',
      },
      {
        name: 'keywords',
        content: ' 半路转行的编程爱好者, 写过 Python, Rust, 现在主攻 Java 分布式系统',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'xiaoyureed',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        {
          label: '菜单',
          position: 'right',
          items: [
            {
              label: '博客',
              to: '/archive',
            },
            {
              label: '教程',
              to: 'docs/intro',
            },
            {
              label: '导航',
              to: 'resource'
            },
          ],
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '历史',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/xiaoyureed',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/xiaoyuhfq',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/3fPgwd3naN',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '友链',
              position: 'right',
              to: 'friends',
            },
            {
              label: '导航',
              position: 'right',
              to: 'resource',
            },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
            },
          ],
        },
      ],
      // copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT 愧怍 Built with Docusaurus.</p>`,
      copyright: `Copyright © ${new Date().getFullYear()} Xiaoyureed, Inc. Built with ❤️ by xiaoyu.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    algolia: {
      appId: '5SAMPKXTP9',
      apiKey: '6bcc974f2c7cb08cbe41a4fe29757b24',
      indexName: 'xiaoyureedio',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    // matomo: {
    //   matomoUrl: 'https://matomo.kuizuo.cn/',
    //   siteId: '1',
    //   phpLoader: 'matomo.php',
    //   jsLoader: 'matomo.js',
    // },
    giscus: {
      repo: 'xiaoyureed/xiaoyureed.github.io',
      repoId: 'R_kgDOJZDK4A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJZDK4M4CWCjj',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/xiaoyureed',
      twitter: 'https://twitter.com/xiaoyuhfq',
      // juejin: 'https://juejin.cn/user/1565318510545901',
      // csdn: 'https://blog.csdn.net/kuizuo12',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=775000738&amp;site=qq',
      // zhihu: 'https://www.zhihu.com/people/kuizuo',
      cloudmusic: 'https://music.163.com/#/user/home?id=84443935',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Xiaoyureed 的个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        // gtag: {
        //   trackingID: 'G-S4SD5NXWXF',
        //   anonymizeIP: true,
        // },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    // 'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'Xiaoyureed 的个人博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'xiaoyureed',
          // copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
          copyright: `Copyright © ${new Date().getFullYear()} Xiaoyureed, Inc. Built with ❤️ by xiaoyu.`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.webp',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config
