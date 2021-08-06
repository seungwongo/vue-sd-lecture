<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="MachineId"
        placeholder="설비ID"
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
    <!-- <div class="detail-container" v-show="machine.id"> -->
    <div class="detail-container" v-show="MachineId">
      <div class="btn-area">
        <button v-show="isEdit" @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>설비ID</th>
          <td>{{ machine_new.eqpid }}</td>
        </tr>
        <tr>
          <th>설비상세</th>
          <td>
            <input type="text" @keyup="doCheck" v-model="machine_new.eqpdesc" />
          </td>
        </tr>
        <tr>
          <th>작업내역</th>
          <td><input type="text" v-model="machine_new.work" /></td>
        </tr>
        <tr>
          <th>WORKORDER NO</th>
          <td><input type="text" v-model="machine_new.workorderno" /></td>
        </tr>
        <tr>
          <th>WORKODER 상태</th>
          <td>
            <div>
              <input
                type="radio"
                value="WAPPR"
                v-model="machine_new.status"
              />WAPPR<input
                type="radio"
                value="APPR"
                v-model="machine_new.status"
              />APPR<input
                type="radio"
                value="INPRG"
                v-model="machine_new.status"
              />INPRG<input
                type="radio"
                value="COMP"
                v-model="machine_new.status"
              />COMP
            </div>
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
      MachineId: '',
      regionList: [],
      headers: [
        { title: '설비ID', key: 'eqpid' },
        {
          title: '설비상세',
          key: 'eqpdesc'
        },
        { title: '작업내역', key: 'work' },
        { title: 'WORKORDER NO', key: 'workorderno' },
        { title: 'WORKORDER 상태', key: 'status' }
      ],
      items: [],
      machine: {},
      machine_new: {},
      isEdit: false
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
    async showDetail(MachineId) {
      console.log('MachineId ' + MachineId)
      //   this.customer = this.items.filter(c => c.id === customerId)[0]
      this.machine = await this.$get(`/machines/${MachineId}`)
      this.machine_new = await this.$get(`/machines/${MachineId}`)
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
          const r = await this.$put(`/machines/${this.machine_new.id}`, {
            eqpid: this.machine_new.eqpid,
            eqpdesc: this.machine_new.eqpdesc,
            work: this.machine_new.work,
            workorderno: this.machine_new.workorderno,
            index: this.machine_new.index,
            id: this.machine_new.id,
            status: this.machine_new.status
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
          this.MachineId = ''
          this.doSearch()
        }
      })
    },
    async doSearch() {
      console.log('조회' + this.machine.id)
      if (this.machine.id) {
        console.log('1')
        this.items = await this.$get(`/machines?eqpid_like=${this.MachineId}`)
      } else {
        console.log('2')
        this.items = await this.$get('/machines')
      }
    },
    doCheck() {
      console.log(
        'doCheck : ' + this.machine_new.eqpdesc + '//' + this.machine.eqpdesc
      )
      if (
        !(
          this.machine_new.eqpdesc === this.machine.eqpdesc ||
          this.machine_new.eqpdesc === this.machine.eqpdesc ||
          this.machine_new.eqpdesc === this.machine.eqpdesc ||
          this.machine_new.eqpdesc === this.machine.eqpdesc
        )
      ) {
        this.isEdit = true
      }
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
  text-align: center;
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
  /* width: 100%; */
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
