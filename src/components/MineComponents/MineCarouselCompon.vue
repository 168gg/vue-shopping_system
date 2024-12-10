<template>
    <div class="Carousel-container">
        <div v-for="item in (index,datalist)" :key="index">


        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            datalist:[
                {url:require('@/assets/images/t11.jpg'),title:'1'},
                {url:require('@/assets/images/t12.jpg'),title:'2'},
                {url:require('@/assets/images/t13.jpg'),title:'3'},
                {url:require('@/assets/images/t14.jpg'),title:'4'}
            ]

        }
    }
}

</script>
<style scoped>
</style>