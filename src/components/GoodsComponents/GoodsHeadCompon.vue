<template>
    <div class="goods-head-container">
        <van-image width="100%" height="20%" fit="cover"
            :src="image" />
        <div class="goods-head">
        </div>
    </div>

</template>
<script>
export default {
    name: "GoodsHeadCompon",
    props: {
        image: {
            type: String,
            default: require('@/assets/images/pro4.jpg')
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.goods-head-container{
    width: 100%;
    height: auto;
}
</style>