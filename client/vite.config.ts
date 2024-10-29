import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { fileURLToPath } from 'url';

const port = process.env.VITE_PORT || "5173"; // Default to 5173 if no port is set

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_API_URL: process.env.VITE_API_URL,
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src/', import.meta.url)) },
      // { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      // { find: '@layouts', replacement: fileURLToPath(new URL('./src/layouts', import.meta.url)) },
      // { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      // { find: '@features', replacement: fileURLToPath(new URL('./src/features', import.meta.url)) },
      // { find: '@models', replacement: fileURLToPath(new URL('./src/models', import.meta.url)) },
      // { find: '@context', replacement: fileURLToPath(new URL('./src/context', import.meta.url)) },
      // { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) },
      // { find: '@lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
    ],
  },
  server:{
    host:true
  },
  build: {
    outDir: 'dist' // This is the default, but you can specify it explicitly if needed
  },
  preview: {
    port: parseInt(port) // Change this to your desired port
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
