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
      您现在是
      <span class="error">游客</span>,请登录后一起聊天吧!
    </p>
  </div>
</template>

<script>
import chat from "@/components/Chat";
import sendMessage from "@/components/SendMessage";
import io from "socket.io-client";
import { eventHub } from "@/utils/event-bus.js";
import { getGuid, getUserName, getTime, debounce } from "@/utils";
var opts = {
  extraHeaders: {
    "X-Custom-Header-For-My-Project": "my-secret-access-token",
    Cookie:
      "user_session=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly"
  }
};
const socket = io("http://localhost:3000/", {
  upgrade: false,
  transports: ["websocket"],
  reconnection: true,
  forceNew: false
});

export default {
  name: "chatDetail",
  components: {
    chat,
    sendMessage
  },
  data() {
    return {
      chats: [],
      userName: "",
      passWord: "",
      times: 0,
      newUser: "",
      online: 0,
      leaveUser: ""
    };
  },
  computed: {},
  watch: {
    chats(val) {
      return this.chats;
    }
  },
  mounted() {
    // 发送消息，并群消息通知所有人
    // eventHub.$off('sendMessage', this.sendMessage);
    // this.eventHub.$on(['sendmessage'], this.sendMessage1);
    // 系统消息
    socket.on("system", message => {
      console.dir(message, "system-message");
      console.log("========================》system-message");
      if (!message) {
        return;
      }
      // 谁进入了房间
      this.newUser = name;
      // 谁离开了房间
      this.leaveUser = name;
      console.log(this.leaveUser + "离开了聊天室");
      // 在线人数
      this.online = message.online;
    });
    this.userName = getUserName();
    // 发送群消息
    eventHub.$on("send", this.sendMsg);
  },
  created: function() {
    // 初始化消息
    this.initMessage();
    // 连接服务端
    // this.connectServer();
    // eventHub.$on('send', this.sendMsg)
  },
  updated: function() {},
  beforeDestroy() {
    // 注意：注册的 Bus 要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况。
    // eventHub.$off('send', this.sendMsg);
  },
  // destroyed() {
  //  eventHub.$off('send', this.sendMessage1);
  // },
  methods: {
    signout: function() {
      this.leaveUser = getUserName();
      // 告诉服务端已离开聊天室
      socket.emit("leave", this.leaveUser);
    },
    signin: function() {
      this.$router.push("/signin");
    },
    connectServer: function() {
      // 如果没有登录，分配一个游客身份，客户端向服务端发起请求,
      socket.on("connect", function() {
        console.log("连接成功");
      });
      // 已经登录
      if (getUserName()) {
        socket.emit("login", getUserName());
        socket.on("event", function(data) {});
        socket.on("disconnect", function() {});
      } else {
        // 未登录时,向服务端请求分配一个游客身份，可以查看聊天记录
        socket.emit("visitor", "我是一个游客");
      }
    },
    initMessage: function() {
      this.$http({
        methods: "get",
        url: "http://localhost:3000/chats"
      })
        // this 指向问题
        .then(response => {
          console.log(response, "response");
          if (response["data"] && response.data.code == "0") {
            this.chats = response["data"].data;
            console.log(this.chats, "newArr");
          }
        })
        .catch(function(error) {
          console.error(error, "initMessage");
        });
    },
    sendMsg: function(message) {
      let chatone;
      if (getUserName()) {
        chatone = {
          userName: getUserName(),
          avatar:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3199241964,979639112&fm=26&gp=0.jpg",
          time: getTime("yyyy-MM-dd"),
          content: message,
          isRead: "Y"
        };
        // 发出事件,客户端向服务端传数据
        socket.emit("sendMessage", chatone);
      } else {
        alert("请登录后再评论!");
      }
      // socket.on('connect', function () {
      //   console.log('连接成功');
      // });
      console.log(socket, "socket总共多少");
      //  socket.on 的原因引起多次触发
      // 解决方法: https://github.com/socketio/socket.io/issues/474#issuecomment-2833227
      // https://groups.google.com/forum/?hl=en&fromgroups#!topic/socket_io/X9FRMjCkPco
      socket.once("connect", socketConn => {});
      socket.on("broadMessage", msg => {
        if (msg) {
          // eventHub被多次触发、次数累加, 尤大回复：https://github.com/vuejs/vue/issues/3399
          // https://github.com/Pasoul/blog/issues/12
          this.chats.push(msg);
          console.log(this.chats, "接收群消息");
          // socket.close();
        }
      });

      socket.on("disconnect", function() {
        console.log("disconnect");
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
