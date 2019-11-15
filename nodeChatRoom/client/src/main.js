import Vue from 'vue'
import App from './App.vue'
import '@/styles/resets.css';
Vue.config.productionTip = false

import router from './router';
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
