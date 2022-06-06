import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入vant自定义插件
import getVant from '@/plugins/index'

const app = createApp(App)
//getVant(app) 放到最下面报错 Failed to resolve component: van-popupIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. 
//原因未知
getVant(app)
app.use(store)
app.use(router).mount('#app')



