<template>
    <div>
      <van-tabs v-model:active="activeTab" @click-tab="handleTabClick">
        <van-tab title="组件1">组件1</van-tab>
        <van-tab title="组件2">组件2</van-tab>
        <van-tab title="组件3">组件3</van-tab>
      </van-tabs>
      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </div>
  </template>
  
  <script>
  import { ref, markRaw } from 'vue'
  import Component1 from './components/Component1.vue'
  import Component2 from './components/Component2.vue'
  import Component3 from './components/Component3.vue'
  
  export default {
    setup() {
      const activeTab = ref(0)
      const currentComponent = ref(markRaw(Component1))
  
      const handleTabClick = (tab) => {
        switch (tab.title) {
          case '组件1':
            currentComponent.value = markRaw(Component1)
            break
          case '组件2':
            currentComponent.value = markRaw(Component2)
            break
          case '组件3':
            currentComponent.value = markRaw(Component3)
            break
        }
      }
  
      return {
        activeTab,
        currentComponent,
        handleTabClick
      }
    }
  }
  </script>