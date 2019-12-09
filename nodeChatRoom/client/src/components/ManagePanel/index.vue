<template>
  <div class="ManagePanel">
    <div class="header">
      <searchbar v-on:search="search" />
    </div>
    <div class="content">
      <div class="contacts">
        <div class="contacts-list-wrap">
          <ul class="contacts-list">
            <!-- <div class="contacts-list-item action">
            <span class="action-icon"> <i class="icon iconfont icon-jia"></i></span>
            <span class="text">添加</span>
          </div> -->
            <h5>在线用户 {{ list.length }} 人</h5>
            <li
              class="contacts-list-item"
              v-for="item in list"
              v-bind:key="item.ID"
            >
              <img :src="item.AVATAR" alt="" />
              <span class="text" :title="item.USERNAME">{{
                item.USERNAME
              }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="manage-setting">
        <span class="title">群名</span>
        <div class="setting-item">
          <span contentEditable="true" class="text">{{ group.GROUPNAME }}</span>
          <i class="icon iconfont icon-xiugai"></i>
        </div>
      </div>
      <div class="manage-setting">
        <span class="title">群公告</span>
        <div class="setting-item">
          <span contentEditable="true" class="text">{{
            group.GROUPREMARK
          }}</span>
          <i class="icon iconfont icon-xiugai"></i>
        </div>
      </div>
      <div class="manage-setting">
        <span class="title">我在本群的昵称</span>
        <div class="setting-item">
          <span contentEditable="true" class="text">{{ userName }}</span>
          <i class="icon iconfont icon-xiugai"></i>
        </div>
      </div>
      <div class="control">
        <a class="btn-opacity btn-delete" v-on:click="deleteExit">删除并退出</a>
      </div>
    </div>
  </div>
</template>

<script>
import searchbar from '@/components/SearchBar';
import { getUserName } from '@/utils';
export default {
  name: 'ManagePanel',
  components: {
    searchbar
  },
  props: ['list', 'group'],
  data() {
    return {
      userName: getUserName()
    };
  },
  // 根据群成员的USERID 去查找用户信息表对应的用户在线状态,就可以判断在线人数
  methods: {
    search: function() {},
    // 退出群组
    deleteExit: function() {
      this.$emit('exitGroup');
    },
  }
};
</script>

<style>
.ManagePanel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 25px 25px 0;
}

.ManagePanel .searchbar {
  width: 200px;
}

.ManagePanel .content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.ManagePanel .contacts {
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}

.ManagePanel .action-icon {
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: block;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #ccc;
  border-radius: 2px;
}

.action:hover .action-icon {
  color: #000;
}

.contacts-list-item .text {
  width: 100%;
  text-align: center;
  display: block;
  margin-top: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.contacts-list-wrap {
  width: 100%;
  /* margin-right: -16px; */
  /* box-sizing: border-box; */
}

.contacts-list {
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.contacts-list::after {
  content: '';
  display: block;
  clear: both;
}

.contacts-list-item {
  width: 36px;
  margin-bottom: 15px;
  cursor: pointer;
  margin-right: 17px;
  float: left;
}

.contacts-list-item:nth-child(4n + 0) {
  margin-right: 0;
}

.contacts-list-item img {
  width: 36px;
  height: 36px;
  border-radius: 2px;
}

.manage-setting {
  padding: 0 25px;
  margin-bottom: 20px;
}

.manage-setting .title {
  color: #ddd;
}

.manage-setting .text {
  display: inline-block;
  font-size: 12px;
  color: #000;
  background-color: #ffffff;
  padding: 2px 8px 2px 4px;
  max-width: 100%;
}

.manage-setting .setting-item {
  color: #000;
  margin-top: 10px;
  cursor: pointer;
}

.manage-setting .setting-item .iconfont {
  visibility: hidden;
}

.manage-setting .setting-item:hover .iconfont {
  visibility: visible;
}

.control {
  width: 100%;
  padding: 0px 25px;
  box-sizing: border-box;
}

.btn-delete {
  width: 100%;
  padding: 25px 0;
  text-align: center;
  display: block;
  font-size: 16px;
  cursor: pointer;
  color: red;
  border-top: 1px solid #ccc;
}
</style>
