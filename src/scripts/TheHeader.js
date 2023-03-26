export default {
  props: {
    languages: {
      type: Array,
      default: () => [
        { id: 1, name: "РУС" },
        { id: 2, name: "ENG" },
        { id: 3, name: "FRA" },
      ],
    },
    phone: {
      type: String,
      default: "8 (800) 123-45-67",
    },
    email: {
      type: String,
      default: "sales@log.ru",
    },
    navigation: {
      type: Array,
      default: () => [
        { id: "#УСЛУГИ", name: "УСЛУГИ" },
        { id: "#О КОМПАНИИ", name: "О КОМПАНИИ" },
        { id: "#ВАКАНСИИ", name: "ВАКАНСИИ" },
        { id: "#КОНТАКТЫ", name: "КОНТАКТЫ" },
      ],
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
};
