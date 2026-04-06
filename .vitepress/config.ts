import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "this time it's documented",
  base: '/docs/',
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Conventions', link: '/conventions/' }
    ],

    sidebar: [
      {
        text: 'Conventions',
        items: [
          { text: 'Index', link: '/conventions/' },
          { text: 'TypeScript', link: '/conventions/typescript' },
          { text: 'Testing', link: '/conventions/testing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xyzarivera' }
    ]
  }
})
