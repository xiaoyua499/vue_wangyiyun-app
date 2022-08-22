<template>
  <div class="top-box">
    <!-- 导航栏 -->
    <div class="top-title">
      <van-nav-bar title="排行榜" left-arrow fixed @click-left="onClickLeft" />
    </div>
    <!-- 标签页 -->
    <div class="top-center">
      <van-tabs v-model:active="active" scrollspy sticky offset-top="46">
        <van-tab class="top-sort" title="官方榜">
          <div class="top-sort-title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
            <div class="title-name">官方榜</div>
          </div>
          <div class="top-sort-content" v-for="(item, index) in state.topSort" @click="goItemMusic(item.id)">
            <div class="official">
              <div class="official-top">
                <div class="official-title">{{ item.name }}</div>
                <div class="updateFrequency">{{ item.updateFrequency }}</div>
              </div>
              <div class="official-content">
                <img :src="item.coverImgUrl" alt="">
                <div class="topThree">
                  <ul>
                    <li v-for=" (item1, index) in item.tracks">
                      <span class="index">{{ index + 1 }}</span>
                      <div class="song">
                        {{ item1.first }}<i>-</i><span class="author">{{ item1.second }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab class="top-sort" title="精选榜">
          <div class="top-sort-title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
            <div class="title-name">精选榜</div>
          </div>
          <div class="square">
            <div class="top-sort-content" v-for="(item, index) in state.squareL" :key="index"
              @click="goItemMusic(item.id)">
              <img :src="item.coverImgUrl" alt="">
            </div>
          </div>
        </van-tab>
        <van-tab class="top-sort" title="曲风榜">
          <div class="top-sort-title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
            <div class="title-name">曲风榜</div>
          </div>
          <div class="square ">
            <div class="top-sort-content" v-for="(item, index) in state.style" :key="index"
              @click="goItemMusic(item.id)">
              <img :src="item.coverImgUrl" alt="">
            </div>
          </div>
        </van-tab>
        <van-tab class="top-sort" title="全球榜">
          <div class="top-sort-title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
            <div class="title-name">全球榜</div>
          </div>
          <div class="square">
            <div class="top-sort-content" v-for="(item, index) in state.global" :key="index"
              @click="goItemMusic(item.id)">
              <img :src="item.coverImgUrl" alt="">
            </div>
          </div>
        </van-tab>
        <van-tab class="top-sort" title="语种榜">
          <div class="top-sort-title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
            <div class="title-name">语种榜</div>
          </div>
          <div class="square">
            <div class="top-sort-content" v-for="(item, index) in state.language" :key="index"
              @click="goItemMusic(item.id)">
              <img :src="item.coverImgUrl" alt="">
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getPlaylistClassify } from '@/request/api/Item'
import { getMusicList } from '@/request/api/home'
import { onMounted, reactive } from '@vue/runtime-core'
import { useStore } from 'vuex';
import router from '@/router';

export default {
  setup() {
    const store = useStore()
    const active = ref(0);
    const onClickLeft = () => history.back();
    const goItemMusic = (id) => {
      store.dispatch('getItemMusicPlaylist', id)
      store.dispatch('getItemMusicItemList', id)
      router.push('/itemMusic')
    }
    const state = reactive({
      topSort: [],//官方榜
      squareL: [],//精选榜
      style: [], //曲风榜
      global: [],//全球榜
      language: [],//语种榜
    })
    onMounted(
      async () => {
        let { data: res } = await getPlaylistClassify()
        state.topSort = res.list.filter(item => {
          return item.id == '19723756' || item.id == '3779629' || item.id == '2884035' || item.id == '3778678'
        })
        state.squareL = res.list.filter(item => {
          return item.id == '5453912201' || item.id == '991319590' || item.id == '1978921795' || item.id == '21845217' || item.id == '3112516681' || item.id == '5338990334' || item.id == '6688069460 ' || item.id == '6723173524 ' || item.id == '6886768100'
        })
        state.style = res.list.filter(item => {
          return item.id == '71384707' || item.id == '71385702' || item.id == '3812895' || item.id == '5059661515' || item.id == '10520166' || item.id == '5059633707' || item.id == '5059642708 '
        })
        state.global = res.list.filter(item => {
          return item.id == '180106' || item.id == '60198' || item.id == '3812895' || item.id == '27135204' || item.id == '6939992364' || item.id == '60131'
        })
        state.language = res.list.filter(item => {
          return item.id == '745956260' || item.id == '5059644681' || item.id == '6732051320' || item.id == '6732014811' || item.id == '7095271308'
        })
        // for (let i = 0; i < res.list.length; i++) {
        //   console.log(i, res.list[i].id, res.list[i].name);
        // }
        // console.log(res.list);
      }
    )
    return { state, onClickLeft, active, goItemMusic };
  },
}
</script>

<style lang="less" scoped>
.top-box {
  background-color: #f6f7fb;
  padding: 0 10px;

  // 导航栏
  .top-title::v-deep {
    .van-nav-bar {
      background-color: #f6f7fb;
      font-size: 16px;

      .van-nav-bar__left {
        padding: 0;
        padding-left: 10px;



        .van-icon {
          color: #000;
        }
      }

      .van-nav-bar__title {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  // 标签页
  .top-center::v-deep {

    .van-tabs__wrap {
      width: 100%;

      .van-tabs__nav {
        height: 20px;
        background-color: #f6f7fb;

        .van-tab {
          font-size: 14px;
          color: #8e929d;
        }

        .van-tab--active {
          color: #000;
        }
      }
    }

    .van-tabs__content {
      margin-top: 40px;
      margin-bottom: 90px;
      padding-bottom: 20px;

      .top-sort {
        margin-bottom: 25px;

        .top-sort-title {
          display: flex;
          align-items: center;

          .title-name {
            margin-left: 8px;
          }
        }

        //官方榜
        .official {
          margin: 10px 0;
          padding: 10px;
          background-color: #fff;
          border-radius: 15px;

          .official-top {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .official-title {
              font-size: 18px;
              font-weight: 600;
            }

            .updateFrequency {
              font-size: 12px;
              color: #999;
            }
          }

          .official-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 70px;

            img {
              width: 50px;
              height: 50px;
              border-radius: 5px;
            }

            .topThree {
              width: 260px;
              font-size: 12px;

              li {
                display: flex;
                align-items: center;

                .index {
                  padding-right: 5px;
                  font-weight: 600;
                }

                .song {
                  width: 200px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;

                  i {
                    margin: 0 5px;
                    color: #999;
                  }

                  .author {
                    color: #999;
                  }
                }
              }
            }
          }
        }

        //方形样式
        .square {
          display: flex;
          flex-wrap: wrap;
          align-content: space-around;
          justify-content: space-around;


          .top-sort-content {
            margin-bottom: 20px;
            height: 100px;

            &:nth-child(7) {
              margin-bottom: 0;
            }

            &:nth-child(8) {
              margin-bottom: 0;
            }

            &:nth-child(9) {
              margin-bottom: 0;
            }

            img {
              border-radius: 10px;
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
  }
}
</style>