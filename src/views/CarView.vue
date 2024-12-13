<template>
  <div class="CarView">
    <div class="products-list-container">
      <ProductsList></ProductsList>
    </div>
    <FooterCompon></FooterCompon>
  </div>
</template>

<script>
import FooterCompon from '@/components/FooterCompon.vue';
import ProductsList from '@/components/CarComponents/ProductsList.vue';

export default {
  name: 'CarView',
  components: {
    FooterCompon,
    ProductsList
  }
}
</script>

<style scoped>
.CarView {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
}

.products-list-container {
  flex: 1; /* This allows the products list to take up the remaining space */
  overflow-y: auto; /* Allow scrolling if content overflows */
}
</style>
