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
          youtube: path.resolve(__dirname, 'youtube.html'),
          ebooks: path.resolve(__dirname, 'ebooks.html'),
          contact: path.resolve(__dirname, 'contact.html'),

          // Root compatibility redirects
          class8Redirect: path.resolve(__dirname, 'class8.html'),
          class9Redirect: path.resolve(__dirname, 'class9.html'),
          class10Redirect: path.resolve(__dirname, 'class10.html'),
          blogsRedirect: path.resolve(__dirname, 'blogs.html'),

          // Class 8 Folder
          class8Hub: path.resolve(__dirname, 'class8/index.html'),
          class8Ch01: path.resolve(__dirname, 'class8/ch01-rational-numbers.html'),

          // Class 9 Folder
          class9Hub: path.resolve(__dirname, 'class9/index.html'),
          class9Ch02: path.resolve(__dirname, 'class9/ch02-polynomials.html'),

          // Class 10 Folder
          class10Hub: path.resolve(__dirname, 'class10/index.html'),
          class10Ch01: path.resolve(__dirname, 'class10/ch01-real-numbers.html'),

          // Blogs Folder
          blogsHub: path.resolve(__dirname, 'blogs/index.html'),
          blogTrig: path.resolve(__dirname, 'blogs/blog-trigonometric-identities.html'),
          blogCalcMistakes: path.resolve(__dirname, 'blogs/blog-common-calculation-mistakes.html'),

          // Templates Folder (Reusable by teacher)
          templateChapter: path.resolve(__dirname, 'templates/chapter-template.html'),
          templateBlog: path.resolve(__dirname, 'templates/blog-template.html'),
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
