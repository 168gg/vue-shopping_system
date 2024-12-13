<template>

  <div>
    <MyInfoCompon></MyInfoCompon>
    <van-tabs v-model:active="active" @change="handleTabChange" class="NavBar">
      <van-tab v-for="(data, index) in datas" :key="index" :title="data.title"></van-tab>
    </van-tabs>
    <keep-alive class="good-list">
      <component :is="currentComponent" />
    </keep-alive>
    <FooterCompon></FooterCompon>
  </div>
</template>

<script>
import { ref, markRaw, computed } from 'vue'
import NavBarComponen from "@/components/MoreComponents/NavBarComponen.vue"
import shuangbei from '@/components/MoreComponents/shuangbei.vue'
import MyInfoCompon from '@/components/HomeComponents/MyInfoCompon.vue';

export default {
  components: {
    MyInfoCompon: MyInfoCompon,
  },
  props: {
    datas: {
      type: Array,
      default: () => [
        { title: '商品1', component: markRaw(NavBarComponen) },
        { title: '商品2', component: markRaw(shuangbei) }
      ]
    }
  },
  setup(props) {
    const active = ref(0)
    const currentComponent = computed(() => props.datas[active.value].component)

    const handleTabChange = (index) => {
      active.value = index
    }

    return {
      active,
      currentComponent,
      handleTabChange
    }
  }
}
</script>
<style scoped>
.NavBar {
  background-color: rgb(1, 0, 0);

  position: relative;
  margin: 10px auto 10px auto;
  width: 98%;
  z-index: 1000;
}



.good-list {
  position: relative;

}
</style>