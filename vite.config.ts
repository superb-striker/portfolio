import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        terminal: resolve(__dirname, 'terminal/index.html'),
      },
    },
  },
})
