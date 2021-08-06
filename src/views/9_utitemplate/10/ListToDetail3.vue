<template>
  <div>
    <div class="search-container">
      <input
        v-model="searchEqpName"
        type="text"
        placeholder="설비명"
        style="margin-right:10px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:10px;">
        설비 조회
      </button>
      <button @click="goToCreate">설비 생성</button>
    </div>
    <br />
    <br />
    <div class="table-container">
      <table class="eqp-table">
        <thead>
          <tr>
            <th>설비명</th>
            <th>컨트롤러</th>
            <th>모터</th>
            <th>마감재</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="item in items">
            <td>
              <a @click="goToDetail(item.id)" class="link">
                {{ item.eqpName }}</a
              >
            </td>
            <td>{{ item.controller }}</td>
            <td>{{ item.motor }}</td>
            <td>{{ item.frame }}</td>
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
      url: '/eqpList',
      items: [],
      partList: {
        id: '',
        eqpName: '',
        parts: ''
      },
      onSearch: false,
      searchEqpName: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (this.$store.state.onSearch) {
      this.searchEqpName = this.$store.state.searchEqpName
      this.getItemList()
    }
  },
  unmounted() {},
  methods: {
    goToDetail(Id) {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: Id }
      })
    },
    async getItemList() {
      this.items = await this.$get(
        this.url + `?eqpName_like=${this.$store.state.searchEqpName}`
      )
      this.onSearch = true
      this.$store.commit('onSearch', this.onSearch)
    },
    doSearch() {
      this.$store.commit('searchEqpName', this.searchEqpName)
      this.getItemList()
    },
    goToCreate() {
      this.$router.push({
        path: '/uitemplate/create3'
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
}
.eqp-table th,
.eqp-table td {
  border: 1px solid #222;
  padding: 10px;
}
.eqp-table th {
  text-align: center;
}
.eqp-table td input {
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
</style>
