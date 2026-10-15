import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  
  build: {
    // Optimierungen für Production Build
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy/index.html',
        terms: 'terms/index.html',
        imprint: 'imprint/index.html',
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/framer-motion')) {
            return 'animation-vendor';
          }
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-router-dom')) {
            return 'router-vendor';
          }
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  
  // Optimierte Server-Konfiguration
  server: {
    port: 5173,
    host: true,
  },
  
  // Optimierte Preview-Konfiguration
  preview: {
    port: 4173,
    host: true,
  },
}))
