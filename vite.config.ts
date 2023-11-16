import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  build: {
    outDir: 'dist',
  },
});
