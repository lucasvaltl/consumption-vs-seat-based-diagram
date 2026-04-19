import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/s-vs-c/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    allowedHosts: true
  }
})
