<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        style="margin-right:10px;padding:3px;"
        placeholder="설비명"
        @keyup.enter="doSearch"
        v-model="searchEqpName"
      />
      <button @click="doSearch">조회</button>
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
      <br /><br />
    </div>

    <div v-show="eachItem.id">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>설비아이디</th>
          <td>{{ eachItem.id }}</td>
        </tr>
        <tr>
          <th>설비명</th>
          <td><input type="text" v-model="eachItem.eqpName" /></td>
        </tr>
        <tr>
          <th>컨트롤러</th>
          <td><input type="text" v-model="eachItem.controller" /></td>
        </tr>
        <tr>
          <th>모터</th>
          <td><input type="text" v-model="eachItem.motor" /></td>
        </tr>
        <tr>
          <th>마감재</th>
          <td><input type="text" v-model="eachItem.frame" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import DataGrid from '../../components/fragments/DataGrid.vue'
export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      items: [],
      checked: '',
      checkedKey: '',
      headers: [
        { title: '설비아이디', key: 'id' },
        { title: '설비명', key: 'eqpName' },
        { title: '컨트롤러', key: 'controller' },
        { title: '모터', key: 'motor' },
        { title: '마감재', key: 'frame' }
      ],
      eachItem: {},
      searchEqpName: ''
    }
  },
  setup() {},
  created() {
    this.getItemList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async showDetail(eachId) {
      console.log('show In')
      this.eachItem = await this.$get(`/eqpList/${eachId}`)
      console.log(this.eachItem)
    },
    async getItemList() {
      this.items = await this.$get('/eqpList')
      //console.log(this.items)
    },
    async doSearch() {
      this.items = await this.$get(
        `/eqpList?eqpName_like=${this.searchEqpName}`
      )
      console.log(this.items)
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
          const r = await this.$put(`/eqpList/${this.eachItem.id}`, {
            id: this.eachItem.id,
            eqpName: this.eachItem.eqpName,
            controller: this.eachItem.controller,
            motor: this.eachItem.motor,
            frame: this.eachItem.frame
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    }
  }
}
</script>
<style scoped>
/* .eqp-container {
  margin-top: 10px;
  padding: 10px;
}
.eqp-table {
  width: 100%;
}
.eqp-table,
.eqp-table.th,
.eqp-table.td {
  border-collapse: collapse;
}
.eqp-table th,
.eqp-table td {
  border: 1px solid #222;
  padding: 5px;
} */

.table-container {
  margin-top: 10px;
  padding: 10px;
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
</style>
