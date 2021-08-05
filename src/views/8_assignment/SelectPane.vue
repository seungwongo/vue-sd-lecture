<template>
  <div style="border:2px solid black">
    <selectLine
      :lines="lines"
      :defaultLine="defaultLine"
      @changeItem="changeItem1"
    />
    <selectProduct :product="product" @changeProduct="changeProduct1" />
  </div>
</template>
<script>
import selectLine from './SelectLine.vue'
import selectProduct from './SelectProduct.vue'
export default {
  name: '',
  components: { selectLine, selectProduct },
  props: {
    product: {
      type: String,
      default: ''
    },
    lines: {
      type: Array,
      default: function() {
        return []
      }
    },
    defaultLine: {
      type: String,
      default: ''
    },
    defaultProduct: {
      type: String,
      default: ''
    },
    eventName: {
      type: String,
      default: 'changeItem'
    }
  },

  data() {
    return {
      searchCondition: {
        line: '',
        productid: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeItem1(lineData) {
      this.searchCondition.line = lineData
      this.$emit(this.eventName, this.searchCondition)
    },
    changeProduct1(productData) {
      this.searchCondition.productid = productData
      this.$emit(this.eventName, this.searchCondition)
    }
  }
}
</script>
