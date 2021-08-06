<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>이름</th>
        <td>{{ userId.name }}</td>
        <!-- 아래에서 받은 앞단 리스트에서 고객명 클릭한 id를 넣은 해당 customer 정보 보여주기 -->
      </tr>
      <tr>
        <th>KnoxID</th>
        <td>{{ userId.knoxid }}</td>
      </tr>
      <tr>
        <th>사번</th>
        <td>{{ userId.empno }}</td>
      </tr>
      <tr>
        <th>부서명</th>
        <td>{{ userId.dept }}</td>
      </tr>
      <tr>
        <th>연락처</th>
        <td>{{ userId.phone }}</td>
      </tr>
      <tr>
        <th>담당시스템</th>
        <td>{{ userId.system }}</td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToList">목록</button>
      <button @click="goToEdit">수정</button>
      <!-- 수정버튼 클릭 시 goToEdit 함수 호출 -->
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
      userId: {},
      userID2: '',
      systemusersinfo: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.userID2 = this.$route.query.id // 앞단에서 전달 해 준 id값을 customerId에 넣고
    this.systemusersinfo = this.$route.query.systemusersinfo
    this.getUserId() // 호출
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToList() {
      this.$router.push({
        path: '/uitemplate/listtodetail3',
        query: { systemusersinfo: this.systemusersinfo }
      })
    },
    goToEdit() {
      this.$router.push({
        path: '/uitemplate/detailedit3', // detailedit 화면으로 전환
        query: { id: this.userId } // 현재 customerID넘겨 주기 수정해야될 customer정보를 가져가야해서
      })
    },
    async getUserId() {
      this.userId = await this.$get(`/systemusersinfo/${this.userID2}`) // 앞단 넘겨준 id값을 ${this.customerId} 에 넣은거,
    }
  }
}
</script>
<style scoped>
.customer-table {
  width: 100%;
}
.customer-table,
.customer-table th,
.customer-table td {
  border-collapse: collapse;
}
.customer-table th,
.customer-table td {
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
