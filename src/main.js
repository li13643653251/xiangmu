import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'; //请求数据
import ElementUI from 'element-ui';
import PubSub from 'pubsub-js'
import 'element-ui/lib/theme-chalk/index.css';

// 配置请求的跟路径
// axios.defaults.baseURL = 'http://e7136ce828e2.ngrok.io/api'
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  // console.log(config)
  // NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$axios = axios;
Vue.prototype.PubSub = PubSub   //组件发布订阅消息
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
