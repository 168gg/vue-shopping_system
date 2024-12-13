<template>
  <div class="goods-container">
    <!-- 商品标题 -->
    <div class="goods-title">
      <span>{{ goods.title }}</span>
      <van-icon name="star-o" class="favorite-icon" />
    </div>

    <!-- 商品选项 -->
    <div class="goods-options">
      <div class="option-group">
        <div class="option-title">温度</div>
        <div class="option-buttons">
          <van-button type="primary" size="small" plain>热</van-button>
          <van-button type="default" size="small" plain>少冰</van-button>
          <van-button type="default" size="small" plain>正常冰</van-button>
        </div>
      </div>

      <div class="option-group">
        <div class="option-title">甜度</div>
        <div class="option-buttons">
          <van-button type="primary" size="small" plain>正常糖</van-button>
          <van-button type="default" size="small" plain>七分糖</van-button>
          <van-button type="default" size="small" plain>五分糖</van-button>
          <van-button type="default" size="small" plain>三分糖</van-button>
          <van-button type="default" size="small" plain>不额外加糖</van-button>
        </div>
      </div>

      <div class="option-group">
        <div class="option-title">加料</div>
        <div class="option-buttons">
          <van-button type="default" size="small" plain>脆啵啵 ¥1</van-button>
          <van-button type="default" size="small" plain>椰果 ¥1</van-button>
          <van-button type="default" size="small" plain>芋圆 ¥2</van-button>
        </div>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="goods-details">
      <div class="details-title">商品详情</div>
      <div class="details-content">
        {{ goods.description }}
      </div>
    </div>

    <!-- 底部操作栏 -->
    <van-submit-bar
      :price="prixe"
      button-text="加入购物车"
      @submit="onSubmit"  class="submit-bar"
    >
      <template #button >
        <van-button type="danger"  size="normal" @click="onSubmit" class="custom-button">加入购物车</van-button>
        <van-button type="danger" size="normal" @click="onBuyNow"class="custom-button">购买</van-button>
      </template>
      <template #tip>
        <div class="quantity-control">
          <van-stepper v-model="num" />
        </div>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "GoodsMiddleCompon",
  props: {
    goods: {
      type: Object,
      default: () => [
        { title:"ha",
          price: 10,
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          desc: "这是一段商品描述"
        }

       
      ]
    },
  },
  data() {
    return {
      num: 1, // 商品数量
      prixe: null,
    };
  },
  methods: {
    addPrice() {
      // 计算商品总价
      this.prixe = this.goods.price * this.num;
    },
    onSubmit() {
      // 加入购物车逻辑
      console.log("加入购物车", this.goods.title, this.num);
    },
    onBuyNow() {
      // 立即购买逻辑
      console.log("立即购买", this.goods, this.num);
    },
  },
  mounted() {
  // 在组件挂载时计算总价
  this.addPrice();
},
watch: {
  // 监听 num 或 goods.price 的变化，重新计算总价
  num() {
    this.addPrice();
  },
  'goods.price': {
    handler() {
      this.addPrice();
    },
    deep: true,
  },
},
};
</script>

<style scoped>
.custom-button{
    margin-left: 10px;
    width: 100px;
    border-radius: 30px;
    font-size: 16px;
    padding: 0;
}
.goods-container {
  padding: 16px;
  background-color: #fff;
}

.goods-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.favorite-icon {
  font-size: 20px;
  color: #f56c6c;
}

.goods-options {
  margin-bottom: 16px;
}

.option-group {
  margin-bottom: 12px;
}

.option-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.option-buttons {
  display: flex;
  gap: 8px;
}

.goods-details {
  position: relative;
  height: 100px;
}

.details-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.details-content {
  font-size: 12px;
  color: #666;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.submit-bar{
    position: relative;
    bottom: 10px
}
</style>