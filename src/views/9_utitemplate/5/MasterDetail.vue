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
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        checkedKey="id"
        selectType="radio"
        @change-item="checkedItem"
      />
    </div>
    <div class="detail-container" v-show="systemInfo.id">
      <button @click="doSave">저장</button>
      <table class="systemInfo-table">
        <tbody>
          <tr>
            <th>시스템아이디</th>
            <td>{{ systemInfo.id }}</td>
          </tr>
          <tr>
            <th>시스템명</th>
            <td><input type="text" v-model="systemInfo.systemName" /></td>
          </tr>
          <tr>
            <th>담당자</th>
            <td><input type="text" v-model="systemInfo.manager" /></td>
          </tr>
          <tr>
            <th>연락처</th>
            <td><input type="text" v-model="systemInfo.managerPhone" /></td>
          </tr>
          <tr>
            <th>이메일</th>
            <td><input type="text" v-model="systemInfo.managerEmail" /></td>
          </tr>
          <tr>
            <th>총책임자</th>
            <td><input type="text" v-model="systemInfo.master" /></td>
          </tr>
          <tr>
            <th>회사주소</th>
            <td><input type="text" v-model="systemInfo.officeAddress" /></td>
          </tr>
          <tr>
            <th>fax번호</th>
            <td><input type="text" v-model="systemInfo.faxNumbur" /></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div></div>
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
          key: 'systemName'
        },
        {
          title: '담당자',
          key: 'manager'
        },
        { title: '연락처', key: 'managerPhone' },
        { title: '이메일', key: 'managerEmail' }
      ],
      items: [],
      systemInfo: {},
      systemId: ''
    }
  },
  setup() {},
  created() {
    //this.systemId = this.$api.query.id
  },
  mounted() {},
  unmounted() {
    this.systemId = this.$route.query.id
    this.getSystemInfo()
  },
  methods: {
    changeRegion(data) {
      this.searchRegion = data
    },
    async checkedItem(systemId) {
      console.log(systemId)
      this.systemInfo = await this.$get(`/systems/${systemId}`)
    },
    doSave() {
      this.$swal({
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const r = await this.$put(`/systems/${this.systemInfo.id}`, {
            systemName: this.systemInfo.systemName,
            manager: this.systemInfo.manager,
            managerPhone: this.systemInfo.managerPhone,
            managerEmail: this.systemInfo.managerEmail,
            master: this.systemInfo.master,
            officeAddress: this.systemInfo.officeAddress,
            faxNumbur: this.systemInfo.faxNumbur
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/systems?systemName_like=${this.searchSystemName}`
      )
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
  width: 100%;
}
.systemInfo-table {
  width: 100%;
}
.systemInfo-table,
.systemInfo-table th,
.systemInfo-table td {
  border-collapse: collapse;
}
.systemInfo-table th,
.systemInfo-table td {
  border: 1px solid #222;
  padding: 10px;
}
</style>
