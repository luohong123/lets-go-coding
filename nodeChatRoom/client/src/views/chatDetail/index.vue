<template>
<div class="chatDetail">
  <chat v-bind:chats="chats" />
  <sendMessage/>
</div>
</template>

<script>
import chat from "@/components/Chat";
import sendMessage from "@/components/SendMessage";
export default {
  name: "chatDetail",
  components: {
    chat,
    sendMessage
  },
  data: function () {
    return {
      chats: [{
        id: 1,
        name: 'aa',
        avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3199241964,979639112&fm=26&gp=0.jpg',
        time: '11月11日',
        content: '大家好',
        isRead: 'Y',
      },{
        id: 2,
        name: 'bb',
        avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1207235440,959829401&fm=26&gp=0.jpg',
        time: '11月11日',
        content: '大家好',
        isRead: 'Y',
      },
      {
        id: 3,
        name: '我自己',
        avatar: 'http://img01.tooopen.com/Downs/images/2011/7/23/sy_20110723184508254017.jpg',
        time: '11月11日',
        content: '大家好',
        isRead: 'Y',
      }
      ]
    }
  }
};
</script>

<style>
</style>
