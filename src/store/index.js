import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productInfo: null , // 初始状态为 null
    shoppingCar: null
  },
  
  mutations: {
    SET_PRODUCT_INFO(state, product) {
      state.productInfo = product
    },
    SET_SHOPPING_CAR(state, product) {
      state.shoppingCar = product
    }

  }
})