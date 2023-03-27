
import ImageCarousel from './NewImageCarousel.vue';

<template>
  <main class="main">
    <NewImageCarousel :images="images">
      <div class="wrapper">
        <div class="mainTitle">
          <h1>{{ title }}</h1>
          <h4>
            {{ subtitle }}
          </h4>
        </div>
      </div>
    </NewImageCarousel>
    <div class="infoBlock">
      <div class="services" >

      </div>
      <div class="greyBlock"></div>
      <div class="greyBlock"></div>
    </div>
  </main>
</template>

<script src="../scripts/TheMain"></script>

<style src="../styles/TheMain.css"></style>
