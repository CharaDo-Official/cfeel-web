import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig(() => {

  return {
    base: '/',
    plugins: [react(), sitemap({
      hostname: 'https://cfeel.net',
      dynamicRoutes: ['/charado', '/aboutus', '/support'],
    })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
