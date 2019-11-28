<template>
<form class="signup">
  <div class="chat-form-main">
    <h3 class="title">聊天室</h3>
    <p class="error">{{ tips }}</p>
    <div class="form-item-control">
      <input type="text" v-model="userName" />
    </div>
    <div class="form-item-control">
      <input type="password" v-model="passWord" />
    </div>
    <div class="form-item-control">
      <button type="button" class="btn btn-primary btn-block" v-on:click="signup">注册</button>
    </div>
    <a href="javascript:;" class="link signin-link" v-on:click="signin">直接登录</a>
  </div>
</form>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      userName: '',
      passWord: '',
      tips: ''
    }
  },
  methods: {
    signin: function () {
      this.$router.push('/signin');
    },
    signup: function () {
      this.$http({
          methods: 'get',
          url: 'http://192.168.0.111:3000/register',
          params: {
            userName: this.userName,
            passWord: this.passWord
          }
        })
        .then((response) => {
          if (response.data && response.data.code === '0') {
            // 跳转到上一个页面
            this.$router.push('/signin');
            console.log(response.data.message);
          } else if(response.data && response.data.status === '-1'){
            this.tips = response.data.message;
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

.signin-link {
  margin-top: 20px;
  float: right;
}
</style>
