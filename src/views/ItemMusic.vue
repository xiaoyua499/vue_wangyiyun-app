<template>
  <ItemMusicTop :playlist="state.playlist" />
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicItemList } from '@/request/api/Item'
import ItemMusicTop from '@/components/Item/ItemMusicTop.vue'
export default {
  setup() {
    const state = reactive({
      playlist: {}
    })

    onMounted(async () => {
      let id = useRoute().query.id
      let res = await getMusicItemList(id)
      state.playlist = res.data.playlist
      // console.log(res);

      //防止页面刷新,数据丢失
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    })

    return { state }
  },

  components: {
    ItemMusicTop
  }
}
</script>

<style>
</style>