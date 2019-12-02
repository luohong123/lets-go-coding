<template>
<div class="chatDetail">
  <div class="left">
    <div class="searchbar"></div>
    <listitem :data="list" class="left-list" />
  </div>
  <div class="right">
    <headerbar v-bind:title="title" v-on:toggle="toggle" ref="headerbar" />
    <chat class="chat-wrap" :list="chats" />
    <!-- 隐藏区域 -->
    <div class="more-introduce" v-bind:class="{'show':isOpen}">
      <managepanel :group="group" />
    </div>
  </div>
</div>
</template>

<script>
import chat from "@/components/Chat";
import headerbar from "@/components/HeaderBar";
import listitem from "@/components/ListItem";
import managepanel from "@/components/ManagePanel";
import io from "socket.io-client";
import {
  eventHub
} from "@/utils/event-bus.js";
import {
  getGuid,
  getUserName,
  getTime,
  debounce,
  showDeskTopNotice
} from "@/utils";
import {
  messageList
} from '@/api/chat'
var opts = {
  extraHeaders: {
    'X-Custom-Header-For-My-Project': 'my-secret-access-token',
    Cookie: 'user_session=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly'
  }
};
const socket = io('http://localhost:3000/')

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
      title: '前端技术优选',
      chatContent: {},
      group: {
        NAME: '前端技术优选',
        DESCRIBE: '本群为技术交流群，请勿发无关广告，定期处理非技术人员推广。谢谢支持。群内发助力一律踢！',
        MYNAME: '红红'
      },
      isOpen: false // 是否展开
    };
    title: '前端技术优选'
  },
  computed: {},
  watch: {
    chats(val) {
      return this.chats
    }
  },
  mounted() {
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
    });
    socket.on("new message", data => {
      this.addChatMessage(data);
      let title = `${data.userName}对大家说:`;
      let msg = `${data.content}`;
      let icon = data.avatar;
      showDeskTopNotice(title, icon, msg);
    });
    socket.on("disconnect", function () {
      console.log("disconnect");
    });
    socket.on('new message', data => {
      this.addChatMessage(data)
    })
    socket.on('disconnect', function () {
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
    });
    // 发送群消息
    eventHub.$on("send", this.sendMsg);
    eventHub.$on('toggle', this.toggle);
    // 发送群消息
    eventHub.$on('send', this.sendMsg) >>>

      // 初始化消息列表
      this.initMessageList()
  },
  created: function () {
    // 点击其他区域关闭面板
    document.addEventListener('click', e => {
      let box = document.querySelector('.toggle');
      if (!box.contains(e.target)) {
        this.isOpen = false;
      }
    })
    // 初始化消息
    this.initMessage();

    // 连接服务端
    // this.connectServer();
    // eventHub.$on('send', this.sendMsg)
  },
  beforeDestroy() {
    // 注意：注册的 Bus 要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况。
    // eventHub.$off('send', this.sendMsg);
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen;
      document.body.removeEventListener('click', this.toggle)
    },
    scrollTop: function () {
      this.chatContent = document.querySelector(".message-list");
      console.log(this.chatContent.scrollHeight, 'scrollHeight');
      this.chatContent.scrollTop = this.chatContent.scrollHeight;
    },
    /**
     * 初始化消息列表
     */
    initMessageList: function () {
      messageList('')
        // this 指向问题
        .then(response => {
          if (response['data'] && response.data.code == '0') {
            this.list = response['data'].data
          }
        })
        .catch(function (error) {
          console.error(error, 'initMessage')
        })
    },
    addParticipantsMessage: function (data) {
      let message = ''
      if (data.numUsers === 1) {
        message += "there's 1 participant"
      } else {
        message += 'there are ' + data.numUsers + ' participants'
      }
      consoloe.log(message)
    },
    signout: function () {
      this.leaveUser = getUserName()
      // 告诉服务端已离开聊天室
      socket.emit('leave', this.leaveUser)
    },
    signin: function () {
      this.$router.push('/signin')
    },
    connectServer: function () {
      // 如果没有登录，分配一个游客身份，客户端向服务端发起请求,
      socket.on('connect', function () {
        console.log('连接成功')
      })
    },
    initMessage: function () {
      this.$http({
          methods: "get",
          url: "http://192.168.0.111:3000/chats"
        })
        // this 指向问题
        .then(response => {
          console.log(response, "response");
          if (response["data"] && response.data.code == "0") {
            this.chats = response["data"].data;
            console.log(this.chats, "newArr");
          }
        })
        .catch(function (error) {
          console.error(error, "initMessage");
        });
    },
    /**
     * 新增一条消息
     */
    addChatMessage: function (data) {
      if (data) {
        // eventHub被多次触发、次数累加, 尤大回复：https://github.com/vuejs/vue/issues/3399
        // https://github.com/Pasoul/blog/issues/12
        this.chats.push(data);
        // if (this.userName) {

        // }
        setTimeout(() => {
          this.scrollTop();
        }, 50);
        console.log(this.chats, "接收群消息");
        /**
         * 新增一条消息
         */
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

.left-list::-webkit-scrollbar-thumb {
  background-color: transparent;
}

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
