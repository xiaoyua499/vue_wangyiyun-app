#  仿网易云音乐移动端项目

## 技术栈

Vue全家桶+Vant组件库

## 项目运行

### 前端部分

#### 安装依赖

```
npm install
```

#### 运行项目
```
npm run serve
```

### 后端部分

Github地址：https://github.com/Binaryify/NeteaseCloudMusicApi

## 目前已知问题

- [x] 登录账号后数据丢失导致报错问题

  将vuex中的数据直接保存到浏览器缓存中（sessionStorage、localStorage、cookie）

  ```js
  //防止页面刷新数据丢失
  if (!isNaN(this.user)) {
    let user = this.user
    console.log('111', user);
  } else {
    const sessionUser = sessionStorage.getItem('user')
    if (sessionUser && sessionUser !== '[]') {
      let user = JSON.parse(sessionUser)
      console.log('222', user.data.profile.nickname);
      this.users = user
      // console.log(this.users);
    }
  }
  ```

  
- [ ] 歌词页面
  - [ ] 特殊歌词因时间无法匹配，导致歌词显示错误问题
  - [x] 歌词在上下状态栏露出问题

    解决方法:在整个歌词部分外面套一个盒子,并设置溢出隐藏
- [ ] 歌曲进度条拖拽无效问题

## 致谢

**非常感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)，接口很稳定，文档很完善**

**非常感谢[写网页的叮叮](https://www.bilibili.com/video/BV1c44y1g7ac?spm_id_from=333.337.search-card.all.click&vd_source=6fb189b64dd440145e5ec8c8624f7ad0),这个项目以这位老师的视频作为主要参考,并在其中学到了很多东西**
