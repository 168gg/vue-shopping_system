<template>
  <div class="product-grid">
    <div class="product-card" v-for="product in products" :key="product.id">
      <div class="image-container">
        <img :src="require(`@/assets/images/${product.image}`)" alt="商品图片" class="product-image" />
        <div class="sold-out" v-if="product.isSoldOut">已售罄</div>
      </div>
      <div class="product-details">
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-desc">{{ product.desc }}</p>
        <div class="product-footer">
          <span class="product-price">￥{{ product.price }} 起</span>
          <van-button
            size="small"
            type="primary"
            icon="plus"
            @click="addToCart(product)"
          ></van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";

export default {
  name: "shuangbei",


  components: {
    "van-button": Button,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: '1.jpg',
          title: "热销饮品(任选2杯)",
          desc: "指定热销饮品任意选2杯",
          price: 10,
          isSoldOut: false,
        },
        {
          id: 2,
          image: '1.jpg',
          title: "双杯经典",
          desc: "1杯冰鲜柠檬水+1杯蜜桃四季春",
          price: 11,
          isSoldOut: false,
        },
        {
          id: 3,
          image: '1.jpg',
          title: "双杯经典",
          desc: "1杯冰鲜柠檬水+1杯蜜桃四季春",
          price: 11,
          isSoldOut: false,
        },
        {
          id: 4,
          image: '1.jpg',
          title: "双杯经典",
          desc: "1杯冰鲜柠檬水+1杯蜜桃四季春",
          price: 11,
          isSoldOut: false,
        },
        {
          id: 5,
          image: '1.jpg',
          title: "双杯经典",
          desc: "1杯冰鲜柠檬水+1杯蜜桃四季春",
          price: 11,
          isSoldOut: false,
        },
        {
          id: 6,
          image: '1.jpg',
          title: "双杯经典",
          desc: "1杯冰鲜柠檬水+1杯蜜桃四季春",
          price: 11,
          isSoldOut: false,
        },
      ],
    };
  },
  
};
</script>




<style scoped>
.product-grid {
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  background-color: #f8f8f8;
}

.product-card {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
}

.product-image {
  width: 100%;
  height: auto;
}

.sold-out {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-details {
  padding: 12px;
}

.product-title {
  font-size: 16px;
  margin: 0;
  font-weight: bold;
}

.product-desc {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.product-price {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}
</style>