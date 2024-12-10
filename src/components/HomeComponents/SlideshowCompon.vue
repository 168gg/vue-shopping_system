<template class="SlideCompon1">
    <div class="SlideCompon1">
      <!-- 地址图片，调整大小并放在大家都在喝下方 -->
      <div class="font1">{{ message }}</div>
      <div class="address-container">
        <van-image round width="1rem" height="1rem" :src="image" class="address-image" />
        <div class="address">XX店</div>
      </div>
    
      <!-- 轮播产品 -->
      <div class="product-carousel">
        <div class="product-item" v-for="product in products" :key="product.id">
          <div class="product-box">
            <van-image :src="product.image" class="product-image" />
            <div class="product-info">
              <div class="product-name">{{ product.name }}</div>
              <div class="product-price">{{ product.price }}元</div>
            </div>
            <button class="add-button" @click="goToDetail(product.id)">+</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SlideshowCompon',
    data() {
      return {
        message: "大家都在喝",
        image: require('@/assets/images/localtionicon.png'), // 地址图片
        products: [
          { id: 1, name: "产品1", price: 12.5, image: require('@/assets/images/pro1.jpg') },
          { id: 2, name: "产品2", price: 20.0, image: require('@/assets/images/pro2.jpg') },
          { id: 3, name: "产品3", price: 15.0, image: require('@/assets/images/pro3.jpg') },
          { id: 4, name: "产品4", price: 18.0, image: require('@/assets/images/pro4.jpg') },
          { id: 5, name: "产品5", price: 22.0, image: require('@/assets/images/pro4.jpg') },
          { id: 6, name: "产品6", price: 19.5, image: require('@/assets/images/pro4.jpg') },
        ],
      };
    },
    methods: {
      goToDetail(productId) {
        // 跳转到商品详情页面
        this.$router.push({ name: 'ProductDetail', params: { id: productId } });
      }
    }
  }
  </script>
  
  <style scoped>
  .SlideCompon1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fddde6; /* 设置整体背景为浅粉色 */
    padding: 20px 0;
    border-radius: 5%
  }
  
  .font1 {
    margin-top: 10px;
    font-size: 18px; /* 调大字体 */
    font-weight: bold; /* 加粗 */
  }
  
  .address-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .address {
    margin-left: 10px;
    font-size: 14px;
    color: #888;
  }
  
  .address-image {
    width: 1.5rem; /* 设置地址图片的宽度 */
    height: 1.5rem; /* 设置地址图片的高度 */
  }
  
  .product-carousel {
    margin-top: 20px;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 10px;
    padding-bottom: 10px;
  }
  
  .product-item {
    flex: 0 0 auto;
    text-align: center;
    min-width: 120px; /* 设置最小宽度 */
  }
  
  .product-box {
    background-color: white; /* 设置产品盒子的背景为白色 */
    border: 1px solid #e0e0e0; /* 轻微灰色边框 */
    border-radius: 8px; /* 圆角边框 */
    padding: 10px;
    width: 100px; /* 限制产品的宽度 */
    position: relative;
    margin-left: 5px;
  }
  
  .product-image {
    width: 100px; /* 设置产品图片宽度 */
    height: 120px; /* 设置产品图片高度 */
    object-fit: cover; /* 保证图片比例不变 */
    margin-bottom: 0px;
    
  }
  
  .product-info {
    margin-top: 5px;
  }
  
  .product-name {
    font-size: 12px; /* 调整产品名称字体大小 */
    margin: 5px 0;
    text-align: left;
  }
  
  .product-price {
    font-weight: bold;
    font-size: 10px; /* 调整价格字体大小 */
    color: #333;
    text-align: left;
    margin-bottom: 10px;
  }
  
  .add-button {
  position: absolute;
  bottom: 3px;
  right: 0px;
  width: 20px; /* 缩小宽度 */
  height: 20px; /* 缩小高度 */
  border-radius: 50%; /* 圆形按钮 */
  border: 1px solid #1e90ff;
  background-color: white;
  color: #1e90ff;
  font-size: 14px; /* 缩小字体大小 */
  display: flex; /* 使用 Flexbox 居中对齐 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

  
  .product-carousel::-webkit-scrollbar {
    display: none; /* 隐藏滑动时底部出现的灰色条 */
  }
  </style>
  