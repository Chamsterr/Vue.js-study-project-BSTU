<template>
    <div class="Slider" v-bind:style="{ backgroundImage: 'url(' + bgImage + ')' }">
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
            bgImage: this.images[0] // начальный цвет фона
        };
    },
    created() {
        setInterval(() => {
            this.bgImage = getRandomColor(this.images); // вызов функции, которая будет генерировать случайный цвет фона
        }, 10000);
    }
};

function getRandomColor(images) {
    return images[Math.floor(Math.random() * images.length)];
}
</script>

<style>
.Slider {
    height: 755px;
    width: 100%;
    background-size: cover;
    background-position: center;
}
</style>  