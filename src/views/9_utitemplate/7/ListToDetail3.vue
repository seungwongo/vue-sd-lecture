<template>
  <div>
    <input type="text" v-model="txtGlassid" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
    <button>생성</button>
    <p></p>
    <table class="data-table">
      <thead>
        <th>
          GLASSID
        </th>
        <th>
          SITEID
        </th>
        <th>
          LOTID
        </th>
        <th>
          PRODTYPE
        </th>
        <th>
          MODELCODE
        </th>
      </thead>
      <tbody :key="glass.id" v-for="glass in glassList">
        <tr>
          <td>
            <a @click="goToDetail(glass.id)" class="link">{{
              glass.glassid
            }}</a>
          </td>
          <td>{{ glass.siteid }}</td>
          <td>{{ glass.lotid }}</td>
          <td>{{ glass.prodtype }}</td>
          <td>{{ glass.modelcode }}</td>
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
      txtGlassid: '',
      glassList: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (this.$route.query.searchTxt !== undefined) {
      console.log(this.$route.query.searchTxt)
      this.txtGlassid = this.$route.query.searchTxt
      this.doSearch()
    }
  },
  unmounted() {},
  methods: {
    async doSearch() {
      this.glassList = await this.$get(
        `/glasses?glassid_like=${this.txtGlassid}`
      )
    },
    goToDetail(uniqid) {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: uniqid, searchTxt: this.txtGlassid }
      })
    }
  }
}
</script>
<style scoped>
.data-table {
  width: 100%;
}
.data-table,
.data-table th,
.data-table td {
  border-collapse: collapse;
}
.data-table th,
.data-table td {
  border: 1px solid #222;
  padding: 10px;
}
.data-table th {
  text-align: center;
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
