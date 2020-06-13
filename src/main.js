import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/styles/index.less' // global css


// 应该按需引入，时间原因，先完整引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 应该按需引入，时间原因，先完整引入
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
