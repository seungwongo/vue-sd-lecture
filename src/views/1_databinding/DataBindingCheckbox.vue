<template>
  <div>
    <label><input type="checkbox" value="02" v-model="cities" /> 서울</label>
    <label><input type="checkbox" value="21" v-model="cities" /> 부산</label>
    <label><input type="checkbox" value="064" v-model="cities" /> 제주</label>
    <div>{{ cities }}</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      cities: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
