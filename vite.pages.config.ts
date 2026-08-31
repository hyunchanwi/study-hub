import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/study-hub/',
  build: { outDir: 'dist-pages', emptyOutDir: true },
});
