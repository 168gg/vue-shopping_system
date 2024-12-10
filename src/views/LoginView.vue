<template>
<div>
<HeadPictureCompon></HeadPictureCompon>
<van-divider />

<OtherLinkCompon></OtherLinkCompon>
</div>
</template>
<script>
import HeadPictureCompon from '@/components/LoginComponents/HeadPictureCompon.vue';
import OtherLinkCompon from '@/components/LoginComponents/OtherLinkCompon.vue';
export default {
  name: 'LoginView',
  components: {
    HeadPictureCompon,
    OtherLinkCompon
  }
}
</script>