<template>
    <div class="head-container">

        <div class="head">
            <van-image class="head-img" round :src=datalist[0].picture fit="cover" width="3rem" height="3rem" />
            <div class="head-text">
                <span class="phone">{{ datalist[0].phone }}</span>
                <span class="my-info">我的勋章 <span style="color: black;">{{ datalist[0].number }}</span>/30 </span>
                
            </div>
            <van-button class="sign">签到</van-button>

        </div>
    </div>

</template>
<script>
export default {
    name: 'HeadCompon',
    data() {
        return {
            datalist: [
                { phone: '188******88', picture: require('@/assets/images/t21.jpg'), number: 0 }
            ]


        }
    }
}

</script>
<style scoped>
.head-container {
    height: 50px;
    /* 这个地方最好就是在父页面设置 */
    /* background: linear-gradient(to bottom, rgb(242, 236, 151), rgba(250, 229, 190, 0.822)); */
    padding-top: 30px;
}

.head {
    display: flex;
    padding-left: 30px;
}

.head-text {
    margin-left: 10px;
    padding: 5px;
}

.phone {
    display: block;
    font-size: 16px;
    font-weight: bold;
}

.my-info {
    display: block;
    font-size: 12px;
    color: rgb(119, 120, 122);
}
.sign{
    position: absolute;
    width: 60px;
    height: 30px;
    right: 20px;
    margin-top: 4px;
   
}
</style>