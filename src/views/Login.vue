<template>
  <div class="login">
    <p class="title">手机号登录</p>
    <div class="loginTop">登录体验更多精彩</div>
    <div class="loginBottom">
      <p>账号：<input type="text" name="phone" class="phone" placeholder="请输入QQ/微信/手机号码" v-model="phone" /></p>
      <p>密码：<input type="password" name="passworld" class="passworld" placeholder="请输入密码" v-model="password" /></p>

      <button class="btn" @click="Login">登录</button>
    </div>
  </div>
</template>

<script>
import { getUid } from '@/request/api/home';
export default {
  data() {
    return {
      phone: '',
      password: ''
    }
  },

  methods: {
    Login: async function () {
      let res = await this.$store.dispatch('getLogin', { phone: this.phone, password: this.password })
      // console.log(res);
      //判断是否登录成功
      if (res.data.code === 200) {
        this.$store.commit('updataIsLogin',true)
        this.$store.commit('updataToken',res.data.token)//获取用户token
        let uid = await getUid(res.data.account.id) //获取用户信息
        // console.log(uid);
        this.$store.commit('updataUser',uid)
        this.$router.push('/infoUser')
      }else{
        alert('账号或密码错误，请重新输入')
        this.password=''
      }
    },
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 667px;
  padding: 10px;

  .title {
    margin: 20px 0;
    font-weight: 600;
    text-align: center;
  }

  .loginTop {
    margin-top: 20px;
    font-weight: 600;
  }

  .loginBottom {
    margin: 20px 0;
    width: 100%;
    float: left;

    p {
      margin: 10px 0;

      .phone {
        padding: 5px;
        border: none;
        border-bottom: 1px solid #ccc;
        width: 80%;
      }

      .passworld {
        padding: 5px;
        border: none;
        border-bottom: 1px solid #ccc;
        width: 80%;
      }
    }


    .btn {
      margin: 20px 52px;
      width: 70%;
      height: 36px;
      border: none;
      border-radius: 18px;
      color: #fff;
      background-color: rgb(248, 97, 97);
    }
  }
}
</style>