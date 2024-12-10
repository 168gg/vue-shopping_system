import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import { Lazyload } from 'vant'


Vue.config.productionTip = false

// 注册 Vant
Vue.use(Vant)


Vue.use(Lazyload)
// Vue.use(Lazyload, {
//   loading: '加载中图片',
//   error: '错误图片'
// })

// 将 Axios 挂载到 Vue 实例上
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')