import { createApp } from 'vue';
import App from './App.vue';
// element-ui引入
import ElementUI from 'element-plus';
import 'element-ui/lib/theme-chalk/index.css'; // 样式文件
import directives from '@/directives'; // 自定义指令
import plugins from '@/plugins'; // 插件

const app = createApp(App);

app.use(ElementUI).provide('appProvide', '123456').use(plugins).use(directives);
app.mount('#app');
