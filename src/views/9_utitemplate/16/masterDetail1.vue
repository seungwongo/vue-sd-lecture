<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchGlassId"
        placeholder="Glass Id 를 입력하세요"
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
    <div class="detail-container" v-show="glassInfo.id">
      <div class="btn-area">
        <button @click="doSave" :disable="!isNotChanged">저장</button>
        <button @click="doCancel">Cancel</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>Glass ID</th>
          <td>{{ glassInfo.glassid }}</td>
        </tr>
        <tr>
          <th>Prod Type</th>
          <td>
            <input
              type="text"
              v-model="glassInfo.prodtype"
              :readonly="isActive"
              @change="setChange"
            />
          </td>
        </tr>
        <tr>
          <th>STATUS</th>
          <td>
            {{ glassInfo.status }}
          </td>
        </tr>
        <tr>
          <th>STEP</th>
          <td>
            <input
              type="text"
              v-model="glassInfo.step"
              :readonly="isActive"
              @change="setChange"
            />
          </td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <input
              type="text"
              v-model="glassInfo.eqpid"
              :readonly="isActive"
              @change="setChange"
            />
          </td>
        </tr>
        <tr>
          <th>PRODUCTID</th>
          <td>
            <input
              type="text"
              v-model="glassInfo.prodid"
              :readonly="isActive"
              @change="setChange"
            />
          </td>
        </tr>
        <tr>
          <th>PROCESS ID</th>
          <td>
            <input
              type="text"
              v-model="glassInfo.procid"
              :readonly="isActive"
              @change="setChange"
            />
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
      searchGlassId: '',
      isActive: false,
      isChanged: false,
      headers: [
        { title: 'GLASS ID', key: 'glassid' },
        { title: 'STEP', key: 'step' },
        { title: 'STATUS', key: 'status' },
        { title: 'PRODTYPE', key: 'prodtype' },
        { title: 'PRODID', key: 'prodid' },
        { title: 'EQPID', key: 'eqpid' },
        { title: 'PROCID', key: 'procid' }
      ],
      items: [],
      glassInfo: {},
      initGlassInfo: {}
    }
  },
  computed: {
    isNotChanged: function() {
      return (
        this.initGlassInfo.step === this.glassInfo.step &&
        this.initGlassInfo.prodtype === this.glassInfo.prodtype &&
        this.initGlassInfo.prodid === this.glassInfo.prodid &&
        this.initGlassInfo.eqpid === this.glassInfo.eqpid &&
        this.initGlassInfo.procid === this.glassInfo.procid
      )
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async showDetail(searchId) {
      //   this.customer = this.items.filter(c => c.id === customerId)[0]
      this.glassInfo = await this.$get(`/glasses2/${searchId}`)
      this.initGlassInfo = JSON.parse(JSON.stringify(this.glassInfo))
      if (this.glassInfo.status === 'Active') {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
    doCancel() {
      this.showDetail(this.glassInfo.id)
    },
    doSave() {
      if (this.isNotChanged) {
        this.$swal('There is No change!')
        return
      }
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
          const r = await this.$put(`/glassed/${this.glassInfo.id}`, {
            id: this.glassInfo.id,
            glassid: this.glassInfo.glassid,
            step: this.glassInfo.step,
            status: this.glassInfo.status,
            prodtype: this.glassInfo.prodtype,
            prodid: this.glassInfo.prodid,
            eqpid: this.glassInfo.eqpid,
            procid: this.glassInfo.procid
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/glasses2?glassid_like=${this.searchGlassId}`
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
