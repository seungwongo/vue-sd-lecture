<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>고객아이디</th>
        <td>{{ customer.id }}</td>
      </tr>
      <tr>
        <th>고객명</th>
        <td><input type="text" v-model="customer.name" /></td>
      </tr>
      <tr>
        <th>회사명</th>
        <td><input type="text" v-model="customer.company" /></td>
      </tr>
      <tr>
        <th>이메일</th>
        <td><input type="text" v-model="customer.email" /></td>
      </tr>
      <tr>
        <th>연락처</th>
        <td><input type="text" v-model="customer.phone" /></td>
      </tr>
      <tr>
        <th>주소</th>
        <td><input type="text" v-model="customer.address" /></td>
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
      customer: {},
      customerId: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.customerId = this.$route.query.id
    this.getCustomer()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToDetail() {
      this.$router.push({
        path: '/template/detail',
        query: { id: this.customerId }
      })
    },
    async doSave() {
      const { name, company, email, phone, address } = this.customer
      const r = await this.$put(`/users/${this.customerId}`, {
        name,
        company,
        email,
        phone,
        address
      })
      console.log('result', r)
    },
    async getCustomer() {
      this.customer = await this.$api(`/users/${this.customerId}`)
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
