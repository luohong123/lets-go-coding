<template>
  <div class="headerbar">
      <span class="left" v-if="left">{{left}}</span>
      <span class="title" v-if="title">{{title}}</span>
      <span class="more" v-if="more">{{more}}</span>
      <span></span>
    </div>
</template>
<script>
export default {
  name: 'HeaderBar',
  props:['title','more','left']
}
</script>
<style>
.headerbar {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #000;
  padding-left: 30px;
  padding-right: 15px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.headerbar .title {
  font-size: 20px;
}
</style>