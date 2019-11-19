<template>
  <div class="signup">
    <div class="chat-form-main">
      <h3 class="title">聊天室</h3>
      <div class="form-item-control">
        <input type="text" v-model="userName" />
      </div>
      <div class="form-item-control">
        <input type="password" v-model="passWord" />
      </div>
      <div class="form-item-control">
        <button
          type="button"
          class="btn btn-primary btn-block"
          v-on:click="signin"
        >
          登录
        </button>
      </div>
      <a href="javascript:;" class="link signup-link" v-on:click="signup"
        >快速注册</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data() {
    return {
      userName: '',
      passWord: ''
    };
  },
  methods: {
    signin: function() {
      this.$http({
        method: 'get',
        url: 'http://localhost:3000/login',
        params: {
          userName: this.userName,
          passWord: this.passWord
        }
      })
        .then(response => {
          if (response.data && response.data.code === '0') {
            console.log(response, 'res:登录');
            this.$router.push('/chatDetail');
            // 登录成功后可以评论了
            let userInfo = {
              userName: response.data.userName
            }
            window.localStorage.setItem(
              'userInfo',
              JSON.stringify(userInfo)
            );
          }
          console.log(response, 'response');
        })
        .catch(err => {
          alert('用户名或密码错误');
        });
    },
    signup: function() {
      this.$router.push('/signup');
    }
  }
};
</script>

<style>
.signup-link {
  margin-top: 20px;
  float: right;
}
</style>
