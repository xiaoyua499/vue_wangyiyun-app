<template>
  <!-- 搜索框 -->
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" :placeholder="placeholder" v-model="searchKey" @keydown.enter="enterKey">
    <span @click="enterKey">搜索</span>
  </div>
  <!-- 搜索历史 -->
  <div class="searchHistory">
    <span class="history">历史</span>
    <span v-for="item in keyWorldList" :key="item" class="spanKey" @click="searchHistory(item)">
      {{ item }}
    </span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
  <!-- 歌曲列表 -->
  <div class="listBottom">
    <ul>
      <li v-for="(item, index, id) in searchList" :key="id">
        <span class="index">{{ index + 1 }}</span>
        <div class="song" @click="updateIndex(item,index)">
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
</template>

<script>
import { getSearchMusic } from '@/request/api/home'

export default {
  data() {
    return {
      keyWorldList: [], //历史记录
      searchKey: "", //搜索内容
      placeholder: "曾经我也想过一了百了", //默认显示
      searchList: [],
    }
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem('keyWorldList')) || []
  },
  methods: {
    //回车搜索
    enterKey: async function () {
      //input框不能为空
      if (this.searchKey.trim() != "") {
        this.keyWorldList.unshift(this.searchKey.trim())
        // console.log(this.searchKey.trim());
        //数组去重
        this.keyWorldList = [...new Set(this.keyWorldList)]
        //固定搜索记录的个数
        if (this.keyWorldList.length > 5) {
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1)
        }
        localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList) || [])
        let res = await getSearchMusic(this.searchKey)
        this.searchList = res.data.result.songs
        console.log(this.searchList);
        this.searchKey = ""
      }
    },
    // 清空历史记录
    delHistory() {
      localStorage.removeItem("keyWorldList")
      this.keyWorldList = []
    },
    //点击搜索历史 搜索歌曲
    searchHistory: async function (item) {
      let res = await getSearchMusic(item)
      this.searchList = res.data.result.songs
      console.log(this.searchList);
    },
    //歌曲播放
    updateIndex(item){
      // item.al=item.album
      // item.al.picUrl=item.album.artist.img1v1Url
      this.$store.commit("pushPlayList",item)
      this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
    },
  },
}
</script>

<style lang="less" scoped>
.searchTop {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;

  input {
    margin-left: 20px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #999;
    width: 75%;
  }

  span{
    margin-left:10px ;
    font-size: 16px;
  }
}

.searchHistory {
  position: relative;
  width: 100%;
  padding: 10px;

  .history {
    display: block;
    font-size: 16px;
    font-weight: 700;
  }

  .spanKey {
    display: inline-block;
    margin: 5px 10px;
    padding: 5px 10px;
    background-color: rgb(172, 172, 172);
    border-radius: 25px;
    color: #fff;
  }

  .icon {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 15px;
    height: 15px;
  }
}

//歌曲列表
.listBottom {
  width: 100%;
  padding: 10px;

  ul {

    li {
      margin: 5px 0;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #e9e9ea;

      .index {
        width: 16px;
        float: left;
        line-height: 50px;
      }

      .song {
        float: left;
        margin-left: 8px;
        padding-top: 12px;
        width: 70%;
        height: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        .songName {
          display: block;
          line-height: 10px;
          font-size: 14px;
        }

        .songAuthor {
          margin-right: 10px;
          font-size: 12px;
          color: #999;
        }
      }

      .listBottom-right {
        display: flex;
        align-items: center;
        float: right;
        height: 100%;
        line-height: 50px;
        fill: #999;

        .list {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>