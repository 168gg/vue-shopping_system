<template class="my-info-compon">
    <div class="my-info-compon">
        <van-image round width="3rem" height="3rem" src="this.image" />

    </div>
</template>


<script>
export default {
    name: 'MyInfoCompon',
    data() {
        return {
            image: '@/assets/images/t21.jpg'
        }
    }
}
</script>
