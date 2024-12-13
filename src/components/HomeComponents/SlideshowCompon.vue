<template>
    <div class="SlideCompon1">
      <span class="font1">{{ message }}</span>
      <div class="address-container">
        <van-image round width="1rem" height="1rem" :src="image" class="address-image" />
        <div class="address">XX店</div>
      </div>
      <div class="product-carousel">
        <div class="product-item" v-for="product in products" :key="product.id">
          <div class="product-box">
            <van-image :src="product.image" class="product-image" @click="goToDetail(product)" />
            <div class="product-info">
              <div class="product-name">{{ product.name }}</div>
              <div class="product-price">{{ product.price }}元</div>
            </div>
            <van-button class="add-button" round size="mini" @click="addShoping(product)">+</van-button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SlideshowCompon',
    props: {
      goodsDtat: {
        type: Object,
        required: false
      }
    }, 
    data() {
      return {
        message: "大家都在喝",  // 显示的文本消息
        image: require('@/assets/images/localtionicon.png'),  // 地址图标图片
        products: [  // 商品数据
          { id: 1, name: "产品1", price: 12.5, image: require('@/assets/images/pro1.jpg') },
          { id: 2, name: "产品2", price: 20.0, image: require('@/assets/images/pro1.jpg') },
          { id: 3, name: "产品3", price: 15.0, image: require('@/assets/images/pro3.jpg') },
          { id: 4, name: "产品4", price: 18.0, image: require('@/assets/images/pro4.jpg') },
          { id: 5, name: "产品5", price: 22.0, image: require('@/assets/images/pro4.jpg') },
          { id: 6, name: "产品6", price: 19.5, image: require('@/assets/images/pro4.jpg') }
        ]
      };
    },
    methods: {
      goToDetail(product) {
        // 跳转到商品详情页面
        console.log(product);  // 打印商品信息
        this.$store.commit('SET_PRODUCT_INFO', product);  // 将商品信息保存到Vuex状态管理
        this.$router.push({ name: 'more' });  // 跳转到商品详情页面
      },
      addShoping(product) {
        // 将商品添加到购物车
        this.$store.commit('SET_SHOPPING_CAR', product);  // 将商品添加到Vuex购物车状态
        this.$router.push({ name: 'ProductsList' });  // 跳转到购物车页面
      },
    }
  };
  </script>
  

<style scoped>
.SlideCompon1 {
    flex-direction: column;
    align-items: center;
    background-color: #fddde6;
    padding: 4px 0;


}

.font1 {
    font-size: 18px;
    font-weight: bold;
}

.address-container {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.address {
    margin-left: 10px;
    font-size: 14px;
    color: #888;
}

.address-image {
    width: 1.5rem;
    height: 1.5rem;
}

.product-carousel {
    margin-top: 20px;
    width: 100%;  /* 宽度设置为100% */
    display: flex;  /* 使用Flexbox布局，使商品项能够排列在一行 */
    overflow-x: scroll;  /* 启用横向滚动 */
    gap: 10px;  /* 商品之间的间隔 */
    padding-bottom: 10px;  /* 底部内边距，防止内容贴边 */
}


.product-item {
    flex: 0 0 auto;  /* 保证每个商品项的宽度不随着容器变化而变化 */
    text-align: center;  /* 将内容居中 */
    min-width: 120px;  /* 设置每个商品项的最小宽度 */
}


.product-box {
    background-color: white;
    /* 设置产品盒子的背景为白色 */
    border: 1px solid #e0e0e0;
    /* 轻微灰色边框 */
    border-radius: 8px;
    /* 圆角边框 */
    padding: 10px;
    width: 100px;
    /* 限制产品的宽度 */
    position: relative;
    margin-left: 5px;
}

.product-image {
    width: 100px;

    height: 120px;

    object-fit: cover;



}

.product-info {
    margin-top: 5px;
}

.product-name {
    font-size: 12px;

    margin: 5px 0;
    text-align: left;
}

.product-price {
    font-weight: bold;
    font-size: 13px;
    /* 调整价格字体大小 */
    color: #e80606;
    text-align: left;

    margin: 5px auto 10px 2px;
}

.add-button {
    position: absolute;
    bottom: 6px;
    right: 9px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 18px;
}

.product-carousel::-webkit-scrollbar {
     display: none;  /*隐藏滚动条 */
}

</style>