<template>
<div class="chatDetail">
  <a v-on:click="signin" v-if="!userName" class="link">登录</a>
  <a v-on:click="signout" v-if="userName" class="link">退出登录</a>
  <p class="chat-subtitle">{{ online }}人在线</p>
  <p class="chat-subtitle">
    <span v-show="newUser">{{ newUser }} 进入聊天室</span>
  </p>
  <p class="chat-subtitle">
    <span v-show="leaveUser">{{ leaveUser }} 离开聊天室</span>
  </p>

  <chat :list="chats" v-if="chats.length" />
  <sendMessage />
  <p v-if="!userName">
    您现在是<span class="error">游客</span>,请登录后一起聊天吧!
  </p>
</div>
</template>

<script>
import chat from '@/components/Chat';
import sendMessage from '@/components/SendMessage';
import io from 'socket.io-client';
import {
  EventBus
} from '@/utils/event-bus.js';
import {
  getGuid,
  getUserName,
  getTime,
  debounce
} from '@/utils';
const socket = io('http://192.168.0.118:3000/');
export default {
  name: 'chatDetail',
  components: {
    chat,
    sendMessage
  },
  data() {
    return {
      chats: [],
      userName: '',
      passWord: '',
      times: 0,
      newUser: '',
      online: 0,
      leaveUser: ''
    };
  },
  computed: {},
  watch: {
    chats(val) {
      return this.chats;
    }
  },
  mounted() {
    // 发送消息
    this.sendMessage();
    socket.on('system', message => {
      console.dir(message, 'system-message');
      console.log('========================》system-message');
      if (!message) {
        return;
      }
      // 谁进入了房间
      this.newUser = name;
      // 谁离开了房间
      this.leaveUser = name;
      console.log(this.leaveUser + '离开了聊天室');
      // 在线人数
      this.online = message.online;
    });
    this.userName = getUserName();
  },
  created: function () {
    // 初始化消息
    this.initMessage();
    // 连接服务端
    this.connectServer();
  },
  updated: function () {},
  methods: {
    signout: function () {
      this.leaveUser = getUserName();
      // 告诉服务端已离开聊天室
      socket.emit('leave', this.leaveUser);
    },
    signin: function () {
      this.$router.push('/signin');
    },
    connectServer: function () {
      // 如果没有登录，分配一个游客身份，客户端向服务端发起请求,
      socket.on('connect', function () {
        console.log('连接成功');
      });
      // 已经登录
      if (getUserName()) {
        socket.emit('login', getUserName());
        socket.on('event', function (data) {});
        socket.on('disconnect', function () {});
      } else {
        // 未登录时,向服务端请求分配一个游客身份，可以查看聊天记录
        socket.emit('visitor', '我是一个游客');

      }
    },
    initMessage: function () {
      this.$http({
          methods: 'get',
          url: 'http://192.168.0.118:3000/chats'
        })
        // this 指向问题
        .then(response => {
          console.log(response, 'response');
          if (response['data'] && response.data.code == '0') {
            this.chats = response['data'].data;
            console.log(this.chats, 'newArr');
          }
        })
        .catch(function (error) {
          console.error(error, 'initMessage');
        });
    },
    sendMessage: function () {
      EventBus.$on('sendMessage', ({
        message
      }) => {
        let chatone;
        if (getUserName()) {
          chatone = {
            userName: getUserName(),
            avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3199241964,979639112&fm=26&gp=0.jpg',
            time: getTime('yyyy-MM-dd'),
            content: message,
            isRead: 'Y'
          };
          // 发出事件,客户端向服务端传数据
          socket.emit('sendMessage', chatone);
        } else {
          alert('请登录后再评论!');
        }
        socket.on('broadMessage', msg => {
          if(msg) {
            this.chats.push(msg);
            console.log(this.chats, '接收群消息');
          }
        });
        socket.on('connect', function () {
          console.log('连接成功');
        });
        socket.on('event', function (data) {});
        socket.on('disconnect', function () {});
      });
    }
  }
};
</script>

<style>
.chatDetail {
  padding: 10px 150px;
}

.chat-subtitle {
  height: 32px;
  line-height: 32px;
}
</style>
