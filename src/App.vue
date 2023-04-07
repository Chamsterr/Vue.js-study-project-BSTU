<template>
  <RouterView></RouterView>
</template>

<script>
  import MainPage from './components/MainPage.vue';
  export default {
    data() {
      return {
        isHovered: false,
      };
    },
    components: {
      MainPage
    }
  }
</script>
