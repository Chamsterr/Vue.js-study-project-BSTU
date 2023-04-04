<template>
    <div class="Slider" :style="backgroundStyle" :class="{ transition: isTransitioning }">
        <slot></slot>
        
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
    data() {
        return {
            bgImage: this.images[0],
            bgGradient: "linear-gradient(0deg, rgba(47, 52, 58, 0.75), rgba(47, 52, 58, 0.75))",
            activeIndex: 0,
            intervalId: null,
            isTransitioning: false
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.bgImage})`
            }
        }
    },
    mounted() {
        this.startCarousel()
    },
    beforeUnmount() {
        clearInterval(this.intervalId)
    },
    methods: {
        startCarousel() {
            this.intervalId = setInterval(() => {
                this.nextImage()
            }, 8000)
        },
    nextImage() {
        this.activeIndex = (this.activeIndex + 1) % this.images.length
        this.bgImage = this.images[this.activeIndex]
        this.isTransitioning = true
        setTimeout(() => {
        this.isTransitioning = false
    }, 4000)
}
    }
}
</script>
  
  
<style>
.Slider {
    height: 455px;
    width: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    transition:all 0.5s ease;
}

.Slider.transition {
    transition: background-image 5s ease;
}
</style>
  