<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        placeholder="설비명 / 라인명"
        v-model="searchName"
        style="margin-right:5px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:5px;">조회</button>
      <button @click="goToCreate">신규설비 등록</button>
    </div>
    <div class="table-container">
      <table class="data-grid">
        <thead>
          <tr>
            <th>설비명</th>
            <th>사업장코드</th>
            <th>라인</th>
            <th>공정</th>
            <th>유휴설비 여부</th>
          </tr>
        </thead>
        <tbody v-show="items.length > 0">
          <tr v-for="h in items" :key="h.id">
            <!-- <td>{{ h.name }}</td> -->
            <td>
              <a @click="goToDetail(h.id)" class="link">{{ h.eqpId }}</a>
            </td>
            <td>{{ h.siteid }}</td>
            <td>{{ h.line }}</td>
            <td>{{ h.group }}</td>
            <td>{{ h.isActive }}</td>
          </tr>
        </tbody>
        <tbody v-show="items.length == 0">
          <tr>
            <td colspan="6">No Data.</td>
          </tr>
        </tbody>
      </table>
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
      searchName: ''
    }
  },
  setup() {},
  created() {
    // this.getEqp()
  },
  mounted() {
    if (this.$route.query.searchName !== '') {
      this.searchName = this.$route.query.searchName
      this.doSearch()
    }
  },
  unmounted() {},
  methods: {
    async getEqp() {
      this.items = await this.$get('/facilities')
    },
    async doSearch() {
      this.items = await this.$get(`/facilities?eqpId_like=${this.searchName}`)
      console.log('search')
    },
    async goToDetail(eqpId) {
      this.$router.push({ path: '/uitemplate/detail3', query: { id: eqpId } })
      console.log('detail')
    },
    async goToCreate() {
      this.$router.push({ path: '/uitemplate/create3' })
      console.log('create')
    }
  }
}
</script>
<style scoped>
.search-container {
  padding: 10px;
}
.search-container:after {
  clear: both;
}
.search-container > div {
  float: left;
  margin-right: 10px;
}
.search-container .label {
  margin-right: 5px;
  font-weight: bold;
}
.table-container {
  margin-top: 10px;
  padding: 10px;
}
.data-grid {
  width: 100%;
}
.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}
.data-grid th,
.data-grid td {
  border: 1px solid #222;
  padding: 5px;
}
.data-grid th {
  cursor: pointer;
}
.pagination {
  display: inline-block;
  margin-top: 5px;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}
.pagination a.active {
  background-color: deeppink;
  color: white;
}
.link {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
</style>
