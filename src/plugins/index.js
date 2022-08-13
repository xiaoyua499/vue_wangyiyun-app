//配置vant自定义插件

import { Swipe, SwipeItem, Button, Popup, Overlay, Switch, Tabbar, TabbarItem, Search, Slider, Tab, Tabs, NavBar } from 'vant';

//放入数组中
let plugins = [
  Swipe, SwipeItem, Button, Popup, Overlay, Switch, Tabbar, TabbarItem, Search, Slider, Tab, Tabs, NavBar
]
export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}