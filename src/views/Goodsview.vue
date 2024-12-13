<template>
    <div class="container"">
        <GoodsHeadCompon :image="goods.image"></GoodsHeadCompon>
        <GoodsMiddleCompon :goods="goods"></GoodsMiddleCompon>
<FooterCompon></FooterCompon>
    </div>
</template>
<script>
import FooterCompon from '@/components/FooterCompon.vue';
import GoodsHeadCompon from '@/components/GoodsComponents/GoodsHeadCompon.vue'
import GoodsMiddleCompon from '@/components/GoodsComponents/GoodsMiddleCompon.vue';
export default {
    name: 'Goodsview',
    components: {
        GoodsHeadCompon: GoodsHeadCompon,
        GoodsMiddleCompon: GoodsMiddleCompon
    },

    data() {
        return {
            goods: {title:"ha",
          price: 10,
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          desc: "这是一段商品描述"}
        }
    },
    methods :{
    getGoods() {
        this.$store.commit('SET_PRODUCT_INFO',this.$route.query)
    }
}

}
</script>
<style scoped>
.container{
  margin-bottom: 20px;
}


</style> 