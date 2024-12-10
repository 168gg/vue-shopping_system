<template>
  <div class="myView">
   
    <HeadCompon/>

  </div>
</template>

<script>
import HeadCompon from '@/components/MineComponents/HeadCompon.vue'


export default {
  name: 'MyView',
  components: {
    HeadCompon: HeadCompon,
  }
}
</script>