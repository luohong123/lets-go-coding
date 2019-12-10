import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
Vue.use(Antd);
import App from './App.vue';
import '@/styles/resets.css';
import '@/styles/global.css';
import '@/assets/fonts/ali_icon/iconfont.css';
// var opts = {
//   extraHeaders: {
//     'X-Custom-Header-For-My-Project': 'my-secret-access-token',
//     Cookie:
//       'user_session=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly'
//   }
// };
const isDev = process.env.NODE_ENV === 'development';
import io from 'socket.io-client';
const ip = isDev ? 'http://localhost:3000' : 'http://39.96.19.170:3000';
Vue.prototype.$socket = io(ip);
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
