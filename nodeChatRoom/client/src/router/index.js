/*
 * @Author: honghong
 * @Date: 2019-11-30 09:59:07
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-30 14:17:31
 * @Description: 
 * @email: 3300536651@qq.com
 */
import Vue from 'vue';
import Router from 'vue-router';
import { getToken } from '@/utils/index';
Vue.use(Router);
import Layout from '../layout';
const router = new Router({
  routes: [{
      path: '/',
      component: Layout,
      children: [{
          path: '/', // 首页-tab
          component: () => import('@/views/chatDetail/index')
        },
        {
          path: '/addresslist', // 通讯录
          component: () => import('@/views/addresslist/index')
        },
        {
          path: '/collection', //  收藏
          component: () => import('@/views/collection/index')
        },
        {
          path: '/folder', // 文件夹
          component: () => import('@/views/folder/index')
        },
        {
          path: '/building', // 正在开发中
          component: () => import('@/views/building/index')
        },
        {
          path: '/message', // 消息
          component: () => import('@/views/message/index')
        },
        {
          path: '/profile', // 我的
          component: () => import('@/views/profile/index')
        }
      ]
    },
    // {
    //   path: '/chatDetail', // 聊天室
    //   component: () => import('@/views/chatDetail/index')
    // },
    {
      path: '/signin', // 登录
      component: () => import('@/views/signin/index')
    },
    {
      path: '/signup', // 注册
      component: () => import('@/views/signup/index')
    }
  ]
});

const whiteList = ['/signin', '/signup']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    if (getToken() === 'true') {
      next();
    } else {
      // next({ path: '/signin' });
    }
  }
});
export default router;