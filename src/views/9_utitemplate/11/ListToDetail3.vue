<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchSamscoreName"
        placeholder="Project Name"
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
import DataGrid from '@/components/flagments/DataGrid.vue'
export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      searchRegion: '',
      searchSamscoreName: '',
      regionList: [],
      headers: [
        {
          title: 'Project Name',
          key: 'project',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        {
          title: 'Language',
          key: 'lang'
        },
        { title: '순환참조', key: 'cc' },
        { title: '코드중복', key: 'dc' },
        { title: '다중참조', key: 'mcd' },
        { title: '코드길이', key: 'loc' }
      ],
      items: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (this.$route.query.searchSamscoreName !== undefined) {
      this.searchSamscoreName = this.$route.query.searchSamscoreName
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
        path: '/uitemplate/detail3',
        query: { id: customerId, searchSamscoreName: this.searchSamscoreName }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/samscore?project_like=${this.searchSamscoreName}`
      )
    },
    goToCreate() {
      this.$router.push({ path: '/uitemplate/create3' })
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
