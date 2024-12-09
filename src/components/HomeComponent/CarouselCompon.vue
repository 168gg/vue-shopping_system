<template>
    <div class="carousel">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in images" :key="index">
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
                { url: require('@/assets/images/1.jpg'), title: '1' },
                { url: require('@/assets/images/2.jpg'), title: '2' },   
                { url: require('@/assets/images/3.jpg'), title: '3' },   
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

<style>
.my-swipe .van-swipe-item {
    height: 170px;
}

.my-swipe img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>