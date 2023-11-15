import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths(), basicSsl()],
  build: {
    outDir: 'dist',
  },
});
