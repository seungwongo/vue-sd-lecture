<template>
  <div>
    <label><input type="radio" value="02" v-model="city" /> 서울</label>
    <label><input type="radio" value="21" v-model="city" /> 부산</label>
    <label><input type="radio" value="064" v-model="city" /> 제주</label>
    <div>선택한 지역: {{ city }}</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      city: '02'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
