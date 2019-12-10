<template>
<div class="chatDetail">
  <div class="left">
    <div class="searchbar-wrap" v-if="userName && userName !== 'undefined'">
      <searchbar />
      <div class="action-add">
        <a-icon type="plus-square" v-on:click="groupAddModal" />
      </div>
    </div>
    <listitem :list="list" class="left-list" />
  </div>
  <div class="right">
    <headerbar v-bind:title="groupInfo.GROUPNAME" v-on:toggle="toggle" ref="headerbar" />
    <chat class="chat-wrap" :list="historyChats" />
    <!-- 隐藏区域 -->
    <div class="more-introduce" v-bind:class="{ show: isOpen }">
      <managepanel :group="groupInfo" :list="groupUsers" />
    </div>
  </div>
  <!-- 创建群 -->
  <a-modal title="创建群聊" :visible="groupVisible" @ok="groupInfoAdd" :confirmLoading="groupConfirmLoading" @cancel="groupCancel">
    <div>
      <p>请输入群聊名称</p>
      <a-input v-model="groupName" />
    </div>
  </a-modal>
</div>
</template>

<script>
import chat from '@/components/Chat';
import headerbar from '@/components/HeaderBar';
import listitem from '@/components/ListItem';
import managepanel from '@/components/ManagePanel';
import searchbar from '@/components/SearchBar';
// import io from 'socket.io-client';
import {
  eventHub
} from '@/utils/event-bus.js';
import {
  getGuid,
  getUserName,
  getTime,
  getTimeS,
  debounce,
  showDeskTopNotice,
  getUserInfoByName,
  getUserInfoById,
  getToken
} from '@/utils';
import {
  messageList,
  getGroupInfoById,
  groupInfoCreate,
  getGroupUser
} from '@/api/chat';
import {
  historyList
} from '@/api/history';
// var opts = {
//   extraHeaders: {
//     'X-Custom-Header-For-My-Project': 'my-secret-access-token',
//     Cookie:
//       'user_session=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly'
//   }
// };
// const socket = io('http://localhost:3000/');

