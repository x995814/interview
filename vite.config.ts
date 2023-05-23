import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // 不生成 source map
    terserOptions: {
      compress: {
        // 打包时清除 console 和 debug 相关代码
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  envDir: "./src/config",
  server: {
    open: true,
    hmr: true,
    proxy: {
      // 代理
      "/api": {
        target: "http://xxx.xxxxxxx.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  base:'/'
});
