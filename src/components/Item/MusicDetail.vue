<template>
  <div class="MusicBody">
    <!-- 背景 -->
    <img :src="musicList.al.picUrl" alt="" class="bgimg">
    <!-- 顶部 -->
    <div class="detailTop">
      <!-- 背景 -->
      <!-- <img :src="musicList.al.picUrl" alt="" class="bgimg"> -->
      <!-- 退出and歌曲详情 -->
      <div class="detailTopLeft">
        <svg class="icon" aria-hidden="true" @click="backHome">
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
    <div class="datailContent" v-show="!isLyricShow" @click="isLyricShow = true">
      <img src="@/assets/指针.png" alt="" class="img_needle" :class="{ img_needle_active: !isbtnShow }" />
      <img src="@/assets/圆盘.png" alt="" class="img_cd">
      <img :src="musicList.al.picUrl" alt="" class="img_ar"
        :class="{ img_ar_active: !isbtnShow, img_ar_paused: isbtnShow }" />
    </div>
    <!-- 歌词 -->
    <div class="musicLyric-box">
      <div class="musicLyric" ref="musicLyric" v-show="isLyricShow" @click="isLyricShow = false">
        <p v-for="item in lyric" :key="item"
          :class="{ active: (currentTime * 1000 >= item.time && currentTime * 1000 < item.pre) }">
          {{ item.lrc }}
        </p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="dataillFooer">
      <!-- 背景 -->
      <!-- <img :src="musicList.al.picUrl" alt="" class="bgimg"> -->
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
      <div class="pmgressbar">
        <input type="range" min="0" :max="duration" v-model="currentTime" step="0.05">
      </div>
      <!-- 切换 -->
      <div class="switchButton">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xunhuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
          <use xlink:href="#icon-shangyishoushangyige"></use>
        </svg>
        <svg class="icon play" aria-hidden="true" v-if="isbtnShow" @click="play">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon play" aria-hidden="true" v-else @click="play">
          <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="goPlay(1)">
          <use xlink:href="#icon-xiayigexiayishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zu"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      isLyricShow: false,
    }
  },
  computed: {
    ...mapState(["lyricList", 'currentTime', 'playList', 'playListIndex', 'duration']),
    //歌词
    lyric() {
      let arr
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          //分别切割出 分、秒、毫秒、歌词
          let min = item.slice(1, 3)
          let sec = item.slice(4, 6)
          let mill = item.slice(7, 10)
          let lrc = item.slice(11, item.length)
          let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9)
            lrc = item.slice(10, item.lemgth)
            time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
          }
          // console.log(min,sec,mill,lrc);
          return { min, sec, mill, lrc, time }
        })
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 100000
          } else {
            item.pre = arr[i + 1].time
          }
        })
      }
      // console.log(arr);
      return arr
    },
  },
  mounted() {
    // console.log(this.musicList);
    this.addDuration()
  },
  methods: {
    //退出主页面
    backHome() {
      this.isLyricShow = false
      this.updateDetailShow()
    },
    //歌曲切换
    goPlay(val) {
      let index = this.playListIndex + val
      if (index < 0) {
        index = this.playList.length - 1
      } else if (index == this.playList.length) {
        index = 0
      }
      this.updatePlayListIndex(index)
      // console.log(index);
    },
    ...mapMutations(['updateDetailShow', 'updatePlayListIndex', 'updateCurrentTime'])
  },
  props: ['musicList', 'isbtnShow', 'play', 'addDuration'],
  components: {
    Vue3Marquee,
  },
  watch: {
    currentTime(newValue) {
      //歌词样式突出显示
      let p = document.querySelector("p.active")
      // console.log([p]);
      if (p === null) {
        return
      } else if (p.offsetTop > 273) {
        var y = p.offsetTop - 180
        document.querySelector('.musicLyric').style = 'transform: translateY(-' + y + 'px)'
      }
      //播放结束自动播放下一首
      if (newValue === this.duration) {
        if (this.playListIndex === this.playList.lemgth - 1) {
          this.updatePlayListIndex(0)
          this.play()
        } else {
          this.updatePlayListIndex(this.playListIndex + 1)
        }
      }
      this.updateCurrentTime(newValue)
      // console.log(newValue,this.duration);
    }
  }
}
</script>

<style lang="less" scoped>
.MusicBody {

  // 背景
  .bgimg {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(1.6rem);
  }

  // 顶部
  .detailTop {
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 .2rem;
    z-index: 99999;
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
          z-index: -1;
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
      top: 20%;
      left: 46%;
      transform-origin: 0 0;
      transform: rotate(-15deg);
      transition: all 2s;
      width: 2rem;
      height: 3rem;
    }

    .img_needle_active {
      position: absolute;
      top: 20%;
      left: 46%;
      transform-origin: 0 0;
      transform: rotate(0deg);
      transition: all 2s;
      width: 2rem;
      height: 3rem;
    }

    .img_cd {
      position: absolute;
      bottom: 17px;
      width: 5rem;
      height: 5rem;
      z-index: -1;
    }

    .img_ar {
      position: absolute;
      bottom: 60px;
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

  //歌词
  .musicLyric-box {
    margin-top: 55px;
    width: 100%;
    height: 9.2rem;
    z-index: -1;
    overflow: scroll;

    .musicLyric {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5rem;
      width: 100%;
      // height: 9rem;

      transition: all .8s linear;
      z-index: -1;

      p {
        padding: .5rem;
        padding-top: 0;
        color: rgb(179, 175, 175);
        transition: all .1s linear;
      }

      .active {
        color: #fff;
        font-size: .32rem;
        // transform: translateY(90px);
        transition: all .1s linear;
      }
    }
  }

  //底部
  .dataillFooer {
    position: fixed;
    left: 0;
    bottom: 0;
    padding: .2rem;
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

    .pmgressbar {
      input {
        margin-top: .6rem;
        margin-bottom: .6rem;
        width: 100%;
        height: .06rem;
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
        width: .8rem;
        height: .8rem;
      }
    }
  }
}
</style>