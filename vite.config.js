import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: './', // Ensure relative paths
  build: {
    outDir: 'dist', // Output directory
    minify: false, // Disable minification
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