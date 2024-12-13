<template>
    <div class="goods-container">
        <!-- 左侧导航栏 -->
        <van-sidebar v-model="localActive" class="goods-nav" @change="handleSidebarChange">
            <van-sidebar-item v-for="(item, index) in filteredGoodsclass" :key="index" :title="item" />
        </van-sidebar>

        <!-- 右侧商品列表 -->
        <div class="goods-list" ref="goodsList">
            <div v-for="(group, index) in groupedGoods" :key="index" class="goods-section" :ref="'section-' + index" :data-index="index">
                <span class="har-text">{{ filteredGoodsclass[index] }}</span>
                <van-card v-for="(item, itemIndex) in group" :key="itemIndex" :price="item.price" :title="item.title"
                    :desc="item.discription" :thumb="item.image" @click="goToDetail(item)">
                    <template #tags>
                        <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary"
                            class="tag-item">
                            {{ tag }}
                        </van-tag>
                    </template>
                    <template #footer>
                        <!-- Add to shopping cart button -->
                        <van-button round size="mini" class="buttou-add" @click.stop="addShoping(item)">
                            +
                        </van-button>
                    </template>
                </van-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBarComponen",
    props: {
        active: {
            type: Number,
            default: 0,
        },
        goodsList: {
            type: Array,
            default: () => [
                { id: 1, title: "产品1", goodsclass: "商品1", discription: "商品描述", price: 12.5, tags: ["标签1", "标签2"], image: require('@/assets/images/pro1.jpg') },
                { id: 2, title: "产品2", goodsclass: "商品2", discription: "商品描述", price: 20.0, tags: ["标签1", "标签3"], image: require('@/assets/images/pro2.jpg') },
                { id: 3, title: "产品3", goodsclass: "商品3", discription: "商品描述", price: 15.0, tags: ["标签2", "标签3"], image: require('@/assets/images/pro3.jpg') },
                { id: 4, title: "产品4", goodsclass: "商品4", discription: "商品描述", price: 18.0, tags: ["标签3"], image: require('@/assets/images/pro4.jpg') },
                { id: 5, title: "产品5", goodsclass: "商品5", discription: "商品描述", price: 22.0, tags: ["标签1", "标签2"], image: require('@/assets/images/pro4.jpg') },
                { id: 6, title: "产品6", goodsclass: "商品6", discription: "商品描述", price: 19.5, tags: ["标签2"], image: require('@/assets/images/pro4.jpg') },
            ]
        },
    },
    data() {
        return {
            goodsclass: [], // 左侧导航栏的分类
            groupedGoods: [], // 按分类分组的商品
            localActive: this.active, // 当前激活的导航项
            filteredGoodsclass: ["商品1", "商品2", "商品4", "商品6"], // 左侧导航栏只显示的分类
        };
    },
    watch: {
        active(newVal) {
            this.localActive = newVal;
        },
    },
    created() {
        this.initializeGoods();
    },
    methods: {
        // 初始化商品分类和分组
        initializeGoods() {
            const classMap = {};
            this.goodsList.forEach((item) => {
                if (!classMap[item.goodsclass]) {
                    classMap[item.goodsclass] = [];
                }
                classMap[item.goodsclass].push(item);
            });

            this.groupedGoods = this.filteredGoodsclass.map((className) => classMap[className] || []); // 根据过滤后的分类生成商品分组
        },

        // 点击左侧导航栏时，滚动到对应的商品列表位置
        handleSidebarChange(index) {
            this.$nextTick(() => {  // 确保 DOM 已更新
                const targetSection = this.$refs[`section-${index}`];
                if (targetSection) {
                    const targetPosition = targetSection.offsetTop;
                    this.$refs.goodsList.scrollTo({
                        top: targetPosition - 50,
                        behavior: "smooth"
                    });
                }
            });
        },

        goToDetail(product) {
            // 跳转到商品详情页面
            this.$store.commit('SET_PRODUCT_INFO', product);
            this.$router.push({ name: 'more' });
        },

        addShoping(product) {
            // 将商品添加到购物车
            this.$store.commit('SET_SHOPPING_CAR', product);
            this.$router.push({ name: 'ProductsList' });
        }
    }
};
</script>

<style scoped>
.har-text {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    margin-left: -250px;
}

.goods-container {
    margin-top: 10px;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.goods-nav {
    width: 20%;
    height: 100%;
    position: sticky;
    top: 0;
}

.goods-list {
    width: 80%;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
    scroll-behavior: smooth;
}

.goods-section {
    margin-bottom: 20px;
}

.goods-section h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

:deep(.van-card) {
    padding: 6px;
}

:deep(.van-card__thumb) {
    width: 100px;
    height: 90px;
    margin-bottom: 0px;
    margin-right: 5px;
}

:deep(.van-card__img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

:deep(.van-card__content) {
    text-align: left;
    padding-left: 0;
    display: flex;
}

:deep(.van-card__title) {
    text-align: left;
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 3px;
    margin-top: 10px;
    line-height: normal;
}

:deep(.van-card__desc) {
    text-align: left;
    font-size: 14px;
    line-height: normal;
    margin-top: 5px;
    margin-bottom: 2px;
}

:deep(.van-card__tags) {
    text-align: left;
    margin: 40px 0;
    padding-left: 0;
    line-height: normal;
}

:deep(.van-card__price) {
    padding-top: 10px;
    font-size: 19px;
    font-weight: bolder;
}

.buttou-add {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 18px;
    right: 15px;
    bottom: 8px;
}

.tag-item {
    color: white;
    background-color: rgba(236, 136, 136, 0.656);
    margin-right: 4px;
}
</style>
