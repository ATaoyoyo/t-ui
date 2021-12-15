import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const path = (name: string) => resolve(__dirname, name)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

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
