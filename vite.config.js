import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path'


export default defineConfig({
  base: './', // Ensure relative paths
  build: {
    outDir: 'dist', // Output directory
    minify: false, // Disable minification
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        data: resolve(__dirname, 'data.html'),
        flyby: resolve(__dirname, 'flyby.html'),
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        injectData: {
          injectScript: `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`,
        },
      },
    }),
  ],
});