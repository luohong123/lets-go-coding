<template>
<div class="navbar">
  <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3199241964,979639112&fm=26&gp=0.jpg" class="avatar" alt="avatar" />
  <router-link class="tab-bar-item" v-for="(tab, index) in tabs" :key="index" :to="tab.router" v-bind:class="{'active':activeRoute == tab.router}">
    <li class="icon-wrap">
      <a class="tab-text" href="javascript:;" :title="tab.name">
        <i class="icon iconfont" v-bind:class="tab.icon"></i>
      </a>
    </li>
  </router-link>
  <div class="more">
    <i class="icon iconfont icon-more"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tabs: Array
  },
  computed: {
    activeRoute() {
      return this.$route.path
    }
  },
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 100%;
  background: #2F2B2A;
  color: #8C8C8C;
  padding: 20px 0;
  position: relative;
  box-sizing: border-box;
}

.navbar .iconfont {
  cursor: pointer;
}

.navbar .iconfont:hover {
  color: #ffffff;
}

.navbar .avatar {
  width: 45px;
  height: 45px;
  object-fit: cover;
  margin: 7.5px;
  border-radius: 4px;
}

.tab-bar-item {
  text-align: center;
}

.icon-wrap {
  margin-top: 30px;
}

.tab-bar-item .iconfont {
  font-size: 24px;
}

.tab-bar-item.active .iconfont {
  color: #09BB07;
}

.navbar .more {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
}

.navbar .more .iconfont {
  font-size: 20px;
}

/* .tab-bar {
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
}
.tab-bar-item .tab-text {
  color: #818181;
  display: block;
}
.tab-bar-item .active .tab-text,
.tab-bar-item.active li,
.tab-bar-item.active li .home {
  color: #0085FF;
} */
</style>