export default {
  name: 'chatDetail',
  components: {
    chat,
    headerbar,
    listitem,
    managepanel,
    searchbar
  },
  data() {
    return {
      historyChats: [],
      userName: getUserName(),
      passWord: '',
      times: 0,
      newUser: '',
      online: 0,
      leaveUser: '',
      connected: false,
      userInfo: {},
      list: [],
      chatContent: {},
      groupName: '',
      groupInfo: '',
      groupUsers: [], // 群成员
      groupInfo: {},
      groupVisible: false,
      groupConfirmLoading: false,
      isOpen: false // 是否展开
    };
  },
  computed: {},
  watch: {
    chats(val) {
      return this.chats;
    }
  },
  mounted() {
    //  this.$socket.on 的原因引起多次触发
    // 解决方法: https://github.com/this.$socketio/this.$socket.io/issues/474#issuecomment-2833227
    // https://groups.google.com/forum/?hl=en&fromgroups#!topic/this.$socket_io/X9FRMjCkPco
    // 接收广播的消息
    this.$socket.on('new message', data => {
      let title = `${data.message.FROMUSERID}对大家说:`;
      let msg = `${data.message.CONTENT}`;
      let icon = data.message['AVATAR'];
      showDeskTopNotice(title, icon, msg);
      let message = {
        MESSAGEID: data.message.MESSAGEID,
        GROUPID: data.message.GROUPID,
        FROMUSERID: data.message.USERID,
        TOUSERID: data.message.TOUSERID,
        CONTENT: data.message.CONTENT,
        TIME: data.message.TIME,
        TS: data.message.TS,
        AVATAR: data.message.AVATAR,
        USERNAME: data.message.USERNAME
      };
      // 刷新历史消息
      this.historyChats.push(message);
      setTimeout(() => {
        console.log(this.historyChats, 'this.historyChats');
        this.scrollTop();
      }, 50);
    });
    // 发送群消息
    eventHub.$on('send', this.addChatMessage);
    eventHub.$on('toggle', this.toggle);
    // 切换历史记录消息
    eventHub.$on('change', this.changeHistroy);
    // 初始化消息列表
    this.getMessageList();
    // 获取用户信息
    getUserInfoByName().then(result => {
      this.userInfo = result;
    });
  },
  created: function () {
    // 点击其他区域关闭面板
    document.addEventListener('click', e => {
      let box = document.querySelector('.toggle');
      let c1 = document.querySelector('.ManagePanel');
      if (box && !box.contains(e.target)) {
        this.isOpen = false;
      }
      if (c1 && c1.contains(e.target)) {
        this.isOpen = true;
      }
    });
  },
  beforeDestroy() {
    // 注意：注册的 Bus 要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况。
  },
  methods: {
    // 新增群组弹窗
    groupAddModal: function () {
      this.groupVisible = true;
    },
    // 创建新群
    groupInfoAdd: function () {
      this.groupInfo = {
        GROUPID: '',
        GROUPNAME: this.groupName,
        GROUPREMARK: '',
        CREATEUSERID: this.userInfo.USERID,
        CREATETIME: getTime('yyyy-MM-dd hh:mm:ss'),
        DISSOLUTIONTIME: '',
        GROUPSTATE: '0'
      };
      groupInfoCreate({
        groupInfo: this.groupInfo
      }).then(response => {
        if (response.code === '0') {
          this.$message.info(response.message);
          this.groupVisible = false;
        }
      });
    },
    // 隐藏群组弹窗
    groupCancel(e) {
      this.groupVisible = false;
    },
    // 点击消息列表切换历史记录
    changeHistroy(item) {
      // 群信息
      // 历史记录
      historyList(item).then(result => {
        if (result.code === '0') {
          this.historyChats = result['data'];
          setTimeout(() => {
            this.scrollTop();
            console.log(this.historyChats, 'this.historyChats');
          }, 0);
        }
      });
      // 群用户
      if (item.GROUPID !== '') {
        getGroupInfoById(item.GROUPID).then(result => {
          if (result.code === '0') {
            this.groupInfo = result.data;
          }
        });
        getGroupUser(item.GROUPID).then(result => {
          if (result.code === '0') {
            this.groupUsers = result.data;
          }
        });
      }
    },
    getMessageList: function () {
      let userId =
        this.userInfo && this.userInfo['userId'] ?
        this.userInfo['userId'] :
        undefined;
      messageList(userId)
        .then(response => {
          if (response.code === '0') {
            if (response.data && response.data.length > 0) {
              this.list = response.data;
              // 默认选择第一条
              this.changeHistroy(this.list[0]);
            }
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    toggle: function () {
      this.isOpen = !this.isOpen;
      document.body.removeEventListener('click', this.toggle);
    },
    scrollTop: function () {
      this.chatContent = document.querySelector('.message-list');
      this.chatContent.scrollTop = this.chatContent.scrollHeight;
    },

    addParticipantsMessage: function (data) {
      let message = '';
      if (data.numUsers === 1) {
        message += "there's 1 participant";
      } else {
        message += 'there are ' + data.numUsers + ' participants';
      }
      consoloe.log(message);
    },
    connectServer: function () {
      // 如果没有登录，分配一个游客身份，客户端向服务端发起请求,
      this.$socket.on('connect', function () {
        console.log('连接成功');
      });
    },
    /**
     * 新增一条消息
     */
    addChatMessage: function (data) {
      if (data) {
        // eventHub被多次触发、次数累加, 尤大回复：https://github.com/vuejs/vue/issues/3399
        // https://github.com/Pasoul/blog/issues/12
        let message = {
          MESSAGEID: '',
          GROUPID: this.groupInfo.GROUPID,
          FROMUSERID: this.userInfo.USERID,
          TOUSERID: '',
          CONTENT: data.message,
          TIME: getTime('yyyy-MM-dd hh:mm'),
          TS: getTimeS(),
          AVATAR: this.userInfo.AVATAR,
          USERNAME: this.userInfo.USERNAME
        };
        this.$socket.emit('new message', message);
      }
    }
  }
};
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

.left .searchbar-wrap {
  padding: 10px;
}

.left .searchbar-wrap::after {
  content: '';
  display: block;
  clear: both;
}

.left .searchbar {
  width: calc(100% - 40px);
  float: left;
}

.left .action-add {
  width: 26px;
  float: right;
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
  transition: all 0.2s ease-in;
}

.more-introduce.show {
  right: 0;
  visibility: visible;
}
</style>
