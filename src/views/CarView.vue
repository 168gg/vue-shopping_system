<template>
  <div class="CarView">
    <CarNavbarCompon></CarNavbarCompon>
    <CargoodsCompon :goodsDatas="goodsDatas"></CargoodsCompon>
    <FooterCompon></FooterCompon>
  </div>
</template>

<script>
import CarNavbarCompon from '@/components/CarComponents/CarNavbarCompon.vue';

import CargoodsCompon from '@/components/CarComponents/CargoodsCompon.vue';


export default {
  name: 'CarView',
  components: {
    CarNavbarCompon: CarNavbarCompon,
    CargoodsCompon: CargoodsCompon
  },
  data() {
    return {
      goodsDatas: [
        {
          uuid: 1,
          title: '商品1',
          price: '¥ 99.00',
          imges: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          discription: '商品描述'
        },
        {
          uuid: 2,
          title: '商品2',
          price: '¥ 99.00',
          imges: 'https://img.yzcdn.cn/'
          } 
      ]
    }
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      try {
        //插眼，这个地方用来请求商品数据
        /*
        goodsDatas:{
            uuid:xxx,
            title:xxx,
            price:xxx,
            img:xxx,
            desc:xxx
        }
        */
        const res = await this.$axios.get('/api/goods/list');
        this.goodsDatas = res.data;
      } catch (error) {
        console.error('Error in getGoods:', error);
      }
    }
  }
}

</script>