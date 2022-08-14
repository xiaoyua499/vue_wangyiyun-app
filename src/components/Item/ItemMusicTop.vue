<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg">
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
  <!-- <div class="itemMusicCenter">
    <div class="itemTop">
      <div class="cover">
        <img :src="playlist.coverImgUrl" alt="">
      </div>
      <div class="details">
        <span class="detailsTop">{{ playlist.name }}</span>
        <div class="detailsCenter">
          <img :src="playlist.creator.backgroundUrl" alt="">
          <span>{{ playlist.creator.nickname }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
        <div class="detailsBottom">
          <span>{{ playlist.creator.signature }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
    </div>
  </div> -->
  <div class="itemMusicBottom">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        <span>{{ playlist.playCount }}</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
        </svg>
        <span>下载</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <span>多选</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  setup(props) {
    console.log(props);
    //判断数据是否拿到
    if (props.playlist.creator == "") {
      props.playlist.creator = JSON.parse(sessionStorage.getItem('itemDetail').playlist).creator
    }
  },

  props: ['playlist']
}
</script>

<style lang="less" scoped>
.itemMusicTop {
  position: relative;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: pink;

  .itemLeft,
  .itemRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .2rem;
    width: 25%;
    height: 100%;

    span {
      font-size: .4rem;
      color: #fff;
    }

    .icon {
      fill: #fff; //填充颜色
    }
  }

  .bgimg {
    position: fixed;
    width: 100%;
    height: 11rem;
    z-index: -1;
    filter: blur(.5rem);
  }
}

.itemMusicCenter {
  display: inline-block;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  width: 100%;
  // height: 2rem;

  .itemTop {
    width: 100%;
    height: 2rem;

    .cover {
      float: left;
      margin-left: 0.2rem;

      img {
        border-radius: 5%;
        width: 2rem;
        height: 2rem;
      }
    }

    .details {
      float: left;
      margin-left: 0.4rem;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      flex-direction: column;
      width: 4.5rem;
      height: 100%;

      .detailsTop {
        font-size: .24rem;
        color: #fff;
      }

      .detailsCenter {
        margin: .2rem 0;
        display: flex;
        align-items: center;
        color: #ccc;
        font-size: .28rem;
        fill: #ccc;

        img {
          margin-right: 5px;
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
        }

        .icon {
          width: .28rem;
          height: .28rem;
        }
      }

      .detailsBottom {
        display: flex;
        align-items: center;
        color: #ccc;
        font-size: .28rem;
        fill: #ccc;
        font-size: .24rem;

        .icon {
          width: .28rem;
          height: .28rem;
        }
      }
    }
  }
}

.itemMusicBottom {

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      float: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .icon {
        margin-bottom: .1rem;
        width: .45rem;
        height: .45rem;
        fill: #ccc;
      }

      span {
        font-size: 0.24rem;
        color: #ccc;
      }
    }
  }
}
</style>