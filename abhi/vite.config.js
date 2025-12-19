import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'https://medical-plants-backend-4ymm.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },


})
