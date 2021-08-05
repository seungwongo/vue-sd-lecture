<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>고객아이디</th>
        <td>{{ customer.id }}</td>
      </tr>
      <tr>
        <th>고객명</th>
        <td>{{ customer.name }}</td>
      </tr>
      <tr>
        <th>회사명</th>
        <td>{{ customer.company }}</td>
      </tr>
      <tr>
        <th>이메일</th>
        <td>{{ customer.email }}</td>
      </tr>
      <tr>
        <th>연락처</th>
        <td>{{ customer.phone }}</td>
      </tr>
      <tr>
        <th>주소</th>
        <td>{{ customer.address }}</td>
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
      customer: {},
      customerId: '',
      searchCustomerName: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.customerId = this.$route.query.id
    this.searchCustomerName = this.$route.query.searchCustomerName
    this.getCustomer()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToList() {
      this.$router.push({
        path: '/template/listtodetail',
        query: { searchCustomerName: this.searchCustomerName }
      })
    },
    goToEdit() {
      this.$router.push({
        path: '/template/detailedit',
        query: { id: this.customerId }
      })
    },
    async getCustomer() {
      this.customer = await this.$get(`/users/${this.customerId}`)
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
