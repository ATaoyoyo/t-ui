import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const path = (name: string) => resolve(__dirname, name)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

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
