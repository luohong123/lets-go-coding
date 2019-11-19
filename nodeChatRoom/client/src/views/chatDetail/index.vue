<template>
<div class="chatDetail">
  <a v-on:click="signin" class="link">登录</a>
  <p>{{goIn}} 进入聊天室</p>
  <p>计算 {{ timer }}秒</p>

  <chat :list="chats" v-if="chats.length" />
  <sendMessage />
</div>
</template>

<script>
import chat from "@/components/Chat";
import sendMessage from "@/components/SendMessage";
import io from "socket.io-client";
import {
  EventBus
} from "@/utils/event-bus.js";
import {
  getGuid,
  getUserInfo,
  getTime
} from "@/utils";
const socket = io("http://localhost:3000/");
export default {
  name: "chatDetail",
  components: {
    chat,
    sendMessage
  },
  data() {
    return {
      goIn: '',
      chats: [],
      userName: "",
      passWord: "",
      times: 0
    };
  },
  computed: {
    timer: function() {
      return this.updateTime();
    }
  },
  mounted() {
    // 发送消息
    this.sendMessage();
  },
  created: function () {
    this.connectServer();
    // 初始化消息
    this.initMessage();
  },
  updated: function () {},
  methods: {
    updateTime: function () {
      setTimeout(() => {
        this.times++;
      }, 500);
    },
    signin: function () {
      this.$router.push("/signin");
    },

    getChats: function () {},
    connectServer: function () {
      socket.on("connect", function () {
        this.goIn = true;
        console.log("连接成功");
      });
      socket.emit('login', getUserInfo().userName);
      socket.on("event", function (data) {});
      socket.on("disconnect", function () {});
    },
    initMessage: function () {
      this.$http({
          methods: "get",
          url: "http://localhost:3000/chats"
        })
        // this 指向问题
        .then(response => {
          console.log(response["data"], "response");
          if (response["data"] && response.data.code == "0") {
            this.chats = response["data"];
            console.log(this.chats, "newArr");
          }
        })
        .catch(function (error) {
          console.error(error, "error");
        });
    },
    sendMessage: function () {
      EventBus.$on("sendMessage", ({
        id,
        message
      }) => {
        let chatone = {
          userName: getUserInfo().userName,
          avatar: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3199241964,979639112&fm=26&gp=0.jpg",
          time: getTime("yyyy-MM-dd"),
          content: message,
          isRead: "Y"
        };
        const socket = io("http://localhost:3000");
        // 发出事件,客户端向服务端传数据
        socket.emit("chat message", JSON.toString(chatone));
        socket.on("connect", function () {
          console.log("连接成功");
        });
        socket.on("event", function (data) {});
        socket.on("disconnect", function () {});
      });
    }
  }
};
</script>

<style></style>
