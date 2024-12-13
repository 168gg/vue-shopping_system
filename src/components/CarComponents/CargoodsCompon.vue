<template>
 <van-card v-for="(item, itemIndex) in group" :key="itemIndex" :price="item.price" :title="item.title"
                    :desc="item.discription" thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
                    <template #tags>
                        <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary"
                            class="tag-item">
                            {{ tag }}
                        </van-tag>
                    </template>
                    <template #footer>
                        <van-button round size="mini" class="buttou-add">+</van-button>
                    </template>
                </van-card>
</template>
<script>
export default {
  name: "CargoodsCompon",
  props: {
    goodsDatas : {
      type: Array,
      default: {
        uuid: 0,
        title: '商品标题',
        price: '商品价格',
        discription: '商品描述',
        tags: ['标签一', '标签二'],
        imges: '商品图片'
      }
    }
  }
}
/*goodsDatas: [
  {
    title: '商品标题',
    price: '商品价格',
    discription: '商品描述',
    tags: ['标签一', '标签二'],
    imges: '商品图片'
  }

] */

</script>