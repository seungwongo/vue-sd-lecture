<template>
  <div class="container">
    <div class="section">
      <Spinner absolute v-if="loading1" />
    </div>
    <div class="section">
      <Spinner absolute v-if="loading2" />
    </div>
    <Spinner size="10" fixed v-if="loading3" />
  </div>
</template>
<script>
import Spinner from './Spinner'
export default {
  name: '',
  components: { Spinner },
  data() {
    return {
      loading1: true,
      loading2: true,
      loading3: true
    }
  },
  setup() {},
  created() {},
  mounted() {
    setTimeout(() => (this.loading1 = false), 2000)
    setTimeout(() => (this.loading2 = false), 3000)
    setTimeout(() => (this.loading3 = false), 3500)
  },
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
.container {
  display: flex;
}
.section {
  margin: 5vw;
  width: 40vw;
  height: 70vh;
  border-radius: 10px;
  background-color: lightblue;
  position: relative;
}
</style>
