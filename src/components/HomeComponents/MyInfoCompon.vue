<template class="my-info-compon-container">
    <div class="my-info-compon">
        <van-image round width="3rem" height="3rem" :src="image" class="my-info-compon-img" />
        <div class="my-info-compon-text">
            <div class="my-info-compon-text-phone">{{ phone }}</div>
        </div>
        <div class="info-container">
            <div class="text_container">
                <span class="text_title">{{ coin }}</span>
                <span class="text_contont">{{ text_title }}</span>
            </div>
            <div class="text_container">
                <span class="text_title">{{ Coupons }}</span>
                <span class="text_contont">{{ text_Coupons }}</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MyInfoCompon',
    data() {
        return {
            image: require('@/assets/images/t21.jpg'),
            phone: '18888888888',
            coin: '100',
            text_title: '雪王币',
            //优惠卷
            text_Coupons: '优惠券',
            Coupons: '0'
        }
    }
}
</script>
<style scoped>
.my-info-compon {
    width: 95%;
    display: flex;
    background-color: rgb(255, 255, 255);
    padding: 10px 0 10px 0;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    margin: 5px auto 0 auto;

}
.info-container{
    display: flex;
    margin: auto 0 auto 80px;
}

.my-info-compon-img {
    margin-left: 10px;
}
.text_container {
    display: block;
    width: 60px;
    background-color: rgb(251, 251, 251);
    font-size: 12px;

}
.text_title {
    display: block;
    font-size: 16px;
    font-weight: bolder;
}
.text_contont{ 
    display: block;
    font-size: 12px;
    color: rgb(110, 109, 107);

}




.my-info-compon-text {
    margin: auto 0 auto 10px;
}

.my-info-compon-text-phon {
    font-size: 12px;
}
</style>