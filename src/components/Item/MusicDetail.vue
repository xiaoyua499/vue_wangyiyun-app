<template>
  <!-- 背景 -->
  <img :src="musicList.al.picUrl" alt="" class="bgimg">
  <!-- 顶部 -->
  <div class="detailTop">
    <!-- 退出and歌曲详情 -->
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true" @click="updateDetailShow">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div class="authorDetail">
        <!-- 歌名跑马灯效果 -->
        <Vue3Marquee>
          <p>
            {{ musicList.name }}
          </p>
        </Vue3Marquee>
        <div class="author">
          <span v-for="(author, id) in musicList.ar" :key="id">{{ author.name }}
          </span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
    </div>


    <!-- 分享 -->
    <div class="detailTopRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
  <!-- 中间圆盘与指针部分 -->
  <div class="datailContent" v-show="isLyricShow">
    <img src="@/assets/指针.png" alt="" class="img_needle" :class="{ img_needle_active: !isbtnShow }" />
    <img src="@/assets/圆盘.png" alt="" class="img_cd">
    <img :src="musicList.al.picUrl" alt="" class="img_ar" :class="{img_ar_active:!isbtnShow,img_ar_paused:isbtnShow}" />
  </div>
  <!-- 歌词 -->
  <div class="musicLyric">
    {{lyricList.lyric}}
  </div>
  <!-- 底部 -->
  <div class="dataillFooer">
    <div class="footerTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinlechangpian"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoxi"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao-"></use>
      </svg>
    </div>
    <!-- 进度条 -->
    <div class="pmgressbar"></div>
    <!-- 切换 -->
    <div class="switchButton">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg class="icon play" aria-hidden="true" v-if="isbtnShow" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon play" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations, mapState } from 'vuex';

export default {
  data(){
    return{
      isLyricShow:false
    }
  },
  computed:{
    ...mapState(["lyricList"])
  },  
  mounted() {
    console.log(this.musicList);
  },
  methods: {
    ...mapMutations(['updateDetailShow'])
  },
  props: ['musicList', 'isbtnShow', 'play'],
  components: {
    Vue3Marquee,
  },
}
</script>

<style lang="less" scoped>
// 背景
.bgimg {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  filter: blur(1.6rem);
}

// 顶部
.detailTop {
  margin-top: .2rem;
  padding: 0 .2rem;

  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .detailTopLeft {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      fill: #fff;
    }

    .authorDetail {
      width: 3rem;
      height: 100%;
      margin-left: .3rem;

      p {
        text-align: center;
        color: #fff;
      }

      .author {
        margin-top: .1rem;
        width: 3rem;
        height: .24rem;
        display: flex;
        align-items: center;

        span {
          float: left;
          margin-right: .1rem;
          font-size: .24rem;
          height: .24rem;
          line-height: .24rem;
          color: #555;
        }

        .icon {
          width: .24rem;
          height: .24rem;
          fill: #999;
        }
      }
    }
  }

  .detailTopRight {
    .icon {
      fill: #fff;
    }
  }
}

// 中间圆盘与指针部分
.datailContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 9rem;

  .img_needle {
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-15deg);
    transition: all 2s;
    width: 2rem;
    height: 3rem;
  }

  .img_needle_active {
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
    width: 2rem;
    height: 3rem;
  }

  .img_cd {
    position: absolute;
    bottom: 2.3rem;
    width: 5rem;
    height: 5rem;
    z-index: -1;
  }

  .img_ar {
    position: absolute;
    bottom: 3.14rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    animation: rotate_ar 10s linear infinite;
  }

  //为中间圆盘添加旋转动画
  .img_ar_active {
    animation-play-state: running;
  }

  .img_ar_paused {
    animation-play-state: paused;
  }

  @keyframes rotate_ar {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
  //为中间圆盘添加旋转动画
}

//底部
.dataillFooer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;

  .footerTop {
    display: flex;
    justify-content: space-around;

    .icon {
      width: .4rem;
      height: .4rem;
      fill: #fff;
    }
  }

  .switchButton {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .icon {
      width: .4rem;
      height: .4rem;
      fill: #fff;
    }

    .play {
      width: .65rem;
      height: .65rem;
    }
  }
}
</style>