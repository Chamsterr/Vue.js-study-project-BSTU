<template>
  <div>
    <footer class="footer">
      <div>
        <leaflet-map :lng="-0.09" :lat="51.505" :zoom="13" />
      </div>
      <!--    <p>Text</p>-->
      <div class="company-info">

      </div>
    </footer>
  </div>
</template>

<script>
  import LeafletMap from "@/components/map.vue";
  import "leaflet/dist/leaflet.css"
  export default {
    components : {
      LeafletMap,
    },
    name: "TheFooter.vue",
}
</script>

<style>
  .footer {
    position: relative;
    border: 2px solid black;
    width: 100%;
    height: 611px;
    margin: 0;
    padding: 0;
  }
</style>
