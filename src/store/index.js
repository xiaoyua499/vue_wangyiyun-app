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
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow(state, value) {
      state.isbtnShow = value
    },
    updatePlayList(state, value) {
      state.playList = value
    },
    updatePlayListIndex(state, value) {
      state.playListIndex = value
    },
    updateDetailShow(state){
      state.detailShow = !state.detailShow
    }
  },
  actions: {
  },
  modules: {
  }
})
