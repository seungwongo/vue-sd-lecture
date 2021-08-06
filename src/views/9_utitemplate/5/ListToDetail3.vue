<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchSystemName"
        placeholder="시스템명"
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
      searchSystemName: '',
      regionList: [],
      headers: [
        {
          title: '시스템명',
          key: 'systemName',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        {
          title: '담당자',
          key: 'manager'
        },
        { title: '연락처', key: 'managerPhone' },
        { title: '이메일', key: 'managerEmail' }
      ],
      items: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeRegion(data) {
      this.searchRegion = data
    },
    goToDetail(systemId) {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: systemId }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/systems?systemName_like=${this.searchSystemName}`
      )
    },
    goToCreate() {
      this.$router.push({ path: '/uitemplate/create' })
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
