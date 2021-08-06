<template>
  <div>
    <div class="search-container">
      <select
        @change="searchCombo($event)"
        id="searchItem"
        style="margin-right:5px;padding:3px;"
      >
        <option value="">==선택==</option>
        <option value="eqpId">설비명</option>
        <option value="line">라인</option>
      </select>
      <input
        type="text"
        v-model="searchName"
        placeholder="설비명 / 라인"
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
    <div class="detail-container" v-show="eqp.id">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>설비명</th>
          <td>{{ eqp.eqpId }}</td>
        </tr>
        <tr>
          <th>사업장코드</th>
          <td><input type="text" v-model="eqp.siteid" /></td>
        </tr>
        <tr>
          <th>라인</th>
          <td><input type="text" v-model="eqp.line" /></td>
        </tr>
        <tr>
          <th>공정</th>
          <td><input type="text" v-model="eqp.group" /></td>
        </tr>
        <tr>
          <th>유휴설비 여부</th>
          <td><input type="text" v-model="eqp.isActive" /></td>
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
      curEvent: '',
      searchItem: '',
      searchName: '',
      items: [],
      eqp: {},
      // regionList: [],
      headers: [
        { title: '설비명', key: 'eqpId' },
        { title: '사업장코드', key: 'siteid' },
        { title: '라인', key: 'line' },
        { title: '공정', key: 'group' },
        { title: '유휴설비 여부', key: 'isActive' }
      ]
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
    async showDetail(eqpId) {
      this.eqp = await this.$get(`/facilities/${eqpId}`)
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
          const { eqpId, siteid, line, group, isActive } = this.eqp
          const r = await this.$put(`/facilities/${this.eqp.id}`, {
            eqpId,
            siteid,
            line,
            group,
            isActive
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')

          this.doSearch()
        }
      })
    },
    async doSearch() {
      // console.log('searchCombo1 : ' + this.curEvent)
      if (this.curEvent === 'line') {
        this.items = await this.$get(`/facilities?line_like=${this.searchName}`)
      } else {
        this.items = await this.$get(
          `/facilities?eqpId_like=${this.searchName}`
        )
      }
    },
    async searchCombo(event) {
      console.log(event.target.value)
      this.curEvent = event.target.value
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
