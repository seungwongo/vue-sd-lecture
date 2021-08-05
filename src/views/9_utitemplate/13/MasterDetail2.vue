<template>
  <div>
    <label>조회구분 : </label>
    <label
      ><input
        type="radio"
        v-model="rdoCode"
        value="code"
        name="rdo"
      />Code</label
    >
    <label
      ><input
        type="radio"
        v-model="rdoCode"
        value="line"
        name="rdo"
      />Line</label
    >
    <div class="search-container">
      <input
        type="text"
        v-model="inputCode"
        placeholder="조회할 값을 입력해주세요"
        style="margin-right:10px;padding:3px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:5px;">조회</button>
    </div>
    <div class="table-container">
      <data-grid
        selectType="radio"
        :headers="headers"
        :items="items"
        checkedKey="id"
        :bHover="true"
        :pagecnt="5"
        @change-item="goToDetail"
      />
    </div>
    <MasterDetailEdit2 v-show="isDetailShow" :id="selectedid" />
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
import MasterDetailEdit2 from './MasterDetailEdit2.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid, MasterDetailEdit2 },
  data() {
    return {
      rdoCode: '',
      inputCode: '',
      isDetailShow: false,
      selectedid: '',
      searchRegion: '',
      searchCustomerName: '',
      regionList: [],
      headers: [
        { title: '코드', key: 'code' },
        { title: '라인', key: 'line' },
        { title: '구분', key: 'gubun' },
        { title: '설명', key: 'description' }
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
    goToDetail(customerId) {
      this.isDetailShow = true
      this.selectedid = customerId
    },
    async doSearch() {
      console.log(this.rdoCode)
      var url = ''
      if (this.inputCode === '') {
        url = '/codes'
      } else {
        url = '/codes?' + this.rdoCode + '_like=' + this.inputCode
      }
      this.items = await this.$get(url)

      this.isDetailShow = false
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
