<template>
  <div class="headerbar">
      <span class="left">{{left}}</span>
      <span class="title">{{title}}</span>
      <span class="more">{{more}}</span>
      <span></span>
    </div>
</template>
<script>
export default {
  name: 'HeaderBar',
  props:['title','more']
}
</script>
<style>
.headerbar {
  display: flex;
  
}
</style>