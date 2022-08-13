<template>
  <div class="top-box">
    <div class="top-title">
      <van-nav-bar title="排行榜" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="top-center">
      <van-tabs v-model:active="active" scrollspy sticky>
        <van-tab class="top-sort" v-for="(item, index) in topTitleList" :title="item" :key="index">
          <div class="top-sort-title">{{ item }}</div>
          <div class="top-sort-content">
            <!-- <div>{{ topSort[index] }}</div> -->
            <div class="sort-content">
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { mapState } from 'vuex';
export default {
  props: ['topTitleList', 'topSort'],
  setup(props) {
    console.log(props);
    if (props.topSort == '') {
      props.topSort = JSON.parse(sessionStorage.getItem('topSort'))
    }
    const active = ref(0);
    const onClickLeft = () => history.back();
    return { active, onClickLeft, }
  },
}
</script>

<style>
</style>