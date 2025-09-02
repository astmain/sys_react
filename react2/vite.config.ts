import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
    react(),

    // 定位代码的方式1: (inspect)   组件的地图http://127.0.0.1:8080/__inspect/
    inspect(),

    // 定位代码的方式2: 浏览器安装插件(react1s)直接跳转到源码
    // https://chromewebstore.google.com/search/react1s?utm_source=chrome-ntp-icon

    // 定位代码的方式3: 浏览器安装插件(React Developer Tools)
    // https://chromewebstore.google.com/search/React%20Developer%20Tools?utm_source=chrome-ntp-icon
  ],

  server: {
    host: "127.0.0.1",
    port: 8080,
    open: true,
  },
});
