<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>Project ID</th>
        <td>{{ customer.id }}</td>
      </tr>
      <tr>
        <th>Pruject Name</th>
        <td>{{ customer.project }}</td>
      </tr>
      <tr>
        <th>Language</th>
        <td>{{ customer.lang }}</td>
      </tr>
      <tr>
        <th>순환참조 (CC) Score</th>
        <td>{{ customer.cc }}</td>
      </tr>
      <tr>
        <th>코드중복 (DC) Score</th>
        <td>{{ customer.dc }}</td>
      </tr>
      <tr>
        <th>다중참조 (MCD) Score</th>
        <td>{{ customer.mcd }}</td>
      </tr>
      <tr>
        <th>코드길이 (LOC) Score</th>
        <td>{{ customer.loc }}</td>
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
      customerId: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.customerId = this.$route.query.id
    this.searchSamscoreName = this.$route.query.searchSamscoreName
    this.getSamscore()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToList() {
      this.$router.push({
        path: '/uitemplate/listtodetail3',
        query: { searchSamscoreName: this.searchSamscoreName }
      })
    },
    goToEdit() {
      this.$router.push({
        path: '/uitemplate/detailedit3',
        query: { id: this.customerId }
      })
    },
    async getSamscore() {
      this.customer = await this.$get(`/samscore/${this.customerId}`)
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
