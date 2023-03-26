import ImageCarousel from "../components/ImageCarousel";
export default {
  components: {
    ImageCarousel,
  },
  props: {
    title: {
      type: String,
      default: "ГРУЗОВЫЕ ПЕРЕВОЗКИ",
    },
    subtitle: {
      type: String,
      default:
        "Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов",
    },
  },
  data() {
    return {
      images: [
        "https://i.pinimg.com/originals/d1/e1/8f/d1e18f4c23a14b1d0dda3e545b003f45.jpg",
        "https://img1.goodfon.com/original/2880x1800/a/e7/daf-konteynerovoz-port.jpg",
        "https://globtrade.co.uk/wp-content/uploads/2021/02/transportation-logistics-scaled.jpg",
        "https://globtrade.co.uk/wp-content/uploads/2021/02/transportation-logistics-scaled.jpg",
      ],
    };
  },
};
