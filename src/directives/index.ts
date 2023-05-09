/*
 * @Descripttion:
 * @version:
 * @FilePath: /vite-demo/src/directives/index.ts
 */
import type { App } from 'vue';
const all = require.context('./', false, /^(?!.*(?:index.ts$)).*\.ts$/);
export default function (app: App) {
  all.keys().forEach((key: string) => {
    const name = key.replace(/(\.\/|\/|\.ts)/g, '');
    app.directive(name, all(key).default);
  });
}
