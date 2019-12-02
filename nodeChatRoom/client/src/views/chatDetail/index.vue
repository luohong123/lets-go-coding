<template>
  <div class="chatDetail">
    <div class="left">
      <div class="searchbar"></div>
      <listitem :data="list" class="left-list" />
    </div>
    <div class="right">
      <headerbar v-bind:title="title" />
      <chat class="chat-wrap" :list="chats" v-if="chats.length" />
    </div>
    <!-- <a v-on:click="signin" v-if="!userName" class="link">登录</a> -->
    <!-- <a v-on:click="signout" v-if="userName" class="link">退出登录</a> -->
    <!-- <p class="chat-subtitle">{{ online }}人在线</p>
    <p class="chat-subtitle">
      <span v-show="newUser">{{ newUser }} 进入聊天室</span>
    </p>
    <p class="chat-subtitle">
      <span v-show="leaveUser">{{ leaveUser }} 离开聊天室</span>
    </p> -->
  </div>
</template>

<script>
import chat from '@/components/Chat'
import headerbar from '@/components/HeaderBar'
import listitem from '@/components/ListItem'
import io from 'socket.io-client'
// import io from "socket.io-client";
import { eventHub } from '@/utils/event-bus.js'
import { getGuid, getUserName, getTime, debounce } from '@/utils'
import { messageList } from '@/api/chat'
var opts = {
  extraHeaders: {
    'X-Custom-Header-For-My-Project': 'my-secret-access-token',
    Cookie:
      'user_session=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly'
  }
}
const socket = io('http://localhost:3000/', {
  forceNew: true
})

export default {
  name: 'chatDetail',
  components: {
    chat,
    headerbar,
    listitem,
    managepanel
  },
  data() {
    return {
      chats: [],
      userName: '',
      passWord: '',
      times: 0,
      newUser: '',
      online: 0,
      leaveUser: '',
      connected: false,
      list: [],
      title: '前端技术优选'
    }
  },
  computed: {},
  watch: {
    chats(val) {
      return this.chats
    }
  },
  mounted() {

    this.userName = getUserName();
    //  socket.on 的原因引起多次触发
    // 解决方法: https://github.com/socketio/socket.io/issues/474#issuecomment-2833227
    // https://groups.google.com/forum/?hl=en&fromgroups#!topic/socket_io/X9FRMjCkPco
    socket.on('login', data => {
      this.connected = true
      // Display the welcome message
      var message = 'Welcome to Socket.IO Chat – '
      console.log(message)
      // 添加参与者消息
      // addParticipantsMessage(data);
    })
    socket.on('new message', data => {
      this.addChatMessage(data)
    })
    socket.on('disconnect', function() {
      console.log('disconnect')
    })
    // 发送消息，并群消息通知所有人
    // 系统消息
    socket.on('system', message => {
      if (!message) {
        return
      }
      // 谁进入了房间
      this.newUser = name
      // 谁离开了房间
      this.leaveUser = name
      console.log(this.leaveUser + '离开了聊天室')
      // 在线人数
      this.online = message.online
    })
    this.userName = getUserName()
    // 发送群消息
    eventHub.$on('send', this.sendMsg)
    // 初始化消息列表
    this.initMessageList()
  },
  created: function() {},
  updated: function() {},
  beforeDestroy() {
    // 注意：注册的 Bus 要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况。
    // eventHub.$off('send', this.sendMsg);
  },
  methods: {
    /**
     * 初始化消息列表
     */
    initMessageList: function() {
      messageList('')
        // this 指向问题
        .then(response => {
          if (response['data'] && response.data.code == '0') {
            this.list = response['data'].data
          }
        })
        .catch(function(error) {
          console.error(error, 'initMessage')
        })
    },
    addParticipantsMessage: function(data) {
      let message = ''
      if (data.numUsers === 1) {
        message += "there's 1 participant"
      } else {
        message += 'there are ' + data.numUsers + ' participants'
      }
      consoloe.log(message)
    },
    signout: function() {
      this.leaveUser = getUserName()
      // 告诉服务端已离开聊天室
      socket.emit('leave', this.leaveUser)
    },
    signin: function() {
      this.$router.push('/signin')
    },
    connectServer: function() {
      // 如果没有登录，分配一个游客身份，客户端向服务端发起请求,
      socket.on('connect', function() {
        console.log('连接成功')
      })
      // 已经登录
      if (getUserName()) {
        // socket.emit("login", getUserName());
        socket.on('event', function(data) {})
        socket.on('disconnect', function() {})
      } else {
        // 未登录时,向服务端请求分配一个游客身份，可以查看聊天记录
        socket.emit('visitor', '我是一个游客')
      }
    },
    /**
     * 新增一条消息
     */
    addChatMessage: function(data) {
      if (data && this.connected) {
        // eventHub被多次触发、次数累加, 尤大回复：https://github.com/vuejs/vue/issues/3399
        // https://github.com/Pasoul/blog/issues/12
        this.chats.push(data)
        console.log(this.chats, '接收群消息')
      }
    },
    /**
     * 发送消息
     */
    sendMsg: function(data) {
      let message
      if (getUserName()) {
        message = {
          userName: getUserName(),
          avatar:
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3199241964,979639112&fm=26&gp=0.jpg',
          time: getTime('yyyy-MM-dd'),
          content: data.message,
          isRead: 'Y'
        }
        // 发出事件,客户端向服务端传数据
        socket.emit('new message', message)
      } else {
        alert('请登录后再评论!')
      }
    }
  }
}
</script>

<style>
.chatDetail {
  position: relative;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.left {
  width: 250px;
  height: 100%;
  background: #edeae8;
  display: flex;
  flex-direction: column;
}

.left-list {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
.left-list::-webkit-scrollbar {
  width: 0;
}

.left-list::-webkit-scrollbar-track {
  background-color: transparent;
}

/* 滚动条的滑轨背景颜色 */

.left-list::-webkit-scrollbar-thumb {
  background-color: transparent;
}

/* 滑块颜色 */
.right {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}

.right .chat-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-subtitle {
  height: 32px;
  line-height: 32px;
}

.more-introduce {
  width: 250px;
  height: calc(100% - 50px);
  position: absolute;
  background: #fff;
  top: 50px;
  right: -250px;
  visibility: hidden;
  transition: all .2s ease-in;
}

.more-introduce.show {
  right: 0;
  visibility: visible;
}
</style>
