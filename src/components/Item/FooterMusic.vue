<template>
  <div class="FootMusic">
    <div class="footLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="">
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footRight">
      <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-weibiaoti--"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['playList', 'playListIndex','isbtnShow'])
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    play() {
      //判断音乐是否正在播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.updateIsbtnShow(false)
      } else {
        this.$refs.audio.pause()
        this.updateIsbtnShow(true)
      }
    },
    ...mapMutations(['updateIsbtnShow'])
  },

  watch:{
    //监听歌曲是否改变 如果改变 自动播放当前歌曲
    playListIndex(){
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.paused) {
        this.updateIsbtnShow(false)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.FootMusic {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 0.2rem;
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  border-top: .02rem solid #999;

  .footLeft {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 100%;

    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }

    span {
      font-size: 0.24rem;
      color: #999;
    }
  }

  .footRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;

    .icon {
      width: .6rem;
      height: .6rem;
    }
  }
}
</style>