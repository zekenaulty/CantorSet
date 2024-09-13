import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CantorSet/', 
  root: '.', // Root directory is the project root
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Specify the correct entry point
      },
    },
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Ensure the dist directory is cleaned before each build
  },
  server: {
    port: 3000, // Dev server port
  }
});
