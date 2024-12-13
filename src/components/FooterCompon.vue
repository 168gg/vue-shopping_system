<template>
  <div>
    <van-tabbar v-model="active" @change="onChange" class="footer">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">更多</van-tabbar-item>
      <van-tabbar-item icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterCompon",
  props: {
    viewIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      active: this.viewIndex,
      routeMap: {
        0: '/home',
        1: '/more',
        2: '/video',
        3: '/car',
        4: '/my'
      }
    }
  },
  watch: {
    viewIndex(newVal) {
      this.active = newVal
    }
  },
  methods: {
    async onChange(index) {
      try {
        // 更新父组件传入的 viewIndex
        this.$emit('update:viewIndex', index)
        
        // 获取目标路由路径
        const targetPath = this.routeMap[index]
        
        // 如果当前路由与目标路由相同,则不进行跳转
        if (this.$route.path === targetPath) {
          return
        }

        // 路由跳转
        await this.$router.push(targetPath).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            console.error('Navigation error:', err)
          }
        })

      } catch (error) {
        console.error('Error in onChange:', error)
      }
    }
  },
  created() {
    // 初始化时根据当前路由设置激活状态
    const currentPath = this.$route.path
    for (const [key, value] of Object.entries(this.routeMap)) {
      if (value === currentPath) {
        this.active = parseInt(key)
        break
      }
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
}

:deep(.van-tabbar-item) {
  color: #7d7e80;
}

:deep(.van-tabbar-item--active) {
  color: #1989fa;
}

/* 为了防止内容被固定定位的底部导航栏遮挡 */
:deep(.van-tabbar) {
  height: 50px;
}

:deep(.van-tabbar-item__icon) {
  font-size: 20px;
  margin-bottom: 4px;
}

:deep(.van-tabbar-item__text) {
  font-size: 12px;
}
</style>