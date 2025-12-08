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
      // 必要であれば動的なルートをここに配列で指定します
      // dynamicRoutes: ['/about', '/projects'] 
    })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
