<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchCustomerName"
        placeholder="고객명"
        style="margin-right:10px;padding:3px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:5px;">조회</button>
      <button @click="goToCreate">생성</button>
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        checkedKey="id"
        :bHover="true"
        @link="goToDetail"
      />
    </div>
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      searchRegion: '',
      searchCustomerName: '',
      regionList: [],
      headers: [
        {
          title: '고객명',
          key: 'name',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      items: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (this.$route.query.searchCustomerName !== undefined) {
      this.searchCustomerName = this.$route.query.searchCustomerName
      this.doSearch()
    }
  },
  unmounted() {},
  methods: {
    changeRegion(data) {
      this.searchRegion = data
    },
    goToDetail(customerId) {
      this.$router.push({
        path: '/template/detail',
        query: { id: customerId, searchCustomerName: this.searchCustomerName }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/users?name_like=${this.searchCustomerName}`
      )
    },
    goToCreate() {
      this.$router.push({ path: '/template/create' })
    }
  }
}
</script>
<style scoped>
.search-container {
  padding: 10px;
}

.search-container:after {
  clear: both;
}

.search-container > div {
  float: left;
  margin-right: 10px;
}

.search-container .label {
  margin-right: 5px;
  font-weight: bold;
}

.table-container {
  margin-top: 10px;
  padding: 10px;
}
</style>
