<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="eqpid"
        placeholder="설비명"
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
        checkedKey="eqpid"
        :pagecnt="5"
        @change-item="showDetail"
      />
    </div>
    <div class="detail-container" v-show="equipment.eqpid">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>EQPID</th>
          <td>{{ equipment.eqpid }}</td>
        </tr>
        <tr>
          <th>Site</th>
          <td><input type="text" v-model="equipment.siteid" /></td>
        </tr>
        <tr>
          <th>Area</th>
          <td><input type="text" v-model="equipment.areaid" /></td>
        </tr>
        <tr>
          <th>Room</th>
          <td><input type="text" v-model="equipment.roomid" /></td>
        </tr>
        <tr>
          <th>효율</th>
          <td><input type="text" v-model="equipment.eff" /></td>
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
      eqpid: '',
      regionList: [],
      headers: [
        { title: 'EQPID', key: 'eqpid' },
        {
          title: 'Site',
          key: 'siteid'
        },
        { title: 'Area', key: 'areaid' },
        { title: 'Room', key: 'roomid' },
        { title: '효율', key: 'eff' }
      ],
      items: [],
      customer: {},
      equipment: ''
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
      this.customer = await this.$get(`/eqp?eqpid_like=${customerId}`)
      this.equipment = this.customer[0]
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
          const r = await this.$put(`/eqp/${this.equipment.id}`, {
            siteid: this.equipment.siteid,
            areaid: this.equipment.areaid,
            roomid: this.equipment.roomid,
            eff: this.equipment.eff
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(`/eqp?eqpid_like=${this.eqpid}`)
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
