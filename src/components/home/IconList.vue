<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>个人歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.iconList{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: .2rem;
  width: 100%;
  height: 2rem;

  .iconItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;

    .icon{
      width: .6rem;
      height: .6rem;
    }
    
    span{
      font-size: .2rem;
    }
  }
}
</style>