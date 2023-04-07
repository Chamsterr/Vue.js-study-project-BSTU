<template>
  <div @mousemove.prevent="">
    <footer class="footer" id="КОНТАКТЫ">
      <div class="mapContainer">
        <leaflet-map :lng="-0.09" :lat="51.505" :zoom="13" />
      </div>
      <!--    <p>Text</p>-->
      <div class="infoContainer">

        <section class="logo">
          <div class="menu-items">
            <div class="flexstarItems">
              <img src="../images/logo.svg" class="logo" />
            </div>
          </div>
        </section>

        <section>
          <section class="adress">
            <a> 123456, Санкт-Петербург, Невский пр-кт 127 </a>
          </section>
          <section class="email">
            <a href="mailto:sales@log.ru"> sales@log.ru </a>
          </section>
        </section>

        <section class="phoneNumber" >
          <a href="tel:7 (812) 344-56-65"> +7 (812) 344-56-65 </a>
          <a href="tel:7 (812) 355-56-65 "> +7 (812) 355-56-65 </a>
        </section>

        <section class="developer">
          <a> Разработано - D-E-N.ru </a>
        </section>
      </div>
    </footer>
  </div>
</template>

<script src="../scripts/TheFooter.js"></script>

<style src="../styles/TheFooter.css"></style>
