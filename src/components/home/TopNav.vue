<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topContent">
      <span @click="[$router.push('/infoUser'), activeing()]">我的</span>
      <span id="active" @click="[$router.push('/'), activeing()]">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    // document.getElementById('active').className = 'active'
  },
  methods: {
    //动态获取active样式
    activeing() {
      // 获取所有元素
      var spans = document.getElementsByTagName('span');
      for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
          for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
          }
          this.className = 'active';
        }
      }
    }
  }
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

  .topContent {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    // align-items: center;
    font-size: .36rem;

    .active {
      font-weight: 600;
    }
  }
}
</style>