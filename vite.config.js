/*
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 10:25:56
 * @FilePath: /appleOfficeWebsite/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    // 预处理器配置项 将less配置为全局可使用
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style.less";',
      },
    },
  },
})
