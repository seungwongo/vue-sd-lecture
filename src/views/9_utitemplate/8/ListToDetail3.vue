<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="systemusersinfo"
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
            <th>이름</th>
            <th>KnoxID</th>
            <th>사번</th>
            <th>SingleKey</th>
            <th>부서명</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody v-show="infos.length > 0">
          <!--  데이터가 들어왔으면 보여주기 v-show -->
          <tr :key="info.id" v-for="info in infos">
            <!-- item에 넣어서 for -->
            <td>
              <a @click="goToDetail(info.id)" class="link">{{ info.name }}</a>
              <!-- goToDetail 링크, 넘길때 item.id 보내  id값을 가지고 -->
            </td>
            <td>{{ info.knoxid }}</td>
            <td>{{ info.empno }}</td>
            <td>{{ info.singlekey }}</td>
            <td>{{ info.dept }}</td>
            <td>{{ info.phone }}</td>
          </tr>
        </tbody>
        <tbody v-show="infos.length == 0">
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
      systemusersinfo: '',
      regionList: [],
      headers: [
        {
          title: '이름',
          key: 'name',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        {
          title: '부서명',
          key: 'dept'
        },
        { title: 'KnoxID', key: 'knoxid' },
        { title: '사번', key: 'empno' },
        { title: 'SingleKey', key: 'singlekey' },
        { title: '연락처', key: 'phone' }
      ],
      infos: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (this.$route.query.systemusersinfo !== undefined) {
      this.systemusersinfo = this.$route.query.systemusersinfo
      this.doSearch()
    }
  },
  unmounted() {},
  methods: {
    goToDetail(userId) {
      // ①호출될때 넘겨받은 item.name을 customerID로 받아서 path로 넘겨 받음
      this.$router.push({
        path: '/uitemplate/detail3', // ③detail 화면으로 전환
        query: { id: userId, systemusersinfo: this.systemusersinfo } // ②받은 customerID를 id에 넣어 줌
      })
    },
    async doSearch() {
      this.infos = await this.$get(
        `/systemusersinfo?name_like=${this.systemusersinfo}`
      )
    },
    goToCreate() {
      this.$router.push({ path: '/uitemplate/create' }) // 생성버튼 클릭 페이지 이동
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
