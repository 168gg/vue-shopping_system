import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'
import axios from 'axios'
import { Lazyload } from 'vant'
import FooterCompon from './components/FooterCompon.vue'

Vue.config.productionTip = false

// 注册 Vant
Vue.use(Vant)
Vue.component('FooterCompon', FooterCompon)


Vue.use(Lazyload)
// Vue.use(Lazyload, {
//   loading: '加载中图片',
//   error: '错误图片'
// })

// 将 Axios 挂载到 Vue 实例上
Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')