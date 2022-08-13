<template>
  <div class="top-box">
    <div class="top-title">
      <van-nav-bar title="排行榜" left-arrow fixed @click-left="onClickLeft" />
    </div>
    <div class="top-center">
      <van-tabs v-model:active="active" scrollspy>
        <van-tab class="top-sort" title="官方榜">
          <div class="top-sort-title">
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
            <div class="title-name">官方榜</div>
          </div>
          <div class="top-sort-content" v-for="(item, index) in state.topSort">
            <div class="official"
              v-if="item.id == '19723756' || item.id == '3779629' || item.id == '2884035' || item.id == '3778678'">
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
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
            <div class="title-name">精选榜</div>
          </div>
          <div class="square">
            <div class="top-sort-content" v-for="(item, index) in state.topSort" :key="index">
              <img v-if="index>3&&index<13" :src="item.coverImgUrl" alt="">
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

export default {
  setup() {
    const active = ref(0);
    const onClickLeft = () => history.back();
    const topTitleList = [
      '官方榜',
      '精选榜',
      '曲风榜',
      '全球榜',
      '语种榜',
      'MV榜',
      '特色榜'
    ]
    const state = reactive({
      topSort: [],
    })
    onMounted(
      async () => {
        let { data: res } = await getPlaylistClassify()
        state.topSort = res.list
        for (let i = 0; i < res.list.length; i++) {
          console.log(i, res.list[i].id);
        }
        console.log(state.topSort);
      }
    )
    return { topTitleList, state, onClickLeft, active };
  },
}
</script>

<style lang="less" scoped>
.top-box {
  background-color: #f6f7fb;
  padding: 0 10px;

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

  .top-center::v-deep {
    margin-top: 46px;

    .van-tabs__wrap {
      position: fixed;
      top: 46px;
      left: 0;
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
      margin-top: 80px;
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

        .official {
          margin: 10px 0;
          padding: 10px;
          // height: 100px;
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
              // overflow: hidden;

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

        .square {
          // width: 340px;
          // height: 340px;
          display: flex;
          flex-wrap: wrap;
          align-content: space-around;
          justify-content: space-around;

          img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
}
</style>