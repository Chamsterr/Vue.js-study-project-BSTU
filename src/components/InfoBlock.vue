
<template>
    <div class="infoBlock">
        <div class="services">
            <div class="region">
                <h2 class="serviceTitle" v-html="titles[index][langIndex]"></h2>
                <div class="serviceInfo" v-html="subtitles[index][langIndex]"></div>
                <button v-bind:class="{ 'hovered': isHoveredButton }" v-on:mouseover="isHoveredButton = true"
                    v-on:mouseout="isHoveredButton = false" class="serviceButton">
                    {{ buttonText[langIndex] }}
                </button>
                <img src="../images/Rectangle2.svg" alt="" class="serviceImg">
                <img :src="'../img/Rectangle' + index + '.svg'" alt="" class="serviceImg">

                <div class="serviceNext" v-bind:class="{ 'hovered': isHoveredNext }" v-on:click="nextButton"
                    v-on:mouseover="isHoveredNext = true" v-on:mouseout="isHoveredNext = false" alt="">
                    <span>{{ nextArrowText[langIndex] }}</span><img src="../images/Sled.svg">
                </div>
                <div v-bind:class="{ 'hovered': isHoveredPreviuse }" v-on:click="previusButton"
                    v-on:mouseover="isHoveredPreviuse = true" v-on:mouseout="isHoveredPreviuse = false"
                    class="servicePrevius">
                    <span>{{ previusArrowText[langIndex] }}</span> <img src="../images/Next.svg">
                </div>
            </div>
        </div>


        <div class="greyBlock"></div>
        <div class="greyBlock"></div>
    </div>
    <div class="servicesDetails">
        <div class="services">
            <h2>{{ serviceTitle[langIndex] }}</h2>
            <div class="servicesTiles">
                <div class="tile" v-for="item in services[index][langIndex]">
                    <img src="../images/tileSvg.svg" alt="">
                    <h5>{{ item }}</h5>
                </div>
            </div>
        </div>
    </div>
    <h1>{{ langIndex }}</h1>
</template>
  
<script src="../scripts/InfoBlock.js"></script>
  
<style src="../styles/InfoBlock.css"></style>