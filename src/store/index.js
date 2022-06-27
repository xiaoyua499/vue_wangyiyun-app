import { getmusicLyric } from '@/request/api/Item'
import { createStore } from 'vuex'

export default createStore({
  state: {
    //播放列表
    playList: [{
      name: "East of Eden（Male Version）",
      al: {
        id: 145929209,
        name: "East of Eden（Male Version）",
        pic: 109951167504753980,
        picUrl: "https://p1.music.126.net/oiwaT5bRlmzopuwAwJMGWQ==/109951167504753981.jpg",
        pic_str: "109951167504753981",
      },
      id: 1952899523,
    }],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //播放按钮是否显示
    detailShow: false, //歌曲详情页是否显示
    lyricList: {}, //歌词
    currentTime: 0, //当前时间
    duration:0,//歌曲总时长
    isLogin:false,//判断是否登录
    isFooterMusic:true,//是否显示底部组件
    isTopNav:true,//是否显示头部导航栏
  },
  getters: {
  },
  mutations: {
    // 播放按钮是否显示
    updateIsbtnShow(state, value) {
      state.isbtnShow = value
    },
    //是否播放
    updatePlayList(state, value) {
      state.playList = value
    },
    //歌曲下标
    updatePlayListIndex(state, value) {
      state.playListIndex = value
    },
    // 歌曲详情页是否显示
    updateDetailShow(state) {
      state.detailShow = !state.detailShow
    },
    //歌词
    updateLyricList(state, value) {
      state.lyricList = value
    },
    //当前时间
    updateCurrentTime(state, value) {
      state.currentTime = value
      // console.log(state.currentTime);
    },
    //获取歌曲总时长
    updateDuration(state, value){
      state.duration=value
    },
    //搜索列表歌曲播放
    pushPlayList(state, value){
      state.playList.push(value)
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getmusicLyric(value)
      // console.log(res);
      context.commit("updateLyricList", res.data.lrc)
    }
  },
  modules: {
  }
})
