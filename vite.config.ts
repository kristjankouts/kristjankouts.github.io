import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => {
    return {
      // For GitHub project pages: use '/your-repo-name/'. Use '/' for user/org Pages (repo: username.github.io).
      base: command === 'build' ? '/portfolio-site/' : '/',
      server: {
        port: 3000,
        host: 'localhost',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
