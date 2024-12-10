<template>
  <div class="home">
    <SearchCompon></SearchCompon>
    <CarouselCompon></CarouselCompon>

    <MyInfoCompon></MyInfoCompon>
    <MiddleCompon></MiddleCompon>
    <SlideshowCompon></SlideshowCompon>
    <FooterCompon></FooterCompon>

  </div>
</template>

<script>

import CarouselCompon from "@/components/HomeComponents/CarouselCompon.vue"
import SearchCompon from "@/components/SearchCompon.vue";
import FooterCompon from "@/components/FooterCompon.vue";
import RecommendCompon from "@/components/HomeComponents/RecommendCompon.vue";
import MyInfoCompon from "@/components/HomeComponents/MyInfoCompon.vue";
import SlideshowCompon from "@/components/HomeComponents/SlideshowCompon.vue";
import MiddleCompon from "@/components/HomeComponents/MiddleCompon.vue";
export default {
  name: 'HomeView',
  components: {
    CarouselCompon: CarouselCompon,
    SearchCompon: SearchCompon,
    FooterCompon: FooterCompon,
    RecommendCompon: RecommendCompon,
    MyInfoCompon: MyInfoCompon,
    SlideshowCompon: SlideshowCompon,
    MiddleCompon: MiddleCompon
  }
}
</script>

<style scoped>
.home{
  padding-bottom: 50px;
}
</style>