/*
 * @Author: your name
 * @Date: 2021-03-05 15:27:16
 * @LastEditTime: 2021-03-05 15:34:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lets-go-coding/practice/vue-ssr-todo/src/index.js
 */
import Vue from 'vue';
import App from './app.vue'

const root = document.createElement('div');
document.body.appendChild(root)
new Vue({
    render:(h)=>h(App)
}).$mount(root)