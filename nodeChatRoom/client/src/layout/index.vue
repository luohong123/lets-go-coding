<template>
  <div class="layout">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <footer>
      <tabbar v-bind:tabs="tabs" />
    </footer>
  </div>
</template>

<script>
import tabbar from '@/components/TabBar';
export default {
  name: 'Layout',
  components: {
    tabbar
  },
  data: function() {
    return {
      transitionName: 'slideleft',
      tabs: [{
        id: 1,
        name: '首页',
        icon: 'home',
        activeIcon: 'home-active',
        router: '/'
      }, {
        id: 2,
        name: '消息',
        icon: 'message',
        activeIcon: 'message-active',
        router: '/message'
      }, {
        id: 3,
        name: '我的',
        icon: 'profile',
        activeIcon: 'profile-active',
        router: '/profile'
      }]
    }
  },
  watch: {
    $route() { // 监听路由变化重新赋值
      if (this.$router.isleft) {
        this.transitionName = 'slideleft';
      }
      if (this.$router.isright) {
        this.transitionName = 'slideright';
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>

