<template>
    <div class="other-link-compon" >
        <van-button v-for="(images, index) in imgUrls" :key="index" 
            :style="{ backgroundImage: `url(${images.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
            @click="go_link(images)">
        </van-button>
    </div>

</template>
<script>
export default {
    name: 'OtherLinkCompon', 
    data() {
        return {
            imgUrls: [
               {image:require('@/assets/images/mxt.png'),url: 'https://www.baidu.com'} ,
               { image:require('@/assets/images/mxt.png'),url: 'https://www.baidu.com' },
               { image:require('@/assets/images/mxt.png'),url: 'https://www.baidu.com' },
               {image:require('@/assets/images/mxt.png'),url: 'https://www.baidu.com' }

            ],
            value: 0
        }
    },
    methods: {
        //实现跳转链接
        go_link(value) {
            window.location.href = value.url;
        },
        async fetchData() {
            try {
                /*插眼
                这个位置请求后端数据
                数据格式见imgUrls
                
                */
                const res = await this.$axios.get('/##') 
                if (res.data && Array.isArray(res.data)) {
                    this.imgUrls = res.data
                }
            } catch (error) {
               console.error('获取轮播图数据失败:', error)
            }
        }
        
    }

};


</script>
<style scoped>
/* 可以在这里添加其他样式 */
.van-button {
  width: 15%;
  margin-left: 10px;
  border-radius: 20px 20px 20px 20px;
}
.other-link-compon{
    margin-top: 30px;
}
</style>