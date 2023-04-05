<template>
  <div>
    <div class="map-container" ref="map"></div>
    </div>
</template>

<script>
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
export default {
  name: 'LeafletMap',
  props: {
    lat : {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    },
    zoom: {
      type: Number,
      default: 10
    }
  },

  mounted(){
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([this.lat, this.lng], this.zoom)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/"> OpenStreetMap <a> contributors'
      }).addTo(this.map)

      this.map.on('load', () => {
        const tiles = document.getElementsByClassName('leaflet-tile')
        for (let i = 0; i < tiles.length; i++) {
          tiles[i].style.filter = 'grayscale(100%) contrast(1.2) brightness(90%)'

        }
      })

      L.TileLayer.include({
        onTileError: function (error, tile) {
          tile.src = tile.src;
        }
      });
    }
  }
}

</script>

<style scoped>
  .map-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }
  .leaflet-container{
    overflow: hidden;
  }
  .leaflet-tile {
    overflow: hidden;
    filter: grayscale(100%) contrast(1.2) brightness(90%);
  }

</style>