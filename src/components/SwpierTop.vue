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
import axios from 'axios'
import { onMounted, reactive } from '@vue/runtime-core';
export default {
  setup() {
    const state = reactive({
      images: []
    })

    onMounted(() => {
      axios.get('http://localhost:3000/banner?type=2')
        .then((response) => {
          // console.log(response);
          state.images = response.data.banners
        })
        .catch((error) => {
          console.log(error);
        });
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