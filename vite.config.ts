import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir:
      '/mnt/c/Users/cryst/AppData/Local/FoundryVTT/Data/modules/vtm5e-character-build',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
