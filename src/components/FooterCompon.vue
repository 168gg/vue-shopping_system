<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="shop-o">点餐</van-tabbar-item>
      <van-tabbar-item icon="video-o" >视频</van-tabbar-item>
      <van-tabbar-item icon="balance-list-o">订单</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterCompon",
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onChange(index) {
      console.log('切换到标签：', index)
      switch (index) {
        case 0:
          this.$router.push('/')
          break;
        case 1:
          this.$router.push('/more')
          break;
        case 2:
          this.$router.push('/video')
          break;
        case 3:
          this.$router.push('/car')
          break;
        case 4:
          this.$router.push('/my')
          break;

      }
    },

  }
};
</script>