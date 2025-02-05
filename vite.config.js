import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-SPA/', // Set to your repository name
  plugins: [react()],
});
