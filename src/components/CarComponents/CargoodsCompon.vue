<template>
    <div>
        <van-card v-for="(item, itemIndex) in goodsDatas" :key="itemIndex" :price="item.price" :title="item.title"
            :desc="item.discription" :thumb="item.imges">
            <template #tags>
                <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary" class="tag-item">
                    {{ tag }}
                </van-tag>
            </template>
            <template #footer>
                <van-button round size="mini" class="buttou-add">+</van-button>
            </template>
        </van-card>
    </div>
</template>
<script>
export default {
    name: "CargoodsCompon",
    props: {
        goodsDatas: {
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
<style scoped>
.tag-item {
    margin-right: 5px;
}

.buttou-add {
    position: absolute;
    bottom: 6px;
    right: 9px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 18px;
}
</style>></style>