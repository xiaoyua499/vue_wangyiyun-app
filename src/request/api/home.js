import service from "..";

//获取轮播图的数据 
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2",
  })
}

//获取发现好歌单数据
export function getMusicList() {
  return service({
    method: "GET",
    url: "/personalized?limit=10",
  })
}

//搜索
export function getSearchMusic(data) {
  return service({
    method: "GET",
    url: `/cloudsearch?keywords=${data}`,
  })
}