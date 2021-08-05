<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: '페이지 제목을 전달해주세요.'
    }
  },
  inject: ['title2', 'title3'],
  //   data() {
  //     return {
  //       title: '페이지 제목입니다.'
  //     }
  //   },
  setup() {},
  created() {},
  mounted() {
    console.log(this.title2)
  },
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.page-title {
  border-left: 4px solid red;
  padding-left: 5px;
  text-align: left;
}
</style>
