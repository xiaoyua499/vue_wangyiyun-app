<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="MusicContent">
      <van-swipe :loop="false" :width="125" :show-indicators="false" class="my-swpie">
        <van-swipe-item v-for="(item, id) in state.MusicList" :key="id" class="item">
          <router-link :to="{ path: '/ItemMusic' }" @click="getRecommended(item.id)">
            <img :src="item.picUrl" alt="">
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <div class="name">
              <span>{{ item.name }}</span>
            </div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from '@/request/api/home'
import { getMusicItemList, getItemList } from '@/request/api/Item'
import { reactive, onMounted } from 'vue'
import { mapMutations } from 'vuex'
export default {
  setup() {
    const state = reactive({
      MusicList: [],
    })

    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
    }

    onMounted(async () => {
      let res = await getMusicList()
      state.MusicList = res.data.result
      // console.log(state.MusicList);
    })

    return { state, changeCount }
  },
  methods: {
    ...mapMutations(['updataPlaylistDetails', 'updataSongsDetails']),
    //获取推荐歌曲列表
    async getRecommended(id) {
      //获取歌单详情
      let res = await getMusicItemList(id)
      this.updataPlaylistDetails(res.data.playlist)
      //获取歌曲详情
      let result = await getItemList(id)
      this.updataSongsDetails(result.data.songs)
      // console.log(result.data.song);
    }
  },
}
</script>

<style lang="less" scoped>
.musicList {
  padding: .2rem;
  width: 100%;
  height: 5rem;

  .musicTop {
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
    width: 100%;
    height: .5rem;

    .title {
      font-size: .35rem;
      font-weight: 900;
      line-height: .6rem;
    }

    .more {
      padding: 0 .2rem;
      border: 1px solid #ccc;
      text-align: center;
      line-height: .5rem;
      border-radius: .4rem;
      font-size: .28rem;
    }
  }

  .MusicContent {
    width: 100%;
    height: 4rem;

    .my-swpie {
      position: relative;
      height: 100%;

      img {
        border-radius: 5%;
        // margin: 5px;
        width: 2.3rem;
        height: 2.3rem;
      }

      .playCount {
        position: absolute;
        top: 0.1rem;
        left: 1.2rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .28px;

        .icon {
          width: .28rem;
          height: .28rem;
        }
      }

      .name {
        text-align: center;
        font-size: .24rem;
      }

      .item {
        // margin: 5px;
        text-align: center;
      }
    }
  }
}
</style>