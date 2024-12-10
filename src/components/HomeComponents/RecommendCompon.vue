<template>
    <div class="recommend-component">
        <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="(item, index) in recommendList" :key="index">
                <van-image :src="item.url" lazy-load  />
                <div class="title">{{ item.title }}</div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
export default {
    name: 'RecommendComponent',
    data() {
        return {
            recommendList: [
                { url: require('@/assets/images/1.jpg'), title: '1', link: "https://www.bilibili.com/" },
                { url: require('@/assets/images/2.jpg'), title: '2', link: "https://www.bilibili.com/" },
                { url: require('@/assets/images/3.jpg'), title: '3', link: "https://www.bilibili.com/" }
            ]
        }
    },
    methods: {
        async getRecommend() {
            try {
                const res = await this.$http.get('/api/recommend');
                this.recommendList = res.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.recommend-component {
    margin-top: 20px;
}
</style>