import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-router']
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
