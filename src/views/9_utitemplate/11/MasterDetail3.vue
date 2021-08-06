<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchProjectName"
        placeholder="Project Name"
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
    <div class="detail-container" v-show="customer.id">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>Project ID</th>
          <td>{{ customer.id }}</td>
        </tr>
        <tr>
          <th>Project Name</th>
          <td><input type="text" v-model="customer.project" /></td>
        </tr>
        <tr>
          <th>Language</th>
          <td>
            <select class="detail-table td input" v-model="customer.lang">
              <option value="JAVA">JAVA</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
            </select>
          </td>
          <!-- <td><input type="text" v-model="customer.lang" /></td> -->
        </tr>
        <tr>
          <th>순환참조 (CC) Score</th>
          <td><input type="text" v-model="customer.cc" /></td>
        </tr>
        <tr>
          <th>코드중복 (DC) Score</th>
          <td><input type="text" v-model="customer.dc" /></td>
        </tr>
        <tr>
          <th>다중참조 (MCD) Score</th>
          <td><input type="text" v-model="customer.mcd" /></td>
        </tr>
        <tr>
          <th>코드라인 (LOC) Score</th>
          <td><input type="text" v-model="customer.loc" /></td>
        </tr>
      </table>
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
      searchProjectName: '',
      regionList: [],
      headers: [
        { title: 'Project ID', key: 'id' },
        { title: 'Project Name', key: 'project' },
        { title: 'Language', key: 'lang' },
        { title: '순환참조', key: 'cc' },
        { title: '코드중복', key: 'dc' },
        { title: '다중참조', key: 'mcd' },
        { title: '코드라인', key: 'loc' }
      ],
      items: [],
      customer: {}
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
    async showDetail(customerId) {
      //   this.customer = this.items.filter(c => c.id === customerId)[0]
      this.customer = await this.$get(`/samscore/${customerId}`)
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
          //   const { name, company, email, phone, address } = this.customer
          const r = await this.$put(`/samscore/${this.customer.id}`, {
            project: this.customer.project,
            lang: this.customer.lang,
            cc: this.customer.cc,
            dc: this.customer.dc,
            mcd: this.customer.mcd,
            loc: this.customer.loc
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/samscore?project_like=${this.searchProjectName}`
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
