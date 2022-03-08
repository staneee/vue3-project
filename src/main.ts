import { createApp } from "vue";
import { createPinia } from "pinia";

// 启动组件
import App from './App.vue';

// 路由定义
import router from "./router";

// 全局样式
import '@/styles/index.scss';

// 入口组件
const app = createApp(App);

// 挂载插件
app.use(createPinia());
app.use(router);

// 启动
app.mount("#app");
