<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//导入网易云API数据
import { getBanner } from '@/request/api/home'
import { onMounted, reactive } from '@vue/runtime-core';
export default {

  setup() {
    const state = reactive({
      images: []
    })

    onMounted(async () => {
      let res = await getBanner()
      state.images = res.data.banners
    })

    return { state };
  },
}
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      padding: 0 .2rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }

    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>