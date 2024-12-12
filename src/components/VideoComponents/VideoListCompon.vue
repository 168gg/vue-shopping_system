<template>
  <div class="video-list">
    <div
      v-for="(video, index) in videos"
      :key="index"
      @click="selectVideo(index)"
      class="video-item"
    >
      {{ video.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { title: 'Video 1', src: 'video1.mp4' },
        { title: 'Video 2', src: 'video2.mp4' },
      ],
      selectedIndex: 0,
    };
  },
  methods: {
    selectVideo(index) {
      this.selectedIndex = index;
      this.$emit('videoSelected', this.videos[index]);
    },
  },
};
</script>