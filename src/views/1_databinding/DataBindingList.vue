<template>
  <div>
    <select>
      <option :value="city.v" :key="city.v" v-for="city in cities">{{
        city.t
      }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      cities: [
        { t: '서울', v: '02' },
        { t: '부산', v: '21' },
        { t: '대구', v: '23' },
        { t: '제주', v: '064' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
