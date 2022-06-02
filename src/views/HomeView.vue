<template>
  <div>
    <TopNav />
    <SwpierTop />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue'
import SwpierTop from '@/components/SwpierTop.vue'

export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwpierTop,
  }
}
</script>
