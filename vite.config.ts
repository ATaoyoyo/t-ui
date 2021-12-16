import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MarkDown from 'vite-plugin-md'
import ViteComponents from 'vite-plugin-components'
import { resolve } from 'path'

const path = (name: string) => resolve(__dirname, name)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    MarkDown(),
    // should be placed after `Markdown()`
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (path) => path.endsWith('.md'),
    }),
  ],

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import(reference) "${path('src/theme/common/var.less')}"`,
        },
        javascriptEnabled: true,
      },
    },
  },

  define: {
    __VUE_PROD_DEVTOOLS__: true,
  },

  resolve: {
    alias: {
      '@': path('src'),
      '@style': path('src/style'),
      '@package': path('src/package'),
    },
  },
})
