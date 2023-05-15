import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  preprocessorOptions: {
    less: {
      math: "always", // 括号内才使用数学计算
      globalVars: {
        // 全局变量
        // mainColor: "red",
      },
    },
  }
})
