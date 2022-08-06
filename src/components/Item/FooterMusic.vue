<template>
  <div class="FootMusic">
    <div class="FootMusic-top">
      <div class="footLeft" @click="updateDetailShow">
        <img :src="playList[playListIndex].al.picUrl" alt="">
        <div>
          <p>{{ playList[playListIndex].name }}</p>
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
    </div>
    <div class="FootMusic-bottom" v-if="tapbar">
      <van-tabbar active-color="#ee0a24" inactive-color="#000" v-model="active" :fixed="false">
        <van-tabbar-item icon="search" @click="$router.push('/')">发现</van-tabbar-item>
        <van-tabbar-item icon="music-o" @click="$router.push('/infoUser')">我的</van-tabbar-item>
        <van-tabbar-item icon="friends-o">关注</van-tabbar-item>
      </van-tabbar>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
    <van-popup :show="detailShow" position="bottom" :style="{ height: '100%', width: '100%' }">
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow" :addDuration="addDuration"
        :updateTime="updateTime" :interVal="interVal" />
    </van-popup>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MusicDetail from './MusicDetail.vue';
export default {
  data() {
    return {
      interVal: 0,
      active: 0,
    }
  },
  computed: {
    ...mapState(['playList', 'playListIndex', 'isbtnShow', 'detailShow', 'currentTime', 'tapbar', 'changeTime'])
  },
  mounted() {
    clearInterval(this.interVal)
    this.updateTime() // 调用定时器
  },
  updated() {
    this.$store.dispatch('getLyric', this.playList[this.playListIndex].id)
    this.addDuration()
  },
  methods: {
    play() {
      //判断音乐是否正在播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.updateIsbtnShow(false)
        clearInterval(this.interVal)
        this.updateTime() // 调用定时器
      } else {
        this.$refs.audio.pause()
        this.updateIsbtnShow(true)
        clearInterval(this.interVal) //清除定时器
      }
    },
    //传入总时间
    addDuration() {
      this.updateDuration(this.$refs.audio.duration)
    },
    //传入当前时间
    updateTime() {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime)
      }, 1000)
    },
    ...mapMutations(['updateIsbtnShow', 'updateDetailShow', 'updateCurrentTime', 'updateDuration', 'updataChangeTime'])
  },

  watch: {
    //监听歌曲是否改变 如果改变 自动播放当前歌曲
    playListIndex() {
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.paused) {
        this.updateIsbtnShow(false)
      }
    },

    playList() {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true
        this.updateIsbtnShow(false)
      }
    },
    //监测进度条是否拖动
    changeTime(newValue) {
      this.$refs.audio.currentTime = newValue
    }
  },

  components: {
    MusicDetail
  }
}
</script>

<style lang="less" scoped>
.FootMusic {
  position: fixed;
  bottom: 0;
  width: 100%;

  .FootMusic-top {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    width: 100%;
    height: 0.8rem;
    background-color: #fff;
    border-top: .02rem solid #999;

    .footLeft {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      width: 75%;
      height: 100%;

      img {
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
    }

    .footRight {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 20%;
      height: 100%;

      .icon {
        width: .4rem;
        height: .4rem;
      }
    }
  }

}
</style>