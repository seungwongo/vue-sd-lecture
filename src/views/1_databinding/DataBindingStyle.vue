<template>
  <div>
    <div style="color:red;font-size:30px;">인라인 스타일 정의</div>
    <div :style="styleObject">스타일 데이터 바인딩</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      styleObject: {
        color: 'blue',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
