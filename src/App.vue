<template>
<TopNav v-show="$store.state.isTopNav"/>
  <router-view />
  <FooterMusic v-show="$store.state.isFooterMusic"/>
</template>

<script>
import FooterMusic from '@/components/Item/FooterMusic.vue'
import TopNav from '@/components/home/TopNav.vue'
export default {
  components: { FooterMusic,TopNav}
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: .5rem;
  height: .5rem;
}

a {
  color: black;
}
</style>
