import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 本番ビルド(production)の時だけリポジトリ名をベースパスにする
  // 開発時(development)は '/' になる
  const isProd = mode === 'production'
  const repoName = '/cfeel-web/' // リポジトリ名に合わせて変更してください

  return {
    base: isProd ? repoName : '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
