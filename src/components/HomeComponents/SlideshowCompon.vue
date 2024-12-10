<template>
    <div class="SlideCompon1">
        <!-- 地址图片，调整大小并放在大家都在喝下方 -->
        <span class="font1">{{ message }}</span>
        <div class="address-container">
            <van-image round width="1rem" height="1rem" :src="image" class="address-image" />
            <div class="address">XX店</div>
        </div>
        <div class="product-carousel">
            <div class="product-item" v-for="product in products" :key="product.id">
                <div class="product-box">
                    <van-image :src="product.image" class="product-image" />
                    <div class="product-info">
                        <div class="product-name">{{ product.name }}</div>
                        <div class="product-price">{{ product.price }}元</div>
                    </div>
                    <van-button class="add-button" round >+</van-button>
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
                { id: 6, name: "产品6", price: 19.5, image: require('@/assets/images/pro4.jpg') }
            ]
        }
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
    width: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 10px;
    padding-bottom: 10px;
}

.product-item {
    flex: 0 0 auto;
    text-align: center;
    min-width: 120px;
    /* 设置最小宽度 */
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
    height: 26px;     border: 3px  inherit rgba(207, 178, 178, 0.877);
    background-color: rgba(228, 47, 47, 0.877);
    color: #ffffff;
    font-size: 18px;
    font-weight: bolder;
    border-radius: 50%; 
}

.product-carousel::-webkit-scrollbar {
    display: none;
  
}
</style>