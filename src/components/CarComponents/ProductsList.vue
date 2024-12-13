<template>
    <div class="cart-container">
        <FooterCompon></FooterCompon>
      <h2>购物车</h2>
      <div v-for="item in cartProducts" :key="item.id" class="cart-item">
        <div class="product-box">
          <div class="product-name">{{ item.name }}</div>
          <img :src="item.image" alt="product" class="product-image" />
          <div class="product-price">{{ item.price }}元</div>
        </div>
      </div>
      <div class="cart-summary">
        <p>总商品数量: {{ totalQuantity }}</p>
        <p>总价格: {{ totalPrice }}元</p>
      </div>
      
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
import FooterCompon from '@/components/FooterCompon.vue';
  export default {
    name: 'ProductsList',
    computed: {
      ...mapState({
        cartProducts: (state) => state.shoppingCart,
      }),
      totalQuantity() {
        return this.cartProducts.reduce((sum, item) => sum + item.quantity, 0);
      },
      totalPrice() {
        return this.cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-container {
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .product-box {
    width: 120px;
    height: 180px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    position: relative;
    overflow: hidden;
    padding: 10px;
    text-align: center;
  }
  
  .product-name {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
  
  .product-image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin-top: 30px;
  }
  
  .product-price {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #e80606;
  }
  
  .cart-summary {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  
  .cart-summary p {
    margin: 5px 0;
  }
  </style>
  