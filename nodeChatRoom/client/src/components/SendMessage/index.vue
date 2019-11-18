<template>
<div class="sendMessage">
  <input type="text" v-model="message"/>
  <button type="submit" v-on:click="sendMessage">发送</button>
</div>
</template>

<script>
import { getGuid } from '@/utils';
import { EventBus } from '@/utils/event-bus.js';
export default {
  name: "SendMessage",
  data: function() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage: function () {
      EventBus.$emit('sendMessage', {
        id: getGuid(),
        message: this.message
      })
    }
  }
};
</script>

<style>
</style>
