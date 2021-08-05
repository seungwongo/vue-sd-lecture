<template>
  <div>
    <PageTitle title="주문목록" />

    <order-type
      defaultValue="003"
      eventName="changeOrder"
      @changeOrder="changeOrderType"
    />
  </div>
</template>
<script>
import PageTitle from '@/components/fragments/PageTitle'
import OrderType from '@/components/erp/OrderType'
export default {
  name: '',
  components: { PageTitle, OrderType },
  data() {
    return {
      sampleData: '',
      orderType: '003'
    }
  },
  provide() {
    return {
      title2: '타이틀 2입니다.',
      title3: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeOrderType(data) {
      console.log(data)
      this.orderType = data
    }
  }
}
</script>
