import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { univerPlugin } from '@univerjs/vite-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://124.221.68.239:5000', // 设置代理目标
        target: 'http://localhost:5000', // 设置代理目标
        changeOrigin: true, // 是否改变请求源地址
        rewrite: (path) => path.replace(/^\/api/, '') // 将 /api 替换为空字符串
      }
    }
  },
  plugins: [
    vue(),
    univerPlugin(),
    vuetify({
      autoImport: true,
      //styles: "expose",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },
});
