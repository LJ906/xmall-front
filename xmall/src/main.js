// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 引入图标字体
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
// import { Button, Pagination, Checkbox, Icon, Autocomplete, Loading, Message, Notification, Steps, Step, Table, TableColumn, Input, Dialog, Select, Option } from 'element-ui'
// 引入本地存储
import {getLocalStorage} from "./util/localstorage"

// 按需引入element-ui组件
Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Pagination)
// Vue.use(Checkbox)
// Vue.use(Icon)
// Vue.use(Autocomplete)
// Vue.use(Steps)
// Vue.use(Step)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Input)
// Vue.use(Dialog)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Loading.directive)
// Vue.prototype.$loading = Loading.service
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message            // 配置message 到vue全局
Vue.use(infiniteScroll)
Vue.use(VueCookie)
// 配置图片懒加载
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/load.gif'
  // attempt: 1
})

Vue.config.productionTip = false

// 定义白名单无需登陆也能访问
const whiteList = ['/home', '/goods', '/login', '/register', '/goodsDetails', '/thanks', '/search', '/refreshsearch', '/refreshgoods'] // 不需要登陆的页面

// 路由守卫
router.beforeEach((to, from , next) => {
  next()

  // let params = {
  //   params: {
  //     params: getLocalStorage('token') // 获取token
  //   }
  // }

// 判断用户有没有登陆，如果未登录则判断要访问的路径是否未登陆页面 是放行， 否跳转到登陆页



})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
