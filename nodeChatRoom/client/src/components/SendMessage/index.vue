<template>
<div class="sendMessage">
  <input type="text" />
  <button type="submit" v-on:click="sendMessage">发送</button>
</div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: "SendMessage",
  props: ["massege"],
  methods: {
    sendMessage: function () {
      const socket = io('http://localhost:3000/');
      socket.on('connect', function () {
        console.log('连接成功');
      });
      socket.on('event', function (data) {});
      socket.on('disconnect', function () {});
    }
  }
};
</script>

<style>
</style>
