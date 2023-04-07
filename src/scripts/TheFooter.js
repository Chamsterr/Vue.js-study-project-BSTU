import LeafletMap from "@/components/map.vue";
import "leaflet/dist/leaflet.css"
import CompanyInfoBlock from '@/components/company_info_block.vue';
export default {
    components : {
        LeafletMap,
        CompanyInfoBlock,
    },
    name: "TheFooter.vue",
    methods: {
        handleMapClick(e) {
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
        }
    }
}