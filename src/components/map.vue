<template>
    <div class="map-container" ref="map"></div>
</template>

<script>
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

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
      default: 13
    }
  },

  data() {
    return {
      isZoomEnabled: true,
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

      this.map.scrollWheelZoom.disable();
      this.map.dragging.disable();
      this.map.on('click', function (e) {
        this.isZoomEnabled = !this.isZoomEnabled;
        if (this.isZoomEnabled) {
          this.map.dragging.enable();
          this.map.scrollWheelZoom.enable();
        }
        else {
          this.map.scrollWheelZoom.disable();
          this.map.dragging.disable();
        }
        if (this.clickHandler) {
          this.clickHandler(e);
        }
      }.bind(this));

      this.map.on('load', () => {
        const tiles = document.getElementsByClassName('leaflet-tile')
        for (let i = 0; i < tiles.length; i++) {
          tiles[i].style.filter = 'grayscale(0%) contrast(0) brightness(90%)'

        }
      })

      L.TileLayer.include({
        onTileError: function (error, tile) {
          tile.src = tile.src;
        }
      });

      L.marker([this.lat, this.lng], {
        icon: L.icon({
          iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-256.png",
          iconSize: [38, 45],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76]
        })
      }).addTo(this.map);

      this.map.on('layeradd', function(event) {
        console.log('Layer added', event);
      });
    }
  }
}

</script>

<style src="../styles/TheFooter.css"></style>