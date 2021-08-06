<template>
  <div>
    <table class="systemInfo-table">
      <tr>
        <th>시스템아이디</th>
        <td>{{ systemInfo.id }}</td>
      </tr>
      <tr>
        <th>시스템명</th>
        <td>{{ systemInfo.systemName }}</td>
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
    </table>

    <div class="btn-area">
      <button @click="goToDetail">취소</button>
      <button @click="doSave">저장</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      items: [],
      systemInfo: {},
      systemId: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.systemId = this.$route.query.id
    this.getSystemInfo()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToDetail() {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: this.systemId }
      })
    },
    async doSave() {
      const {
        systemName,
        manager,
        managerPhone,
        managerEmail,
        master,
        officeAddress,
        faxNumbur
      } = this.systemInfo
      const r = await this.$put(`/systems/${this.systemId}`, {
        systemName,
        manager,
        managerPhone,
        managerEmail,
        master,
        officeAddress,
        faxNumbur
      })
      console.log('result', r)
    },
    async getSystemInfo() {
      this.systemInfo = await this.$api(`/systems/${this.systemId}`)
    }
  }
}
</script>
<style scoped>
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
.btn-area {
  text-align: center;
  margin-top: 10px;
}
.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
