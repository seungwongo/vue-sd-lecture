<template>
  <div>
    <!-- <img :src="imgSrc" />
    <img src="@/assets/logo.png" /> -->
    <input type="text" v-model="txt" />
    <button :disabled="txt == ''">저장</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      imgSrc: 'https://v3.vuejs.org/logo.png',
      txt: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
