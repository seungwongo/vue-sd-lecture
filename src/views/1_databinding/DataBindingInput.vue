<template>
  <div>
    <input type="text" v-model="valueModel" />
    <h1>{{ valueModel }}</h1>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      valueModel: '',
      numberModel: 3
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
