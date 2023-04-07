<template>
  <div class="container">
    <form class="form-container" @submit.prevent="handleButtonClick">

      <div class="form-group">
        <label for="Russian">Russian:</label>
        <input type="text" class="form-control" v-model="russianName" id="Russian" required>
      </div>
      <div class="form-group">
        <label for="English">English:</label>
        <input type="text" class="form-control" v-model="englishName" id="English" required>
      </div>
      <div class="form-group">
        <label for="French">French:</label>
        <input type="text" class="form-control" v-model="frenchName" id="French" required>
      </div>

      <div class="form-group">
        <label for="region">Region:</label>
        <select class="form-control" id="region" v-model="region" required>
          <option value="">Select a region</option>
          <option value="Europe">Europe</option>
          <option value="Russia">Russia</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
  {{ langIndex }}
  {{ services }}
</template>
  
<script>
export default {
  computed: {
    langIndex() {
      return this.$store.getters.getLangIndex
    },
    services() {
      return this.$store.getters.getServices
    }
  },
  data() {
    return {
      russianName: '',
      englishName: '',
      frenchName: '',
      region: '',
      regions: {
        Europe: 0,
        Russia: 1,
        Asia: 2
      }
    }
  },
  methods: {
    handleButtonClick() {
      this.$store.commit("addServices", [this.russianName, this.englishName, this.frenchName, this.regions[this.region]]);
      this.$store.commit("setLangIndex", parseInt(2));
    }
  }
}
</script>
  
<style>
select,
option,
button,
input {
  font-size: 25px;
  color: black;
}

select,
input {
  width: 255px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  border: 1px solid #ccc;
  padding: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}
</style>
  