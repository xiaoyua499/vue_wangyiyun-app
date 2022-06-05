import service from "..";

//获取歌单详情页的数据 
export function getMusicItemList(id) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${id}`,
  })
}

//获取歌单所有歌曲的数据 
export function getItemList(data) {
  return service({
    method: "GET",
    url: `/playlist/track/all?id=${data}&limit=20&offset=0`,
  })
}
