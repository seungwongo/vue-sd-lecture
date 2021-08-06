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
        <td>{{ systemInfo.manager }}</td>
      </tr>
      <tr>
        <th>연락처</th>
        <td>{{ systemInfo.managerPhone }}</td>
      </tr>
      <tr>
        <th>이메일</th>
        <td>{{ systemInfo.managerEmail }}</td>
      </tr>
      <tr>
        <th>총책임자</th>
        <td>{{ systemInfo.master }}</td>
      </tr>
      <tr>
        <th>회사주소</th>
        <td>{{ systemInfo.officeAddress }}</td>
      </tr>
      <tr>
        <th>fax번호</th>
        <td>{{ systemInfo.faxNumbur }}</td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToList">목록</button>
      <button @click="goToEdit">수정</button>
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
    goToList() {
      this.$router.push({ path: '/uitemplate/listtodetail3' })
    },
    goToEdit() {
      this.$router.push({
        path: '/uitemplate/detailedit3',
        query: { id: this.systemId }
      })
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
