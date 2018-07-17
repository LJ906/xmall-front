import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  login: false,           // 是否登录
  userInfo: null,         // 用户信息
  cartList: [],           // 购物车信息
  receiveInCart: false,   // 是否进入购物车
  showCart: false,        // 是否显示购物车

  showMoveImg: false,     // 显示飞入图片
  elLeft: 0,
  elTop: 0,
  moveImgUrl: null,
  cartPositionT: 0,         // 购物车位置
  cartPositionL: 0,
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
