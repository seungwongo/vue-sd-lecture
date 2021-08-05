<template>
  <div>
    <select v-model="city" @change="doChange">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      city: '21'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doChange() {
      console.log(this.city)
    }
  }
}
</script>
