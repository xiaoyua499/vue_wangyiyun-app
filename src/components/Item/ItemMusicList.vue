<template>
  <div class="itemMusicList">
    <!-- 列表顶部 -->
    <div class="listTop">
      <!-- 播放图标 -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <!-- 播放全部 -->
      <div class="allPlay">
        <span>播放全部</span>
        <div>(共{{ itemList.length }}首)</div>
      </div>
      <!-- 收藏 -->
      <div class="collect">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao-copy"></use>
        </svg>
        <span>收藏</span>
        <div>({{ subscribedCount }})</div>
      </div>
    </div>

    <!-- 列表底部 -->
    <div class="listBottom">
      <ul>
        <li v-for="(item, index, id) in itemList" :key="id">
          <span class="index">{{ index + 1 }}</span>
          <div class="song" @click="playMusic(index)">
            <span class="songName">{{ item.name }}</span>
            <span class="songAuthor" v-for="(author, id) in item.ar" :key="id">
              {{ author.name }}
            </span>
          </div>
          <div class="listBottom-right">
            <svg class="icon MV" aria-hidden="true" v-show="item.mv != 0">
              <use xlink:href="#icon-shipin"></use>
            </svg>
            <svg class="icon list" aria-hidden="true">
              <use xlink:href="#icon-31liebiao"></use>
            </svg>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  setup(props) {
    // console.log(props.subscribedCount);
  },

  props: ['itemList', 'subscribedCount'],

  methods:{
    playMusic(index){
      this.updatePlayList(this.itemList)
      this.updatePlayListIndex(index)
    },

    ...mapMutations(['updatePlayList','updatePlayListIndex'])
  }
}
</script>

<style lang="less" scoped>
.itemMusicList {
  margin-top: 25px;
  padding: 10px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  // height: 500px;

  // 顶部
  .listTop {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1rem;

    .icon {
      width: 0.4rem;
      height: 0.4rem;
    }

    .allPlay {
      display: flex;
      align-items: center;
      margin-left: 0.4rem;
      margin-right: 2rem;
      font-weight: 600;

      div {
        font-size: .24rem;
        color: #999;
      }
    }

    .collect {
      display: flex;
      align-items: center;
      padding: 0 .1rem;
      height: 70%;
      background-color: red;
      color: #fff;
      border-radius: 25px;
      font-size: 14px;
      line-height: 70%;

      .icon {
        padding-right: 5px;
      }
    }
  }

  //底部
  .listBottom {
    width: 100%;
    ul{
      li{
        margin: 5px 0;
        width: 100%;
        height: 50px;
        .index{
          width: 16px;
          float: left;
          line-height: 50px;
        }

        .song{
          float: left;
          margin-left: 8px;
          padding-top: 12px;
          width: 70%;
          height: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          
          .songName{
            display: block;
            line-height: 10px;
            font-size: 14px;
          }
          .songAuthor{
            margin-right: 10px;
            font-size: 12px;
            color: #999;
          }
        }

        .listBottom-right{
          display: flex;
          align-items: center;
          float: right;
          height: 100%;
          line-height: 50px;
          fill: #999;

          .list{
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>