<template>
  <select v-model="orderType" @change="changeOrderType">
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
      type: String,
      default: '001'
    },
    eventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      list: '',
      orderType: ''
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
      var serverData = [
        { code: '001', text: 'Standard Order' },
        { code: '002', text: 'Emgency Order' },
        { code: '003', text: 'Extra Order' }
      ]

      this.list = serverData
    },
    changeOrderType() {
      this.$emit(this.eventName, this.orderType)
    }
  }
}
</script>
