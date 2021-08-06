<template>
  <div>
    <table class="eqp-table">
      <tr>
        <th>설비아이디</th>
        <td>{{ eachItem.id }}</td>
      </tr>
      <tr>
        <th>설비명</th>
        <td>{{ eachItem.eqpName }}</td>
      </tr>
      <tr>
        <th>컨트롤러</th>
        <td>{{ eachItem.controller }}</td>
      </tr>
      <tr>
        <th>모터</th>
        <td>{{ eachItem.motor }}</td>
      </tr>
      <tr>
        <th>마감재</th>
        <td>{{ eachItem.frame }}</td>
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
      eachItem: {},
      eachId: '',
      searchEqpName: ''
    }
  },
  setup() {},
  created() {
    this.eachId = this.$route.query.id
    this.getItem()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getItem() {
      this.eachItem = await this.$get(`/eqpList/${this.eachId}`)
      console.log(this.eachItem)
    },
    goToList() {
      console.log(this.searchEqpName)
      this.$router.push({
        path: '/uitemplate/listtodetail3'
      })
    },
    goToEdit() {
      this.$router.push({
        path: '/uitemplate/detailedit3',
        query: { id: this.eachId }
      })
    }
  }
}
</script>
<style scoped>
.eqp-table {
  width: 100%;
}
.eqp-table,
.eqp-table th,
.eqp-table td {
  border-collapse: collapse;
  border: 1px solid black;
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
