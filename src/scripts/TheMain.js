import ImageCarousel from "../components/ImageCarousel";
import NewImageCarousel from "../components/NewImageCarousel";
import InfoBlock from "../components/InfoBlock";
export default {
  components: {
    ImageCarousel,
    NewImageCarousel,
    InfoBlock
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
    langIndex: {
      type: Int16Array
    },
  },
  data() {
    return {
      images: [
        "../img/headerBackground.png",
        "../img/headerBackground2.png",
        "../img/headerBackground3.png",
      ],
      titles: [
        ["ГРУЗОПЕРЕВОЗКИ <br> ПО ЕВРОПЕ", "CARGO TRANSPORTING <br> ACROSS EUROPE", "FRET EUROPÉEN"],
        ["ГРУЗОПЕРЕВОЗКИ <br> ПО РОССИИ", "CARGO TRANSPORTING <br> ON RUSSIA", "FRET RUSSIA"],
        ["ГРУЗОПЕРЕВОЗКИ <br> ПО АЗИИ", "CARGO TRANSPORTING <br> ACROSS ASIA", "FRET ASIATIQUE"]
      ],
      subtitles: [
        ["Страны Евросоюза, а также Украина, <br> Беларусь со всеми документами.", "EU countries as well as Ukraine, <br>Belarus with all documents.", "Les pays de l'UE ainsi que l'Ukraine, <br>le Belarus avec tous les documents."],
        ["Доставка в крупные города<br> России со всеми документами", "Delivery to major cities<br> Russia with all documents", "Livraison dans toutes les grandes villes <br> de Russie avec tous les documents"],
        ["Доставка в развитые страны<br> Азии со всеми документами", "Delivery to developed Asian<br> countries with all documents", "Livraison dans les pays développés d'Asie<br> avec tous les documents"]
      ],
      serviceTitle: [
        "Услуги", "Services", "Service"
      ],
      // services: [
      //   [["Беларусь", "Украина"], ["Belarus", "Ukraine"], ["Bélarus", "Ukraine"]],
      //   [["Москва", "Екатеринбург", "Новосибирск", "Красноярск"], ["Moscow", "Yekaterinburg", "Novosibirsk", "Krasnoyarsk"], ["Moscou", "Ekaterinbourg", "Novossibirsk", "Krasnoïarsk"]],
      //   [["Китай", "Япония", "Южная Корея"], ["China", "Japan", "South Korea"], ["Chine", "Japon", "Corée du Sud"]]
      // ]
    };
  },
};
