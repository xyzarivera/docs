import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "documentation for one user",
  base: '/docs/',
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Conventions',
        items: [
          { text: 'TL;DR', link: '/conventions/' },
          { text: 'TypeScript', link: '/conventions/typescript' },
          { text: 'Testing', link: '/conventions/testing' }
        ]
      },
      {
        text: 'Books',
        items: [
          { text: 'WIP', link: '/books/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xyzarivera' }
    ]
  }
})
