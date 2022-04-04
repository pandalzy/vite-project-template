import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '#/': `${path.resolve(__dirname, 'types')}/`,
    },
  },
  plugins: [vue()]
})
