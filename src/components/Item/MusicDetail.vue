<template>
  <!-- 顶部 -->
  <div class="detailTop">
    <!-- 退出and歌曲详情 -->
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div>
        <p>{{musicList.name}}</p>
        <span v-for="(author, id) in musicList.ar" :key="id">{{author.name}}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
    </div>

    <!-- 分享 -->
    <div class="detailTopRight">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.musicList);
  },
  props: ['musicList'],
}
</script>

<style>
</style>