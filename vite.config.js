import path from 'path';


import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
     // Template for index.html
     index: path.resolve(__dirname, '../dist/index.html'),

     // Paths
     assetsRoot: path.resolve(__dirname, '../dist'),
     assetsSubDirectory: 'static',
     assetsPublicPath: './',
    rollupOptions: {
      external: [],
    },
  },
})
