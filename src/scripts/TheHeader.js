export default {
  methods: {
    setLangIndex(index) {
      console.log(index)
      this.$store.commit("setLangIndex", parseInt(index));
    }  
  },
  computed: {
    langIndex() {
    return this.$store.getters.getLangIndex
  }  
  },
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
        { id: "#УСЛУГИ", name: ["УСЛУГИ", "SERVICES"] },
        { id: "#О КОМПАНИИ", name: ["О КОМПАНИИ", "About us"] },
        { id: "#ВАКАНСИИ", name: ["ВАКАНСИИ"] },
        { id: "#КОНТАКТЫ", name: ["КОНТАКТЫ"] },
      ],
    }
  },
  data() {
    return {
      isHovered: false,
    };
  }
};
