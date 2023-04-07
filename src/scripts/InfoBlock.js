export default {
    computed: {
      langIndex() {
        return this.$store.getters.getLangIndex
      },
      services(){
        return this.$store.getters.getServices
      }
    },
    props: {
        titles: {
            type: Array,
            default: () => []
        },
        subtitles: {
            type: Array,
            default: () => []
        },
        serviceTitle: {
            type: Array
        }
    },
    data() {
        return {
            index: 0,
            isHoveredNext: false,
            isHoveredPreviuse: false,
            isHoveredButton: false,
            buttonText: ["Подробнее", "More info", "Plus d'info"],
            nextArrowText: ["След", "Next", "Suivant"],
            previusArrowText: ["Назад", "Back", "Retour"],
            hoverClass: ''
        };
    },
    methods: {
        nextButton: function () {
            if (this.index + 1 < this.titles.length) {
                this.index++;
                this.index = Math.round(this.index % this.titles.length);
            }
        },
        previusButton: function () {
            if (this.index > 0) {
                this.index--;
                this.index = Math.round(this.index % this.titles.length);
            }
        }
    }
}