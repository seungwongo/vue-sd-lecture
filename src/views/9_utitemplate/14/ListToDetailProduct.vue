<template>
  <div>
    <input type="text" v-model="searchProduct" />
    <button @click="search">조회</button>
    <button @click="viewCreate">생성</button>
    <DataGrid
      :headers="headers"
      :items="productList"
      checkedKey="id"
      @viewDetail="viewDetail"
    />
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
export default {
  name: '',
  components: { DataGrid },
  data() {
    return {
      searchProduct: '',
      headers: [
        {
          title: 'productid',
          key: 'productid',
          link: true,
          linkKey: 'id',
          eventName: 'viewDetail'
        },
        { title: 'site', key: 'site' },
        { title: 'owningsite', key: 'owningsite' },
        { title: 'matching product', key: 'cfproductid' },
        { title: 'description', key: 'description' }
      ],
      productList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async search() {
      this.productList = await this.$get(
        '/products?productid_like=' + this.searchProduct
      )
      console.log(this.productList)
    },
    viewDetail(customerId) {
      this.$router.push({
        path: '/uitemplate/detailproduct',
        query: { id: customerId }
      })
    },
    viewCreate(customerId) {
      this.$router.push({
        path: '/uitemplate/detailproduct',
        query: { mode: 'create' }
      })
    }
  }
}
</script>
