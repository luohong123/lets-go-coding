<!--
 * @Author: honghong
 * @Date: 2019-11-23 10:17:20
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-23 10:46:21
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
<div class="chat">
  <ul class="message-list">
    <li v-for="item in list" v-bind:key="item.id" class="chat-item">
      <p class="time-show"><span class="time">{{ item.time }}</span></p>
      <div class="chat-conversation them" v-if="item.userName !== userName">
        <img v-bind:src="item.avatar" class="avatar" alt />
        <div class="chat-message">
          <span class="chat-user">{{ item.userName }}</span>
          <div class="chat-popover">{{ item.content }}</div>
        </div>
      </div>
      <div class="chat-conversation me" v-if="item.userName === userName">
        <div class="chat-message">
          <!-- <span class="chat-user">{{ item.userName }}</span> -->
          <div class="chat-popover">{{ item.content }}</div>
        </div>
        <img v-bind:src="item.avatar" class="avatar" alt />
      </div>
    </li>
  </ul>
  <div class="sendMessage">
    <div class="message-toolbar">

    </div>
    <textarea class="message-control" v-model="message" rows="3" cols="20" v-on:keyup.enter="sendMessage">
    </textarea>
    <div class="send-control">
      <button type="submit" class="btn btn-primary" v-on:click="sendMessage">发送(S)</button>
    </div>
  </div>
</div>
</template>

<script>
import {
  getUserName,
  getGuid,
  debounce
} from "@/utils";
import {
  eventHub
} from '@/utils/event-bus.js';
export default {
  name: "Chat",
  props: {
    list: Array
  },
  data() {
    return {
      userName: getUserName(),
      chatContent: {},
      message: ''
    };
  },
  mounted() {},
  methods: {
    sendMessage: function () {
      eventHub.$emit('send', {
        message: this.message
      })
      this.message = '';
      this.scrollTop();
    },
    scrollTop: function () {
      this.chatContent = document.querySelector(".message-list");
      console.log(this.chatContent.scrollHeight, 'scrollHeight');
      this.chatContent.scrollTop = this.chatContent.scrollHeight;
    }
  }
};
</script>

<style>
.chat {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}

.message-list {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.chat-item {
  margin-top: 30px;
  padding: 0 20px;
}

.chat-item:first-child {
  margin-top: 0px;
  /* margin-top: 20px; */
}

.chat-item-me {
  justify-content: flex-end;
}

.chat-item .time-show {
  text-align: center;
}

.chat-item .time {
  background: #DADADA;
  color: #fff;
  font-size: 12px;
  text-align: center;
  padding: 1px 8px;
  border-radius: 2px;
}

.chat-item .avatar {
  width: 35px;
  height: 35px;
  object-fit: cover;
  margin-right: 10px;
}

.me .avatar {
  margin-left: 10px;

}

.them .avatar {
  margin-right: 10px;

}

.chat-conversation {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}

.me {
  justify-content: flex-end;
}

.chat-message {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.chat-user {
  color: #ccc;
  font-size: 12px;
  margin-bottom: 5px;
}

.chat-popover {
  background: #fff;
  padding: 5px;
  border-radius: 2px;
  min-width: 100px;
  min-height: 20px;
  border: 1px solid #ccc;
  position: relative;
  max-width: 70%;
  user-select: text;
  word-break: break-word;
}

.me .chat-popover {
  background: #9EEA6A;
  color: #fff;
  border: 1px solid #9EEA6A;
}

.me .chat-popover::after {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border-top: 4px solid transparent;
  border-left: 5px solid #9EEA6A;
  border-bottom: 4px solid transparent;
  position: absolute;
  right: -6px;
  top: 15px;
}

.them .chat-popover::before {
  content: '';
  width: 0;
  height: 0;
  display: block;
  border-top: 4px solid transparent;
  border-right: 5px solid #9EEA6A;
  border-bottom: 4px solid transparent;
  position: absolute;
  left: -6px;
  top: 15px;
}

/* 发送消息 */
.sendMessage {
  width: 100%;
  height: 150px;
  padding: 10px 30px;
  border-top: 1px solid #ECECEC;
  background: #fff;
  box-sizing: border-box;
  /* display: flex; */
  /* margin-top: 20px; */
}

.message-toolbar {}

.message-control {
  border: 0;
  outline: none;
  overflow: auto;
  resize: none;
  width: 100%;
}

.send-control {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: right;
  position: absolute;
  left: 0;
  bottom: 10px;
}

.send-control .btn {
  background: #F5F5F5;
  color: #606060;
  border: 1px solid #E5E5E5;
  margin-right: 30px;
  font-weight: normal;
  font-size: 12px;
  transform: scale(0.9);
}

.send-control .btn:hover {
  background: #09BB07;
  color: #fff;
  border: 1px solid #09BB07;
}
</style>
