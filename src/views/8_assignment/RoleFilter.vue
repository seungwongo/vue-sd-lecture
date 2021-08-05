<template>
  <select v-model="orderType" @change="changeOrderType">
    --변수선언후 default 로 매핑
    <option :value="option.code" :key="option.code" v-for="option in list">{{
      option.text
    }}</option>
  </select>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    defaultValue: {
      // 부모한테서 오는 변수 명
      type: String,
      default: 'general'
    },
    eventName: {
      type: String,
      default: 'change-item' // change 되면 부모한테 보내는 event 명
    }
  },
  data() {
    return {
      list: '',
      orderType: '',
      id: ''
    }
  },
  setup() {},
  created() {
    this.orderType = this.defaultValue
  },
  mounted() {
    this.getList()
  },
  unmounted() {},
  methods: {
    getList() {
      if (this.orderType === 'admin') {
        var Data = [
          { code: 'ASAN', text: '본사' },
          { code: 'OUTSITE', text: '법인' },
          { code: 'OTHER', text: '외주' }
        ]
      }
      if (this.orderType === 'general') {
        Data = [{ code: 'ASAN', text: '본사' }]
      }
      this.list = Data
    },
    changeOrderType() {
      this.$emit(this.eventName, this.orderType) // 부모한테 전달할 액션 , 보낼 데이터
    }
  }
}
</script>
<style scoped></style>
