import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
    return {
      // For GitHub project pages: use '/your-repo-name/'. Use '/' for user/org Pages (repo: username.github.io).
      base: command === 'build' ? '/portfolio-site/' : '/',
      server: {
        port: 5173,
        host: 'localhost',
      },
    };
});
