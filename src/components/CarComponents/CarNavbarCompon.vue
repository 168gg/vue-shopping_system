<template>
    <div>
        <van-tabs v-model="active">
            <van-tab v-for="(title,index) in titleDats" :key="index" :title="title.title"></van-tab>
           
        </van-tabs>

    </div>
</template>
<script>
export default {
    name: "CarNavbarCompon",
    props: {
        titleDats: {
            type: Array,
            default: () => [
                {
                    uuid: 0,
                    title: '历史'
                },
                {
                    uuid: 1,
                    title: '订单'
                },
                {
                    uuid: 2,
                    title: '退单'
                }]
            }

        

    }
}
</script>