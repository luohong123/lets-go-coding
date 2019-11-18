<template>
<div class="chatDetail">
  <button type="button" v-on:click="signin">登录</button>
  <div class="signup">
    <input type="text" v-model="userName" />
    <input type="password" v-model="passWord" />
    <button type="button" v-on:click="signup">注册</button>
  </div>
  <p v-if="goIn">进入聊天室</p>
  <chat :list="chats" v-if="chats.length" />
  <sendMessage />
</div>
</template>

<script>
import chat from "@/components/Chat";
import sendMessage from "@/components/SendMessage";
import io from 'socket.io-client';
import {
  EventBus
} from '@/utils/event-bus.js';
import {
  getGuid
} from '@/utils';
export default {
  name: "chatDetail",
  components: {
    chat,
    sendMessage
  },
  data() {
    return {
      goIn: false,
      chats: [],
      userName: '',
      passWord: ''
    }
  },
  // 只会执行一次
  mounted() {
    // 发送消息
    this.sendMessage();
  },
  created: function () {
    this.connectServer();
    // 发送消息
    this.sendMessage();
    // 初始化消息
    this.initMessage();
  },
  updated: function () {

  },
  methods: {
    signin: function () {

    },
    signup: function () {
      this.$http({
          methods: 'get',
          url: 'http://localhost:3000/register',
          params: {
            userName: this.userName,
            passWord: this.passWord
          }

        })
        .then((response) => {
          console.log('注册成功');
        })
        .catch(err => {
          console.error(err);
        })
    },
    getChats: function () {

    },
    connectServer: function () {
      const socket = io('http://localhost:3000/');
      socket.on('connect', function () {
        this.goIn = true;
        console.log('连接成功');
      });
      socket.on('event', function (data) {});
      socket.on('disconnect', function () {});
    },
    initMessage: function () {
      console.dir(this.$http, 'this.$http')
      this.$http({
          methods: 'get',
          url: 'http://localhost:3000/chats',
        })
        // this 指向问题
        .then((response) => {
          console.log(response['data'], 'response');
          if (response['data'] && response.status == 200) {
            console.log(response['data'], 'response-data');
            this.chats = this.chats.concat(response['data']);
            console.log(this.chats, 'newArr')
          }
        })
        .catch(function (error) {
          console.error(error, 'error');
        })
    },
    sendMessage: function () {
      EventBus.$on('sendMessage', ({
        id,
        message
      }) => {
        this.chats.push({
          id: getGuid(),
          name: 'aa',
          avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3199241964,979639112&fm=26&gp=0.jpg',
          time: '11月11日',
          content: message,
          isRead: 'Y',
        })
        const socket = io('http://localhost:3000');
        // 发出事件,客户端向服务端传数据
        socket.emit('chat message', message);
        socket.on('connect', function () {
          console.log('连接成功');
        });
        socket.on('event', function (data) {});
        socket.on('disconnect', function () {});
      })
    }
  }
};
</script>

<style>
</style>
