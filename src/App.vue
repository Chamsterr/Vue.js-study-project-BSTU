<template>
  <div>
    <footer class="footer">
      <div>
      <leaflet-map :lng="-0.09" :lat="51.505" :zoom="10" />
      </div>
        <!--    <p>Text</p>-->
    </footer>
  </div>
</template>

<script>
import LeafletMap from "@/components/map.vue";
export default {
  components : {
    LeafletMap,
  },
  name: "App.vue",
}
</script>

<style scoped>
  .footer {
    position: relative;
    border: 2px solid black;
    width: 100%;
    height: 350px;
    margin: 0;
    padding: 0;
  }

</style>