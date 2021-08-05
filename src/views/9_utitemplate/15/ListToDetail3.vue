<template>
  <div>
    <div class="search-container">
      <input type="text" v-model="searchTxt" placeholder="레시피명" />
      <button @click="doSearch">조회</button>
      <button @click="doCopy(checkedRcpId)">복사</button>
      <button @click="doCreate">생성</button>
      <button @click="doDelete(checkedRcpId)">삭제</button>
    </div>
    <table class="recipe-table">
      <thead>
        <tr>
          <th></th>
          <th :key="h.key" v-for="h in headers">{{ h.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="rcp.id" v-for="rcp in rcpList">
          <td>
            <input
              type="radio"
              name="rcp"
              :value="rcp.id"
              v-model="checkedRcpId"
            />
          </td>
          <td :key="j" v-for="(h, j) in headers">
            <a
              @click="goToDetail(rcp.id)"
              style="text-decoration: underline; cursor: pointer;"
              v-if="h.key === 'name'"
              >{{ rcp[h['key']] }}</a
            >
            <a v-else>{{ rcp[h['key']] }}</a>
          </td>
        </tr>
        <tr>
          <td colspan="100%" v-show="rcpList.length == 0">No Data</td>
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
      searchTxt: '',
      headers: [
        { title: '레시피명', key: 'name' },
        { title: '모델', key: 'model' },
        { title: '해상도', key: 'resolution' },
        { title: '인치', key: 'inch' },
        { title: 'Dot(High)', key: 'highDot' },
        { title: 'Dot(off)', key: 'offDot' },
        { title: 'Line(Open)', key: 'openLine' },
        { title: 'Line(Dim)', key: 'dimLine' }
      ],
      rcpList: [],
      checkedRcpId: ''
    }
  },
  setup() {},
  created() {
    this.getRcpList()
    this.checkedRcpId = ''
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getRcpList() {
      this.rcpList = await this.$get(`/recipes?name_like=${this.searchTxt}`)
      console.log(this.rcpList)
    },
    doSearch() {
      this.getRcpList()
      this.checkedRcpId = ''
    },
    doCreate() {
      this.$router.push({
        path: '/uitemplate/create3',
        query: { id: null }
      })
    },
    goToDetail(rcpId) {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: rcpId }
      })
    },
    doCopy(rcpId) {
      if (this.checkedRcpId === '') {
        alert('복사를 위한 선택된 레시피가 없습니다.')
        return
      }
      this.$router.push({
        path: '/uitemplate/create3',
        query: { id: rcpId }
      })
    },
    doDelete(rcpId) {
      if (this.checkedRcpId === '') {
        alert('삭제를 위한 선택된 레시피가 없습니다.')
        return
      }

      this.$swal({
        title: 'Are you sure to delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async result => {
        if (result.isConfirmed) {
          this.$delete(`/recipes/${rcpId}`)
          this.$swal('Deleted!', 'Recipe has been deleted.', 'success')
          this.doSearch()
        }
      })
    }
  }
}
</script>

<style scoped>
.recipe-table {
  width: 100%;
}

.recipe-table,
.recipe-table th,
.recipe-table td {
  border-collapse: collapse;
}

.recipe-table th,
.recipe-table td {
  border: 1px solid #222;
  padding: 10px;
}

.recipe-table th {
  text-align: center;
}

.recipe-table td input {
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
