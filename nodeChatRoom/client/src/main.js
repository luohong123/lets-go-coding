import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
Vue.use(Antd);
import App from './App.vue';
import '@/styles/resets.css';
import '@/styles/global.css';
import '@/assets/fonts/ali_icon/iconfont.css';
Vue.config.productionTip = false;
import axios from 'axios';
Vue.prototype.$http = axios;
// // 本地用户信息
// Vue.prototype.userInfo = {
//   id: 'adfasf'
// };
import router from './router';
new Vue({
  render: h => h(App),
  router
}).$mount('#app');

