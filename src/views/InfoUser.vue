<template>
  <img :src="[user.data.profile.avatarUrl || users.data.profile.avatarUrl ]" alt="" class="avatarUrl">
  <div class="nickname">{{ user.data.profile.nickname || users.data.profile.nickname || '小宇啊' }}</div>
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
  }
}
</script>

<style lang="less" scoped>
.avatarUrl {
  width: 100px;
  height: 100px;
}
</style>