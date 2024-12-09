<template>
  <div class="home">
    <SearchCompon></SearchCompon>
    <CarouselCompon></CarouselCompon>
      
    <RecommendCompon></RecommendCompon>

    <FooterCompon></FooterCompon>
  </div>
</template>

<script>

import CarouselCompon from "@/components/HomeComponent/CarouselCompon.vue"
import SearchCompon from "@/components/SearchCompon.vue";
import FooterCompon from "@/components/FooterCompon.vue";
import RecommendCompon from "@/components/HomeComponent/RecommendCompon.vue";
export default {
  name: 'HomeView',
  components: {
    CarouselCompon: CarouselCompon,
    SearchCompon: SearchCompon,
    FooterCompon: FooterCompon,
    RecommendCompon: RecommendCompon
  }
}
</script>
