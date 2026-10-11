import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  
  build: {
    // Optimierungen für Production Build
    minify: 'esbuild', // Schneller als terser, bereits in Vite enthalten
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy/index.html',
        terms: 'terms/index.html',
      },
      output: {
        manualChunks: {
          // Vendor Splitting für besseres Caching
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // Für Production
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
})
