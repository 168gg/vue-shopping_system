<template>
  <div  class="video video-container" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <video
      ref="videoPlayer"
      class="video-player"
      :src="videos[currentIndex]"
      autoplay
      controls
    ></video>
    <FooterCompon/>
  </div>
</template>

<script>


export default {
  data() {
    return {
      videos: [
         "//tucdn.wpon.cn/api-girl/videos/37.mp4",
         "//tucdn.wpon.cn/api-girl/videos/38.mp4",
         "//tucdn.wpon.cn/api-girl/videos/39.mp4",
          "https://tucdn.wpon.cn/api-girl/videos/BMjAyMTExMjgxOTQyMDhfMjIzODExNjlfNjE3MjQ5MzE3NzFfMV8z_b_Ba81a453911baa5f494ffad1fb3e2045f.mp4",
      ],
      currentIndex: 0, // 当前播放的视频索引
      touchStartX: 0, // 触摸开始的 X 坐标
      touchEndX: 0, // 触摸结束的 X 坐标
      touchStartY: 0, // 触摸开始的 Y坐标
      touchEndY: 0, // 触摸结束的 Y坐标
    };
  },
  methods: {
    onTouchStart(event) {
      console.log(event)
      console.log(event.touches[0].clientX)
      this.touchStartX = event.touches[0].clientX; // 记录触摸起始点
      this.touchStartY = event.touches[0].clientY; // 记录触摸起始点
    },
    onTouchEnd(event) {
      console.log(event)
      console.log(event.changedTouches[0].clientX)
      this.touchEndX = event.changedTouches[0].clientX; // 记录触摸结束点
      this.touchEndY = event.changedTouches[0].clientY; // 记录触摸结束点
      this.handleSwipe();
    },
    handleSwipe() {
      const swipeDistance = this.touchEndX - this.touchStartX;
      const swipeDistanceY = this.touchEndY - this.touchStartY;
      // 如果滑动距离超过 50px，则判断为滑动
      if (swipeDistance > 50) {
        this.prevVideo(); // 向右滑动，播放上一个视频
      } else if (swipeDistance < -50) {
        this.nextVideo(); // 向左滑动，播放下一个视频
      }
      if (swipeDistanceY > 50) {
        this.prevVideo(); // 向右滑动，播放上一个视频
      } else if (swipeDistanceY < -50) {
        this.nextVideo(); // 向左滑动，播放下一个视频
      }
    },
    nextVideo() {
      // 切换到下一个视频，循环播放
      this.currentIndex = (this.currentIndex + 1) % this.videos.length;
      this.playVideo();
    },
    prevVideo() {
      // 切换到上一个视频，循环播放
      this.currentIndex =
        (this.currentIndex - 1 + this.videos.length) % this.videos.length;
      this.playVideo();
    },
    playVideo() {
      const video = this.$refs.videoPlayer;
      if (video) {
        video.pause(); // 确保视频切换前暂停
        video.play(); // 播放新视频
      }
    },
  },
};
</script>

<style>
.video-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
  position: relative;
}

.video-player {
  width: 100%;
  height: 90%;
  object-fit: cover;
}
</style>