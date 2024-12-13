<template>
  <div class="myView">
   
    <HeadCompon></HeadCompon>
    <MyCardCompon></MyCardCompon>
    <FooterCompon></FooterCompon>
  </div>
</template>

<script>
import HeadCompon from '@/components/MineComponents/HeadCompon.vue'
import MyCardCompon from '@/components/MineComponents/myCardCompon.vue'

export default {
  name: 'MyView',
  components: {
    HeadCompon: HeadCompon,
    MyCardCompon: MyCardCompon
  },
  data() {
    return {
      viewIndex: 3
    }
  }
  }

</script>