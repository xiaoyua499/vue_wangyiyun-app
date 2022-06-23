<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicItemList, getItemList } from '@/request/api/Item'
import ItemMusicTop from '@/components/Item/ItemMusicTop.vue'
import ItemMusicList from '@/components/Item/ItemMusicList.vue'
export default {
  setup() {
    const state = reactive({
      playlist: {}, //歌单详情
      itemList:{}, // 歌曲详情
    })

    onMounted(async () => {
      let id = useRoute().query.id
      //获取歌单详情
      let res = await getMusicItemList(id)
      state.playlist = res.data.playlist
      // console.log(res);
      
      //获取歌单歌曲
      let result = await getItemList(id)
      state.itemList = result.data.songs
      // console.log(result.data.songs);
      //防止页面刷新,数据丢失
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    })

    return { state }
  },

  components: {
    ItemMusicTop,
    ItemMusicList
  }
}
</script>

<style>
</style>