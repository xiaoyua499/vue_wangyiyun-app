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

## 预览

<img src="https://github.com/xiaoyua499/vue_wangyiyun-app/blob/main/public/%E5%9B%BE%E7%89%87/uTools_1659793509625.png" style="zoom: 67%;" />

<img src="https://github.com/xiaoyua499/vue_wangyiyun-app/blob/main/public/%E5%9B%BE%E7%89%87/uTools_1659793525598.png" style="zoom:67%;" />

<img src="https://github.com/xiaoyua499/vue_wangyiyun-app/blob/main/public/%E5%9B%BE%E7%89%87/uTools_1659793541728.png" style="zoom:67%;" />

<img src="https://github.com/xiaoyua499/vue_wangyiyun-app/blob/main/public/%E5%9B%BE%E7%89%87/uTools_1659793555702.png" style="zoom:67%;" />

<img src="https://github.com/xiaoyua499/vue_wangyiyun-app/blob/main/public/%E5%9B%BE%E7%89%87/uTools_1659793608952.png" style="zoom:67%;" />

<img src="https://github.com/xiaoyua499/vue_wangyiyun-app/blob/main/public/%E5%9B%BE%E7%89%87/uTools_1659793625106.png" style="zoom:67%;" />

<img src="https://github.com/xiaoyua499/vue_wangyiyun-app/blob/main/public/%E5%9B%BE%E7%89%87/uTools_1659793643668.png" style="zoom: 67%;" />

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

- [x] 歌词页面
  - [ ] 特殊歌词因时间无法匹配，导致歌词显示错误问题
  - [x] 歌词在上下状态栏露出问题

    解决方法:在整个歌词部分外面套一个盒子,并设置溢出隐藏
- [x] 歌曲进度条

  - [x] 拖拽无效问题：

    - 原因：v-modul不能绑定props传过来的值，导致报只读属性不能更改的错误
    - 解决方法：设置中间值

      ```vue
      <!-- 进度条 -->
      <div class="pmgressbar">
        <van-slider @change="change" min="0" :max="duration" v-model="schedule" :step="0.05" bar-height="2px"
                    inactive-color="#b7b9b9" active-color="#ffffffe4" button-size="5px" />
      </div>
      <script>
      export default {
        data() {
          return {
            schedule: 0
          }
        },
        methods: {
          //拖动进度条事件
          change() {
            this.updataChangeTime(this.schedule)
          },
          ...mapMutations(['updateDetailShow', 'updatePlayListIndex', 'updateCurrentTime', 'updataChangeTime'])
        },
      }
      </script>
      ```

      

  - [x] 解决发现切换歌曲后进度条无法重置

    - 原因：切换歌曲是没有传入歌曲的总时长也就是`van-slider`组件中`:max="duration"`值为NaN

    - 解决方法：判断传入的方法是否为NaN，如果是将它设置为默认值200（取巧方法，不是真正的解决问题，后续会改进）

      ```js
      //获取歌曲总时长
      updateDuration(state, value) {
        if (isNaN(value)) {
          value = 200
        } else {
          state.duration = value
        }
      },
      ```


- [x] 歌单列表页面
  - [x] 解决歌单列表首次加载数据失败问题
  - [ ] 解决歌单别表刷新后数据丢失问题




## 致谢

**非常感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)，接口很稳定，文档很完善**

**非常感谢[写网页的叮叮](https://www.bilibili.com/video/BV1c44y1g7ac?spm_id_from=333.337.search-card.all.click&vd_source=6fb189b64dd440145e5ec8c8624f7ad0),这个项目以这位老师的视频作为主要参考,并在其中学到了很多东西**
