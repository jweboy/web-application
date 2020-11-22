/*
 * @Author: jweboy
 * @Date: 2020-03-21 23:15:41
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-07 22:12:13
 */
import { defineConfig } from 'umi';

console.log(process.env.NODE_ENV);
const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

export default defineConfig({
  // generateCssModulesTypings: true,
  base: '/web-application/',
  publicPath: isDev ? '/' : '/web-application/',
  // cssLoader: {
  //   modules: true, // 开启 CSS Modules
  //   sourceMap: true, // 开启 sourceMap
  //   localsConvention: 'camelCase'
  // },
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     }
  //   });
  // },
  routes: [{ path: '/', component: '@/pages/index' }],
});
