<template>
  <div class="video-player">
    <video
      ref="videoPlayer"
      :src="videoSrc"
      controls
      playsinline
      @touchstart="handleTouchStart"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
    ></video>
  </div>
</template>

<script>
export default {
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      startY: 0,
      endY: 0,
      translateY: 0,
      isMove: false,
      maxY: 100,
      maxSpeed: 0.5,
      startTime: 0,
    };
  },
  methods: {
    handleTouchStart(event) {
      this.startTime = Date.now();
      this.startY = event.touches[0].clientY;
      this.translateY = 0;
    },
    handleTouchMove(event) {
      this.endY = event.touches[0].clientY;
      this.translateY = this.endY - this.startY;
    },
    handleTouchEnd() {
      const speed = Math.abs(this.translateY / (Date.now() - this.startTime));
      if (Math.abs(this.translateY) > this.maxY || speed > this.maxSpeed) {
        this.isMove = true;
        this.translateY = this.translateY < 0 ? -window.innerHeight : window.innerHeight;
        setTimeout(() => {
          this.isMove = false;
          this.translateY = 0;
          this.$emit(this.translateY < 0 ? 'swipeUp' : 'swipeDown');
        }, 500);
      } else {
        this.translateY = 0;
      }
    },
  },
};
</script>

<style>
.video-player {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.video-player video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}

.video-player video.move {
  transform: translateY(v-bind(translateY + 'px'));
}
</style>