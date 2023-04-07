<template>
  <TheHeader/>
  <TheMain/>
  <TheFooter/>
</template>    

<script>
    import TheHeader from './TheHeader.vue'
    import TheMain from './TheMain.vue'
    import TheFooter from './TheFooter.vue'


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
<style src="../styles/baseStyles.css">

</style>