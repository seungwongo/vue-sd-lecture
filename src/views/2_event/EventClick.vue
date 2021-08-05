<template>
  <div>
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      alert('조회합니다')
    }
  }
}
</script>
