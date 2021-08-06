<template>
  <div>
    <input type="text" v-model="txtUser" @keyup.enter="doSearch" />
    <button class="btn-area" @click="doSearch">조회</button>
    <p></p>
    <DataGrid
      selectType="radio"
      :headers="headers"
      :items="userList"
      enablePaging="true"
      :pagecnt="5"
      eventName="doSelect"
      @doSelect="getData"
      checkedKey="id"
    />
    <p></p>
    <Detail
      :headers="headers"
      :items="userInfo"
      :enableBtn="false"
      eventName="doSave"
      @doSave="doSave"
    />
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid'
import Detail from '@/components/fragments/Detail3'

export default {
  name: '',
  components: { DataGrid, Detail },
  data() {
    return {
      headers: [
        { title: 'ID', key: 'id' },
        { title: 'GLASSID', key: 'glassid' },
        { title: 'SITEID', key: 'siteid' },
        { title: 'LOTID', key: 'lotid' },
        { title: 'PRODTYPE', key: 'prodtype' },
        { title: 'MODELCODE', key: 'modelcode' }
      ],
      userList: [],
      txtUser: '',
      seletedUserid: '',
      userInfo: {}
    }
  },
  setup() {},
  created() {
    this.doSearch()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doSearch() {
      this.userList = await this.$get(`/glasses?glassid_like=${this.txtUser}`)
    },
    async getData(data) {
      this.seletedUserid = data
      this.userInfo = await this.$get(`/glasses/${this.seletedUserid}`)
    },
    async doSave(data) {
      this.userInfo = data
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
          const { glassid, siteid, lotid, prodtype, modelcode } = this.userInfo
          const r = await this.$put(`/glasses/${this.userInfo.id}`, {
            glassid,
            siteid,
            lotid,
            prodtype,
            modelcode
          })
          console.log('result', r)

          this.$swal('Updated!', 'User has been updated.', 'success')

          this.userInfo = await this.$get(`/glasses/${this.userInfo.id}`)
          this.userList = await this.$get(
            `/glasses?glassid_like=${this.txtUser}`
          )
        }
      })
    }
  }
}
</script>
<style scoped>
.edit-table {
  width: 100%;
}
.edit-table,
.edit-table th,
.edit-table td {
  border-collapse: collapse;
}
.edit-table th,
.edit-table td {
  border: 1px solid #222;
  padding: 10px;
}
.edit-table th {
  width: 20%;
  text-align: right;
}
.edit-table td {
  text-align: left;
}
.btn-area {
  text-align: center;
  margin-top: 10px;
}

.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
.link {
  cursor: pointer;
  text-decoration: underline;
}
</style>
