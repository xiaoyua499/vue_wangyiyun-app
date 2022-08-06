<template>
  <div class="sidebar-box">
    <div class="sidebar-box-top">
      <!-- 用户区 -->
      <div class="sidebar-user">
        <!-- 用户 -->
        <div class="user">
          <img :src="[user.data.profile.avatarUrl || users.data.profile.avatarUrl || '']" alt="">
          <span class="name" v-if="user.data.profile.nickname || users.data.profile.nickname === ''">{{
            user.data.profile.nickname || users.data.profile.nickname
            }}</span>
          <span v-else @click="$router.push('/infoUser')">请登录账号！</span>
        </div>
        <!-- 扫一扫 -->
        <div class="Scan-QR-Code">
          <svg class="iconpark-icon">
            <use href="#scan-code"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="sidebar-box-bottom">
      <!-- vip -->
      <div class="sidebar-vip">
        <div class="vip-top">
          <div class="vip-top-left">黑胶·壹</div>
          <div class="vip-top-right">会员中心</div>
        </div>
        <div class="vip-center">
          黑胶VIP暑期优惠购
        </div>
        <div class="vip-bottom">
          受邀专享，黑胶VIP仅0.35元/天!
        </div>
      </div>
      <!-- 其他 -->
      <div class="sidebar-bottom">
        <ul class="other">
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#mail"></use>
              </svg>
              <span>消息中心</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#ticket"></use>
              </svg>
              <span>云贝中心</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#tips"></use>
              </svg>
              <span>创作者中心</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
        </ul>
        <ul class="other">
          <div class="other-title">音乐服务</div>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#headset-one"></use>
              </svg>
              <span>游戏专区</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
        </ul>
        <ul class="other">
          <div class="other-title">其他</div>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#setting-one"></use>
              </svg>
              <span>设置</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#moon"></use>
              </svg>
              <span>深色模式</span>
            </div>
            <van-switch size="18px" active-color="#ee0a24" inactive-color="#dcdee0" v-model="checked" />
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#alarm-clock-62p6ngcg"></use>
              </svg>
              <span>定时关闭</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#theme"></use>
              </svg>
              <span>个性装扮</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#headphone-sound"></use>
              </svg>
              <span>边听边存</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#square-small"></use>
              </svg>
              <span>添加Siri捷径</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#forbid"></use>
              </svg>
              <span>音乐黑名单</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
          <li class="other-item">
            <div class="other-item-left">
              <svg class="iconpark-icon">
                <use href="#protect"></use>
              </svg>
              <span>青少年模式</span>
            </div>
            <svg class="icon" aria-hidden="true" @click="backHome">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </li>
        </ul>
      </div>
      <van-button round size="large" class="van-button" v-if="isLogin">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      users: {
        data: {
          profile: {},
        }
      },
      checked:false,
    }
  },
  computed: {
    ...mapState(['user', 'isLogin'])
  },
  mounted() {
    //防止页面刷新丢失数据
    if (!isNaN(this.user)) {
      let user = this.user
      console.log('111', user);
    } else {
      const sessionUser = sessionStorage.getItem('user')
      if (sessionUser && sessionUser !== '[]') {
        let user = JSON.parse(sessionUser)
        console.log('222', user.data.profile.nickname);
        this.users = user
        console.log(this.users);
      }
    }
  }
}
</script>

<style lang="less" scoped>

.sidebar-box {
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  background-color: #efefef;

  .sidebar-box-top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;

    .sidebar-user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 10px;

      .iconpark-icon {
        width: 24px;
        height: 24px;
        color: #2e2e2e;
      }
    }
  }

  .sidebar-box-bottom {
    overflow: scroll;
    height: 620px;
    margin-top: 38px;

    .sidebar-vip {
      width: 100%;
      height: 100px;
      background-color: #373737;
      border-radius: 15px;
      margin: 10px 0;

      .vip-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 1px;

        .vip-top-left {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
        }

        .vip-top-right {
          padding: 5px;
          color: #d6c4be;
          font-size: 12px;
          border: #d6c4be solid 1px;
          border-radius: 15px;
        }
      }

      .vip-center {
        padding: 0 10px;
        font-size: 10px;
        color: #d6c4be;
      }

      .vip-bottom {
        padding: 0 10px 10px;
        font-size: 10px;
        color: #d6c4be;
        margin-top: 25px;
      }
    }

    .sidebar-bottom {
      .other {
        padding: 10px;
        margin: 15px 0;
        background-color: #fff;
        border-radius: 15px;

        .other-title {
          font-size: 10px;
          color: #c0c0c0;
          border-bottom: 1px solid #e3e3e3;
        }

        .other-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #e3e3e3;

          .other-item-left {
            display: flex;
            align-content: center;

            .iconpark-icon {
              margin-right: 5px;
              width: 20px;
              height: 20px;
              color: #2e2e2e;
            }
          }

          .icon {
            width: 20px;
            height: 20px;
            fill: #c0c0c0;
          }
        }

        .other-item:last-child {
          border-bottom: none;
        }
      }
    }

    .van-button {
      border-radius: 10px;
      color: red;
      height: 40px;
    }
  }
}
</style>