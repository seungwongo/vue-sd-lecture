<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchUserName"
        placeholder="고객명"
        style="margin-right:10px;padding:3px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:5px;">조회</button>
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        selectType="radio"
        checkedKey="id"
        :pagecnt="5"
        @change-item="showDetail"
      />
    </div>
    <div class="detail-container" v-show="userinfo.id">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>고객아이디</th>
          <td>{{ userinfo.id }}</td>
        </tr>
        <tr>
          <th>이름</th>
          <td><input type="text" v-model="userinfo.name" /></td>
        </tr>
        <tr>
          <th>KnoxID</th>
          <td><input type="text" v-model="userinfo.knoxid" /></td>
        </tr>
        <tr>
          <th>사번</th>
          <td><input type="text" v-model="userinfo.empno" /></td>
        </tr>
        <tr>
          <th>SingleKey</th>
          <td><input type="text" v-model="userinfo.singlekey" /></td>
        </tr>
        <tr>
          <th>부서명</th>
          <td><input type="text" v-model="userinfo.dept" /></td>
        </tr>
      </table>
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
      searchUserName: '',
      regionList: [],
      headers: [
        { title: '이름', key: 'name' },
        {
          title: 'KnoxID',
          key: 'knoxid'
        },
        { title: '사번', key: 'empno' },
        { title: 'SingleKey', key: 'singlekey' },
        { title: '부서명', key: 'dept' },
        { title: '연락처', key: 'phone' }
      ],
      items: [],
      userinfo: {}
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
    async showDetail(userinfoId) {
      //   this.customer = this.items.filter(c => c.id === customerId)[0]
      this.userinfo = await this.$get(`/systemusersinfo/${userinfoId}`)
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
          // const { name, company, email, phone, address } = this.customer
          const r = await this.$put(`/systemusersinfo/${this.userinfo.id}`, {
            name: this.userinfo.name,
            knoxid: this.userinfo.knoxid,
            empno: this.userinfo.empno,
            singlekey: this.userinfo.singlekey,
            dept: this.userinfo.dept
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/systemusersinfo?name_like=${this.searchUserName}`
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
}
.detail-container {
  margin-top: 10px;
}
.detail-table {
  width: 100%;
}
.detail-table,
.detail-table th,
.detail-table td {
  border-collapse: collapse;
}
.detail-table th,
.detail-table td {
  border: 1px solid #222;
  padding: 10px;
}
.detail-table th {
  text-align: right;
}
.detail-table td {
  text-align: left;
}
.detail-table td input {
  width: 100%;
}
.btn-area {
  text-align: right;
  margin-right: 10px;
  margin-bottom: 10px;
}
.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
