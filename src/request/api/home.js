import service from "..";

//获取轮播图的数据 
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2",
  })
}

//获取发现好歌单数据