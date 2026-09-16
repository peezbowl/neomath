import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          class8: path.resolve(__dirname, 'class8.html'),
          class9: path.resolve(__dirname, 'class9.html'),
          class10: path.resolve(__dirname, 'class10.html'),
          class8Rational: path.resolve(__dirname, 'class8-rational-numbers.html'),
          class9Polynomials: path.resolve(__dirname, 'class9-polynomials.html'),
          class10RealNumbers: path.resolve(__dirname, 'class10-real-numbers.html'),
          youtube: path.resolve(__dirname, 'youtube.html'),
          blogs: path.resolve(__dirname, 'blogs.html'),
          blogExample: path.resolve(__dirname, 'blog-example.html'),
          ebooks: path.resolve(__dirname, 'ebooks.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
