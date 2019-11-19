<template>
<form class="signup">
  <div class="chat-form-main">
    <h3 class="title">聊天室</h3>
    <div class="form-item-control">
      <input type="text" v-model="userName" />
    </div>
    <div class="form-item-control">
      <input type="password" v-model="passWord" />
    </div>
    <div class="form-item-control">
      <button type="button" v-on:click="signup">注册</button>
    </div>
    <a href="javascript:;" class="link" v-on:click="signin">直接登录</a>
  </div>
</form>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    signin: function () {
      this.$router.push('/signin');
    },
    signup: function () {
      this.$http({
          methods: 'get',
          url: 'http://localhost:3000/register',
          params: {
            userName: this.userName,
            passWord: this.passWord
          }

        })
        .then((response) => {
          console.log('注册成功');
          if (response.status === 200) {
            // 跳转到上一个页面
            this.$router.push('/chatDetail');
          }
        })
        .catch(err => {
          console.error(err);
        })
    },
  }
};
</script>

<style>
.link {
  color: #096dd9;
  cursor: pointer;
}
</style>
