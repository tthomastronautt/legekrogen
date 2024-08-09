import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@utils': '/src/utils',
      '@variables': '/src/variables',
      '@providers': '/src/providers',
    },
  },
  plugins: [react()],
})
