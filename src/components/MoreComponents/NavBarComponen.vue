<template>
    <div class="goods-container">
        <!-- 左侧导航栏 -->
        <van-sidebar v-model="localActive" class="goods-nav" @change="handleSidebarChange">
            <van-sidebar-item v-for="(item, index) in goodsclass" :key="index" :title="item" />
        </van-sidebar>

        <!-- 右侧商品列表 -->
        <div class="goods-list" ref="goodsList">
            <div v-for="(group, index) in groupedGoods" :key="index" class="goods-section" :data-index="index">
                <span class="har-text">{{ goodsclass[index] }}</span>
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
                {
                    id: 1,
                    title: "商品1",
                    goodsclass: "商品1",
                    discription: "商品描述",
                    price: 12.5,
                    tags: ["标签1", "标签2", "标签3"],
                },
                {
                    id: 1,
                    title: "商品1",
                    goodsclass: "商品1",
                    discription: "商品描述",
                    price: 12.5,
                    tags: ["标签1", "标签2", "标签3"],
                },
                {
                    id: 1,
                    title: "商品1",
                    goodsclass: "商品1",
                    discription: "商品描述",
                    price: 12.5,
                    tags: ["标签1", "标签2", "标签3"],
                },
                {
                    id: 1,
                    title: "商品1",
                    goodsclass: "商品1",
                    discription: "商品描述",
                    price: 12.5,
                    tags: ["标签1", "标签2", "标签3"],
                },
                {
                    id: 1,
                    title: "商品1",
                    goodsclass: "商品1",
                    discription: "商品描述",
                    price: 12.5,
                    tags: ["标签1", "标签2", "标签3"],
                },
                {
                    id: 2,
                    goodsclass: "商品2",
                    title: "商品2",
                    discription: "商品描述",
                    price: 15.0,
                    tags: ["标签1", "标签2"],
                },
                {
                    id: 2,
                    goodsclass: "商品2",
                    title: "商品2",
                    discription: "商品描述",
                    price: 15.0,
                    tags: ["标签1", "标签2"],
                },
                {
                    id: 2,
                    goodsclass: "商品2",
                    title: "商品2",
                    discription: "商品描述",
                    price: 15.0,
                    tags: ["标签1", "标签2"],
                },
                {
                    id: 2,
                    goodsclass: "商品2",
                    title: "商品2",
                    discription: "商品描述",
                    price: 15.0,
                    tags: ["标签1", "标签2"],
                },
                {
                    id: 2,
                    goodsclass: "商品2",
                    title: "商品2",
                    discription: "商品描述",
                    price: 15.0,
                    tags: ["标签1", "标签2"],
                },
                {
                    id: 3,
                    goodsclass: "商品3",
                    title: "商品3",
                    discription: "商品描述",
                    price: 20.0,
                    tags: ["标签1", "标签3"],
                },
                {
                    id: 3,
                    goodsclass: "商品3",
                    title: "商品3",
                    discription: "商品描述",
                    price: 20.0,
                    tags: ["标签1", "标签3"],
                },
                {
                    id: 3,
                    goodsclass: "商品3",
                    title: "商品3",
                    discription: "商品描述",
                    price: 20.0,
                    tags: ["标签1", "标签3"],
                },
                {
                    id: 3,
                    goodsclass: "商品3",
                    title: "商品3",
                    discription: "商品描述",
                    price: 20.0,
                    tags: ["标签1", "标签3"],
                },
                {
                    id: 3,
                    goodsclass: "商品3",
                    title: "商品3",
                    discription: "商品描述",
                    price: 20.0,
                    tags: ["标签1", "标签3"],
                },
                {
                    id: 3,
                    goodsclass: "商品3",
                    title: "商品3",
                    discription: "商品描述",
                    price: 20.0,
                    tags: ["标签1", "标签3"],
                },
                {
                    id: 3,
                    goodsclass: "商品3",
                    title: "商品3",
                    discription: "商品描述",
                    price: 20.0,
                    tags: ["标签1", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
                {
                    id: 4,
                    goodsclass: "商品4",
                    title: "商品4",
                    discription: "商品描述",
                    price: 25.0,
                    tags: ["标签2", "标签3"],
                },
            ],
            
        },
    },
    data() {
        return {
            goodsclass: [], // 左侧导航栏的分类
            groupedGoods: [], // 按分类分组的商品
            localActive: this.active, // 当前激活的导航项
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

            this.goodsclass = Object.keys(classMap);
            this.groupedGoods = Object.values(classMap);
        },

        // 点击左侧导航栏时，滚动到对应的商品列表位置
        handleSidebarChange(index) {
            const sections = this.$refs.goodsList.querySelectorAll(".goods-section");
            if (sections[index]) {
                // 计算目标位置
                const targetPosition = sections[index].offsetTop;
                // 使用 scrollTo 方法进行平滑滚动
                this.$refs.goodsList.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        },
    },
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
    width: 140px;
    height: 120px;
    margin-bottom: -100px;
    margin-right: -5px;
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