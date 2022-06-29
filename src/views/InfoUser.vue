<template>
    <img :src="user.data.profile.avatarUrl" alt="" class="avatarUrl">
    <div class="nickname">{{user.data.profile.nickname}}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  },
  mounted(){
    console.log(this.user);
  }
}
</script>

<style lang="less" scoped>
  .avatarUrl{
    width: 100px;
    height: 100px;
  }
</style>