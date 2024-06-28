module.exports = {
  title: 'JARLE',
  tagline: 'Just Another React Live Editor',
  url: 'https://jquense.github.io.',
  baseUrl: '/jarle/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'jquense', // Usually your GitHub org/user name.
  projectName: 'jarle', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'JARLE',
      logo: {
        alt: 'Jarle Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          href: 'https://github.com/jquense/jarle',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Jason Quense. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // [
    //   require.resolve('./plugins/docgen'),
    //   {
    //     src: ['../src/**/*.tsx'],
    //   },
    // ],
    require.resolve('./plugins/resolve-react'),
  ],
};
