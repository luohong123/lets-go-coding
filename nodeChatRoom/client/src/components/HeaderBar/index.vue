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
  
}
</style>