<template>
  <div>
    <button @click="confirm">상세정보 조회</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    confirmKey: {
      type: String,
      default: 'false'
    },
    eventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      // confirmKey: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    confirm() {
      console.log('!!')
      alert('상세정보를 조회합니다')
      console.log('값: ' + this.confirmKey)
      this.$emit(this.eventName, this.confirmKey)
      // return this.confirmKey
    }
  }
}
</script>
