<template>
  <div class="container">
    <input type="text" v-model="eqpName" placeholder="설비명을 입력하세요" />
    <button @click="getequipment">조회</button>
    <button @click="gocreate">생성</button>
    <br />
    <br />
    <table class="customer-table">
      <thead>
        <tr>
          <th>EQPID</th>
          <th>Site</th>
          <th>Area</th>
          <th>Room</th>
          <th>효율</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in items">
          <td>
            <a @click="detail(item.eqpid)" class="link">{{ item.eqpid }}</a>
          </td>
          <td>{{ item.siteid }}</td>
          <td>{{ item.areaid }}</td>
          <td>{{ item.roomid }}</td>
          <td>{{ item.eff }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      items: [],
      eqpName: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async getequipment() {
      this.items = await this.$get(`/eqp?eqpid_like=${this.eqpName}`)
    },
    detail(eqpid) {
      //    console.log(eqpid)

      this.$router.push({
        path: '/ui/detail3',
        query: { id: eqpid }
      })
    },
    gocreate() {
      this.$router.push({ path: '/ui/create3' })
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
  padding: 5px;
}
.customer-table th {
  text-align: middle;
}
.customer-table td input {
  width: 100%;
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
