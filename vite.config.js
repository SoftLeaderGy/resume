import { defineConfig } from 'vite';
import markdownItImsize from 'markdown-it-imsize';

import markdownToResume from './core/vite-plugin';

export default defineConfig({
  base: './',
  plugins: [
    markdownToResume({
      markdown(md) {
        md.use(markdownItImsize);
      },
      pdfName: '郭洋个人简历',
      pdfMargin: 0,
      webTitle: 'Java研发_郭洋'
    })
  ],
  build: {
    assetsDir: './'
  }
});
