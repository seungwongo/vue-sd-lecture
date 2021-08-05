<template>
  <div>
    <div class="container" :class="{ 'text-red': isActive, 'text-big': isBig }">
      클래스 바인딩
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      isActive: true,
      isBig: true
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
.container {
  width: 100%;
  height: 200px;
  border: 1px solid red;
}

.text-red {
  color: red;
}

.text-big {
  font-size: 40px;
}
</style>
