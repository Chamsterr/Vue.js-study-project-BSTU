<template>
    <div class="Slider" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
        <div class="Slider__image" v-for="(image, index) in images" :key="index"
            :style="{ backgroundImage: 'url(' + image + ')' }" :class="{ 'Slider__image--active': index === activeIndex }">
        </div>
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
            bgImage: this.images[0], // начальный цвет фона
            activeIndex: 0, // начальный индекс изображения
            intervalId: null // начальное значение для идентификатора интервала
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
            }, 11000)
        },
        nextImage() {
            this.activeIndex = (this.activeIndex + 1) % this.images.length
            this.bgImage = this.images[this.activeIndex]
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
    transition: opacity 4s ease;
}

.Slider__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 4s ease;
}

.Slider__image--active {
    opacity: 0.5;
}
</style>