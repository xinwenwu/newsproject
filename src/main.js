import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig.js'
import axios from 'axios'
import filters from './filters'


//Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

require('./assets/css/base.css'); //引入全局的base文件
require('./assets/css/index.css'); 

const routers=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});
 
Vue.prototype.$http = axios //其他页面在使用axios时，可以直接调用 this.$http

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
