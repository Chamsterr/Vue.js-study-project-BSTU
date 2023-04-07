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
      blocks: [
          [["48", "офисов", "В Европе и СНГ"], ["361", "грузовиков", "Volvo, Scania"], ["1500", "сотрудников", "профессионалов"]],
          [["48", "offices", "In Europe and the CIS"], ["361", "trucks", "Volvo, Scania"], ["1500", "employees", "professionals"]],
          [["48", "bureaux", "En Europe et dans la CEI"], ["361", "camions", "Volvo, Scania"], ["1500", "employés", "professionnels"]],
        ],
      discriptionTitle: [
          "О компании", "About company", "À propos de la société"
      ],
      discriptionText: [
          "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне." +
          " Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. " +
          "В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, " +
          "используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных " +
          "изменений пять веков, но и перешагнул в электронный дизайн.",
          "Lorem Ipsum is fish text often used in print and web design. " +
          "Lorem Ipsum has been the standard \"fish\" for Latin texts since the early 16th century. " +
          "At the time, an unnamed printer created a large collection of font sizes and shapes, using " +
          "Lorem Ipsum to print samples. Lorem Ipsum not only successfully survived five centuries without " +
          "noticeable changes, but also stepped into electronic design.",
          "Lorem Ipsum est un texte de poisson souvent utilisé dans la conception imprimée et Web. " +
          "Le Lorem Ipsum est le \"poisson\" standard des textes latins depuis le début du XVIe siècle. " +
          "À l'époque, un imprimeur anonyme a créé une vaste collection de tailles et de formes de polices, " +
          "en utilisant Lorem Ipsum pour imprimer des échantillons. Le Lorem Ipsum a non seulement survécu avec " +
          "succès à cinq siècles sans changements notables, mais il est également entré dans la conception électronique."
      ]
    };
  },
};
