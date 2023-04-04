<template>
  <TheHeader :langIndex="langIndex" :changeLang="changeLang"/>
  <TheMain :langIndex="langIndex"/>
  <TheFooter :langIndex="langIndex"/>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import TheFooter from './components/TheFooter.vue'


export default {
  data () {
    return {
      langIndex: 0
    }
  },
  methods: {
    changeLang: function (newIndex) {
      this.langIndex = newIndex
    },
  },
  components: {
    TheHeader,
    TheMain,
    TheFooter
  }
}
</script>
