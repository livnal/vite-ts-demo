import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //   {
    //   refTransform: true
    // }
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts'], // vite 官方文档中 不建议忽略 .vue 后缀的文，所以在 import 引入文件的时候需要加 .vue
  },
})
