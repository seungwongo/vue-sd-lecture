<template>
  <img
    src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-25.jpg"
    alt="Loader"
    :style="{
      width: `${size}vh`,
      height: `${size}vh`,
      zIndex
    }"
    :class="{ absolute, fixed }"
    class="spinner"
  />
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    size: {
      type: Number,
      default: 5 // spinner-border 의 기본크기 : 2rem
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
.spinner {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.spinner.absolute {
  position: absolute;
}
.spinner.fixed {
  position: fixed;
}
</style>
