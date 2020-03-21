import { defineConfig } from 'umi';

export default defineConfig({
  generateCssModulesTypings: true,
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
