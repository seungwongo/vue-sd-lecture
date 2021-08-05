<template>
  <div>
    <input type="text" v-model="searchName" />
    <button @click="search">조회</button>
    <button @click="viewCreate">생성</button>
    <DataGrid
      :headers="headers"
      :items="productList"
      :pagecnt="5"
      checkedKey="id"
      @viewDetail="viewDetail"
    />
    <DetailProduct
      :product="selectProduct"
      @save="saveFromDetail"
      @hide="hideDetail"
    />
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
import DetailProduct from './DetailFromMasterDetailProduct.vue'
export default {
  name: '',
  components: { DataGrid, DetailProduct },
  data() {
    return {
      selectProduct: null,
      searchName: '',
      headers: [
        { title: 'id', key: 'id' },
        {
          title: 'product id',
          key: 'productid',
          link: true,
          linkKey: 'id',
          eventName: 'viewDetail'
        },

        { title: 'site', key: 'site' },
        { title: 'owning site', key: 'owningsite' },
        { title: 'matching productid', key: 'cfproductid' },
        { title: 'description', key: 'description' }
      ],
      productList: [],
      nullProduct: {
        id: '',
        productid: '',
        site: '',
        owningsite: '',
        cfproductid: '',
        descriptoin: '',
        create: true
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async search() {
      this.productList = await this.$get(
        '/products?productid_like=' + this.searchName
      )
      console.log(this.productList)
    },
    viewDetail(productid) {
      this.selectProduct = this.productList.find(
        element => element.id === productid
      )
    },
    viewCreate() {
      this.selectProduct = this.nullProduct
    },
    async saveFromDetail(customer) {
      if (customer.create) {
        await this.$post('/products', customer)
      } else {
        await this.$put('/products/' + customer.id, customer)
      }

      // refresh
      this.search()
      this.viewDetail(this.selectProduct)
    },
    hideDetail() {
      this.selectProduct = null
    }
  }
}
</script>
