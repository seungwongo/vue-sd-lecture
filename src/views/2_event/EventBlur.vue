<template>
  <div>
    <input
      type="text"
      :class="{ required: isEmpty }"
      v-model="txt"
      @blur="doCheck"
    />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      txt: '',
      isEmpty: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doCheck() {
      if (this.txt === '') {
        this.isEmpty = true
        alert('필수값입니다.반드시 입력하세요.')
      } else {
        this.isEmpty = false
      }
    }
  }
}
</script>
<style scoped>
.required {
  border: 3px dotted red;
}
</style>
