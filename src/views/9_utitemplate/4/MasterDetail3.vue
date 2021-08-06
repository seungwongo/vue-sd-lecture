<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchDevelopmentName"
        placeholder="Development ID"
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
        selectType="radio"
        checkedKey="id"
        :pagecnt="5"
        @change-item="showDetail"
      />
    </div>
    <div class="detail-container" v-show="development.id">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>Development ID</th>
          <td>{{ development.id }}</td>
        </tr>
        <tr>
          <th>SW Portal PI</th>
          <td><input type="text" v-model="development.name" /></td>
        </tr>
        <tr>
          <th>Development PI</th>
          <td><input type="text" v-model="development.userid" /></td>
        </tr>
        <tr>
          <th>JIRA ID</th>
          <td><input type="text" v-model="development.jira" /></td>
        </tr>
        <tr>
          <th>Confluence ID</th>
          <td><input type="text" v-model="development.confluence" /></td>
        </tr>
        <tr>
          <th>Code Review</th>
          <td>
            <select v-model="development.codereview">
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>Acceptence Test</th>
          <td>
            <select v-model="development.acceptence">
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </td>
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
      searchDevelopmentName: '',
      regionList: [],
      headers: [
        { title: 'SW Portal ID', key: 'name' },
        {
          title: 'Development PI',
          key: 'userid'
        },
        { title: 'JIRA ID', key: 'jira' },
        { title: 'Confluence ID', key: 'confluence' },
        { title: 'Code Review', key: 'codereview' },
        { title: 'Acceptence Test', key: 'acceptence' }
      ],
      items: [],
      development: {}
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
    async showDetail(developmentId) {
      //   this.customer = this.items.filter(c => c.id === customerId)[0]
      this.development = await this.$get(`/developments/${developmentId}`)
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
          const r = await this.$put(`/developments/${this.development.id}`, {
            name: this.development.name,
            userid: this.development.userid,
            jira: this.development.jira,
            confluence: this.development.confluence,
            codereview: this.development.codereview,
            acceptence: this.development.acceptence
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/developments?name_like=${this.searchDevelopmentName}`
      )
    },
    goToCreate() {
      this.$router.push({ path: '/uitemplate/mastercreate' })
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
