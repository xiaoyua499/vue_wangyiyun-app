<template>
  <!-- 导航栏 -->
  <div class="top">
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
      </template>
      <template #right>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </template>
    </van-nav-bar>
  </div>
  <div class="infoUser">
    <!-- 用户 -->
    <div class="user">
      <!-- 头像 -->
      <img src="../assets/头像.jpg" alt="" class="avatarUrl">
      <!-- 用户信息 -->
      <div class="message">
        <h1 class="nickname">{{ '小宇啊' }}</h1>
        <ul class="details">
          <li><span class="number">{{ 2 }}</span>关注</li>
          <li><span class="number">{{ 1 }}</span>粉丝</li>
          <li>Lv<span class="number">{{ 6 }}</span></li>
        </ul>
      </div>
    </div>
    <!-- 音乐应用 -->
    <div class="MusicApps">
      <!-- 图标 -->
      <div class="icons">
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
        <div class="app">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
          <p>本地/下载</p>
        </div>
      </div>
      <p class="bottom"><span class="add">+</span>音乐应用</p>
    </div>
  </div>
  <!-- 侧边栏 -->
  <van-popup v-model:show="sidebarShow" position="left" :style="{ height: '100%', width: '70%' }" teleport="#app">
    <Sidebar></Sidebar>
  </van-popup>
</template>

<script>
//注册Sidebar侧边栏组件
import Sidebar from '@/components/home/Sidebar';
import { mapState } from 'vuex'
export default {
  components: { Sidebar },
  data() {
    return {
      users: {
        data: {
          profile: {},
        }
      },
      sidebarShow: false,
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    //防止页面刷新丢失数据
    if (!isNaN(this.user)) {
      let user = this.user
      // console.log('111', user);
    } else {
      const sessionUser = sessionStorage.getItem('user')
      if (sessionUser && sessionUser !== '[]') {
        let user = JSON.parse(sessionUser)
        // console.log('222', user.data.profile.nickname);
        this.users = user
        // console.log(this.users);
      }
    }
  },
  methods: {
    onClickLeft() {
      this.sidebarShow = !this.sidebarShow
      var show = document.getElementsByClassName('van-overlay')
      show.onclick = function () {
        // console.log('111');
      }
    },
    onClickRight() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
// 导航栏
.top {
  .van-nav-bar {
    background-color: #f6f6f6;
  }
}

// 用户
.infoUser {
  padding: 40px 20px;
  height: 11rem;
  background-color: #f6f6f6;

  .user {
    position: relative;
    height: 80px;
    border-radius: 10px;
    background-color: #fff;

    .avatarUrl {
      position: absolute;
      left: 50%;
      top: -25px;
      transform: translate(-50%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .message {
      padding: 30px 0;

      .nickname {
        text-align: center;
        font-size: 17px;
      }

      .details {
        display: flex;
        justify-content: center;

        li {
          margin: 5px 5px;
          color: #979797;
          font-size: 12px;

          .number {
            margin: 0 5px;
          }
        }
      }
    }
  }
}

// 音乐应用
.MusicApps {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;

  .icons {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    padding: 20px 10px;
    width: 100%;
    height: 150px;
    border-bottom: #f8f8f8d1 solid 2px;

    .app {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      // margin-top: 20px;
      width: 25%;

      .icon {
        width: 30px;
        height: 30px;
      }

      p {
        font-size: 12px;
        color: #6a6a6a;
      }
    }
  }

  .bottom {
    margin: 0 10px;
    padding: 10px 0;
    font-size: 12px;
    color: #716e6e95;

    .add {
      margin: 5px;
    }
  }
}
</style>