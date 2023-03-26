<template>
  <div class="gallery">
    <div
      class="gallery__image"
      v-for="(image, index) in images"
      :key="index"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      :class="{ 'gallery__image--active': index === activeIndex }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    this.startCarousel()
  },
  beforeUnmount () {
    clearInterval(this.intervalId)
  },
  methods: {
    startCarousel () {
      this.intervalId = setInterval(() => {
        this.nextImage()
      }, 10000)
    },
    nextImage () {
      this.activeIndex = (this.activeIndex + 1) % this.images.length
    }
  }
}
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.gallery__image {
  position: absolute;
  top: 125px;
  left: 0;
  height: 75%;
  width: 100%;
  background-size: cover;
  background-position: center;

  opacity: 0;
  transition: opacity 4s ease;
}

.gallery__image--active {
  opacity: 0.5;
}
</style>
