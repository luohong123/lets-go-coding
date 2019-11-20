<template>
<div class="chat">
  <ul>
    <li v-for="item in list" v-bind:key="item.id" class="chat-item">
      <p class="time">{{ item.time }}</p>
      <div class="chat-conversation them" v-if="item.userName !== userName">
        <img v-bind:src="item.avatar" class="avatar" alt />
        <div class="right">
          <span class="chat-user">{{ item.userName }}</span>
          <div class="chat-popover">{{ item.content }}</div>
        </div>
      </div>
      <div class="chat-conversation me" v-if="item.userName === userName">
        <div class="right">
          <span class="chat-user">{{ item.userName }}</span>
          <div class="chat-popover">{{ item.content }}</div>
        </div>
        <img v-bind:src="item.avatar" class="avatar" alt />
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { getUserName } from '@/utils';
export default {
  name: "Chat",
  props: {
    list: Array
  },
  data() {
    return {
      userName: getUserName()
    }
  }
};
</script>

<style>
.chat {
  background: #f5f5f5;
  height: 300px;
  overflow: auto;
}

.chat-item {
  margin-top: 20px;
  padding: 0 20px;
}

.chat-item-me {
  justify-content: flex-end;
}

.chat-item .time {
  text-align: center;
  color: #ccc;
}

.chat-item .avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.chat-conversation {
  display: flex;
  flex-direction: row;
}

.me {
  justify-content: flex-end;
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
  border: 1px solid #ccc;
  position: relative;
}
</style>
