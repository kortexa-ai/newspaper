import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a GitHub Pages *project* site this must be '/<repo-name>/'.
// If you later attach a custom domain (or move to a user/org root site),
// set VITE_BASE=/ in the workflow instead.
export default defineConfig({
  base: process.env.VITE_BASE || '/newspaper/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
