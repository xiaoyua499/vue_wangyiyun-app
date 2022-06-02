import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入vant自定义插件
import getVant from '../public/js/index'

const app = createApp(App)
app.use(store)
app.use(router).mount('#app')
getVant(app)
