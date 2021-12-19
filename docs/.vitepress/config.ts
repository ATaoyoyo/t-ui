import componentList from '../list.json'

const base = [
  { text: '介绍' },
  { text: '更新日志', children: [{ text: '新特性', link: '/log/' }] },
  { text: '开发指南', children: [{ text: '安装' }] },
  { text: '快速开始', link: '/' },
]

const sidebars = componentList.map((item) => {
  return {
    text: item.title,
    children: item.components.map((component) => {
      return {
        text: `${component.componentName} ${component.componentZhName}`,
        link: `/components/${component.path}/`,
      }
    }),
  }
})

module.exports = {
  title: 'Terrific UI',
  description: 'A simple Vue3 UI component.',
  lang: 'en-US',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: './public/images/T.png',
      },
    ],
  ],
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api'],
      },
    },
    nav: [
      {
        text: '指南',
        link: '/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ATaoyoyo/t-ui',
      },
    ],
    // 侧边栏
    sidebar: {
      '/': [...base, ...sidebars],
    },
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        scriptImports: ["import Vicons from '@vicons/ionicons5'"],
      })
    },
  },
}
