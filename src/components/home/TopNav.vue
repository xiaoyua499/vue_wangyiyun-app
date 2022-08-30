<template>
  <div class="topNav">
    <div class="topLeft" @click="updataSidebarShow">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topContent">
      <van-search shape="round" placeholder="请输入搜索关键词" @click="[$router.push('/search')]" />
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-saoyisao"></use>
      </svg>
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
export default {
  components: { Sidebar },
  data() {
    return {
      sidebarShow: false,
    };
  },
  mounted() {},
  methods: {
    //是否显示侧边栏
    updataSidebarShow() {
      this.sidebarShow = !this.sidebarShow
      var show = document.getElementsByClassName('van-overlay')
      show.onclick = function () {
        // console.log('111');
      }
    },
  },
  computed: {
  },

}
</script>

<style lang="less" scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
  width: 100%;
  height: 1rem;

  .topLeft {
    width: 25px;
    height: 25px;
  }

  .topContent {
    .van-search {
      padding: 0;
      width: 290px;
    }
  }

  .topRight {
    width: 25px;
    height: 25px;
  }
}
</style>