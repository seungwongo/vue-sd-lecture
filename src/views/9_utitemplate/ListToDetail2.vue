<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchCustomerName"
        placeholder="고객명"
        style="margin-right:10px;padding:3px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:5px;">조회</button>
      <button @click="goToCreate">생성</button>
    </div>
    <div class="table-container">
      <table class="data-grid">
        <thead>
          <tr>
            <th>고객명</th>
            <th>회사명</th>
            <th>성별</th>
            <th>이메일</th>
            <th>연락처</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody v-show="items.length > 0">
          <tr :key="item.id" v-for="item in items">
            <td>
              <a @click="goToDetail(item.id)" class="link">{{ item.name }}</a>
            </td>
            <td>{{ item.company }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
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
      searchRegion: '',
      searchCustomerName: '',
      regionList: [],
      headers: [
        {
          title: '고객명',
          key: 'name',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      items: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    goToDetail(customerId) {
      this.$router.push({ path: '/template/detail', query: { id: customerId } })
    },
    async doSearch() {
      this.items = await this.$get(
        `/users?name_like=${this.searchCustomerName}`
      )
    },
    goToCreate() {
      this.$router.push({ path: '/template/create' })
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
}
</style>
