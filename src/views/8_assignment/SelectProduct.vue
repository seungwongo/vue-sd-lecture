<template>
  <span>
    PRODUCTID :
    <input type="text" v-model="productid" v-on:change="changeItem" />
  </span>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    defaultProduct: {
      type: String,
      default: ''
    },
    eventName: {
      type: String,
      default: 'changeProduct'
    }
  },

  data() {
    return {
      productid: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.line = this.defaultProduct
    this.changeItem()
  },
  unmounted() {},
  methods: {
    changeItem() {
      this.$emit(this.eventName, this.productid)
    }
  }
}
</script>
