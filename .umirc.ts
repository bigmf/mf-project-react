import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  // base: '/dashboard/react/',
  // publicPath: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/profile', component: '@/pages/Profile' },
    { path: '/', redirect: '/profile' },
  ],
  fastRefresh: {},
});
