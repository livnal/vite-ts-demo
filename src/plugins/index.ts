/*
 * @version:
 * @FilePath: /vite-demo/src/plugins/index.ts
 * @Description: vue插件入口文件, 注册插件必须暴露install方法或使用函数形式
 */
import type { App, Plugin } from 'vue';
import vueWait from './vueWait';

// 插件列表
const registerList = [vueWait];
export default function pluginsRegister(app: App) {
  registerList.forEach((i: Plugin) => app.use(i));
}
