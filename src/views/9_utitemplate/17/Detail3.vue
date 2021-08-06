<template>
  <div>
    <table class="table">
      <tr>
        <th>설비ID</th>
        <td>{{ eqp.eqpId }}</td>
      </tr>
      <tr>
        <th>사업장코드</th>
        <td>{{ eqp.siteid }}</td>
      </tr>
      <tr>
        <th>라인</th>
        <td>{{ eqp.line }}</td>
      </tr>
      <tr>
        <th>공정</th>
        <td>{{ eqp.group }}</td>
      </tr>
      <tr>
        <th>유휴설비 여부</th>
        <td>{{ eqp.isActive }}</td>
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
      eqp: {},
      eqpCheckId: ''
    }
  },
  setup() {},
  created() {
    console.log('?? ' + this.$route.query.id)
    this.eqpCheckId = this.$route.query.id
    this.getEqp()
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
        query: { id: this.eqpCheckId }
      })
    },
    async getEqp() {
      this.eqp = await this.$get(`/facilities/${this.eqpCheckId}`)
    }
  }
}
</script>
<style scoped>
.table {
  width: 100%;
}
.table,
.table th,
.table td {
  border-collapse: collapse;
}
.table th,
.table td {
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
