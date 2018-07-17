import Vue from 'vue'
import Router from 'vue-router'

// 引入page中的页面
const Index = () => import('../page/index.vue')
const Login = () => import('../page/Login/login.vue')
const Register = () => import('../page/Login/register.vue')





Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      // redirect: '/home',
      children: [
        {
          path: 'login',
          component: Login
        }, {
        path: 'register',
          component: Register
        }
      ]
    }


  ]
})
