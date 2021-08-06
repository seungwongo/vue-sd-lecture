<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchRecipeName"
        placeholder="레시피명"
        style="margin-right:10px;padding:3px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:5px;">조회</button>
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        checkedKey="id"
        :bHover="true"
        :selectType="'radio'"
        :pagecnt="5"
        @change-item="goToDetail"
      />
    </div>
    <div class="table-container">
      <edit-grid
        v-if="detailId != ''"
        :headers="detailHeaders"
        :items="rcp"
        @change-item="doSave"
      />
    </div>
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
import EditGrid from './EditGrid.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid, 'edit-grid': EditGrid },
  data() {
    return {
      searchRegion: '',
      searchRecipeName: '',
      regionList: [],
      headers: [
        { title: '레시피명', key: 'name', isEditable: true },
        { title: '모델', key: 'model', isEditable: true },
        { title: '해상도', key: 'resolution', isEditable: true },
        { title: '인치', key: 'inch', isEditable: true },
        { title: 'Dot(High)', key: 'highDot', isEditable: true },
        { title: 'Dot(off)', key: 'offDot', isEditable: true },
        { title: 'Line(Open)', key: 'openLine', isEditable: true },
        { title: 'Line(Dim)', key: 'dimLine', isEditable: true }
      ],
      items: [],
      detailHeaders: [
        { title: '레시피 아이디', key: 'id', isEditable: false },
        { title: '레시피명', key: 'name', isEditable: true },
        { title: '모델', key: 'model', isEditable: true },
        { title: '해상도', key: 'resolution', isEditable: true },
        { title: '인치', key: 'inch', isEditable: true },
        { title: 'Dot(High)', key: 'highDot', isEditable: true },
        { title: 'Dot(off)', key: 'offDot', isEditable: true },
        { title: 'Line(Open)', key: 'openLine', isEditable: true },
        { title: 'Line(Dim)', key: 'dimLine', isEditable: true }
      ],
      detailId: '',
      detailItems: {
        id: '',
        name: '',
        model: '',
        resolution: '',
        inch: '',
        highDot: '',
        offDot: '',
        openLine: '',
        dimLine: ''
      }
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
    async goToDetail(itemId) {
      this.rcp = await this.$get(`/recipes/${itemId}`)
      this.detailId = itemId
    },
    async doSearch() {
      this.items = await this.$get(
        `/recipes?name_like=${this.searchRecipeName}`
      )
    },
    async doSave(item) {
      console.log(item)
      this.detailItems = item
      const {
        name,
        model,
        resolution,
        inch,
        highDot,
        offDot,
        openLine,
        dimLine
      } = item
      await this.$put(`/recipes/${this.detailId}`, {
        name,
        model,
        resolution,
        inch,
        highDot,
        offDot,
        openLine,
        dimLine
      })
      this.detailId = ''
      this.doSearch()
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
