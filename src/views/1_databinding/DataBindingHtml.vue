<template>
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문장</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
