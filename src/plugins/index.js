//配置vant自定义插件

import { Swipe, SwipeItem, Button, Popup, Overlay, Switch, Tabbar, TabbarItem, Search,  Slider } from 'vant';

//放入数组中
let plugins = [
  Swipe, SwipeItem, Button, Popup, Overlay, Switch, Tabbar, TabbarItem, Search, Slider
]
export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}