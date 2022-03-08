import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// ElementPlus
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 如果想直接导入element-plus所有的样式
        // @use "element-plus/theme-chalk/src/index.scss" as *;
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    // ElementPlus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        })
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
  ],

});
