// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: [],  // 存储购物车中的商品
    productInfo: null, // 存储单个商品的详细信息
  },
  mutations: {
    SET_SHOPPING_CAR(state, product) {
      // 如果购物车中已有该商品，则增加数量
      const existingProduct = state.shoppingCart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        // 如果购物车中没有该商品，则添加新商品
        state.shoppingCart.push({ ...product, quantity: 1 });
      }
    },
    SET_PRODUCT_INFO(state, product) {
      state.productInfo = product;
    },
  },
  actions: {},
});
