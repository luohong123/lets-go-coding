<template>
<div class="sendMessage">
  <input type="text" class="message-input" v-model="message" v-on:keyup.enter="sendMessage" />
  <button type="submit" class="btn btn-primary" v-on:click="sendMessage">发送</button>
</div>
</template>

<script>
import {
  getGuid,
  debounce
} from '@/utils';
import {
  EventBus
} from '@/utils/event-bus.js';
export default {
  name: "SendMessage",
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage: function () {
      EventBus.$emit('sendmessage', {
        message: this.message
      })
    }
  },
  beforeDestroy() {
    EventBus.$off(['sendmessage']);
  },
  destroyed() {
     EventBus.$off(['sendmessage']);
  }
};
</script>

<style>
.sendMessage {
  display: flex;
  margin-top: 20px;
}

.message-input {
  padding: 4px;
  flex: 1;
}
</style>
