<template>
  <ul class="tab-bar">
    <router-link class="tab-bar-item" v-for="(tab, index) in tabs" :key="index" :to="tab.router" v-bind:class="{'active':activeRoute == tab.router}">
      <li>
        <!-- <svg-icon class="tab-icon"
          :icon-class="activeRoute == tab.router ? tab.activeIcon : tab.icon" /> -->
        <a class="tab-text" href="javascript:;">{{ tab.name }}</a>
      </li>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    tabs: Array
  },
  computed: {
    activeRoute () {
      return this.$route.path
    }
  },
}
</script>
<style scoped>
 .tab-bar {
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ccc;
    display: flex;
    flex-direction: row;
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    & .tab-text {
      color: #818181;
      display: block;
    }
    &.active .tab-text, &.active li, &.active li .home{
      color: #0085FF;
    }
  }
</style>