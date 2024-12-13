<template>
    <div class="carousel">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in images" :key="index" v-lazy="item.url">
                <img :src="item.url" :alt="item.title">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: 'CarouselCompon',
    data() {
        return {
            images: [
                { url: require('@/assets/images/t11.jpg'), title: '1' },
                { url: require('@/assets/images/t12.jpg'), title: '2' },   
                { url: require('@/assets/images/t13.jpg'), title: '3' },  
                { url: require('@/assets/images/t14.jpg'), title: '4' } 
            ]
        }
    },
   
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                /*插眼
                这个位置请求后端数据
                数据格式见images
                
                */
                const res = await this.$axios.get('/##') 
                if (res.data && Array.isArray(res.data)) {
                    this.images = res.data
                }
            } catch (error) {
                console.error('获取轮播图数据失败:', error)
                // 保持默认图片
            }
        }
    }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
    height: 260px;
}
.carousel{
    z-index: -1;
}
.my-swipe img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>