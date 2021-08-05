<template>
  <div>
    <input type="text" v-model="inputTxt" placeholder="코드명을 입력해주세요" />
    <button @click="Search">조회</button>
    <button @click="Create">생성</button>
    <table>
      <thead>
        <tr>
          <th>code</th>
          <th>line</th>
          <th>gubun</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="bExists">
          <td colspan="6">No Data</td>
        </tr>
        <tr v-bind:key="code.id" v-for="code in codeList">
          <td>
            <a @click="codeClick(code.id)">{{ code.code }}</a>
          </td>
          <td>{{ code.line }}</td>
          <td>{{ code.gubun }}</td>
          <td>{{ code.description }}</td>
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
      codeList: [],
      inputTxt: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  computed: {
    bExists() {
      if (this.codeList.length < 1) return true
      else return false
    }
  },
  methods: {
    async Search() {
      var url = ''
      if (this.inputTxt === '') {
        url = '/codes'
      } else {
        url = `/codes?code_like=${this.inputTxt}`
      }
      this.codeList = await this.$get(url)

      console.log(this.codeList.length)
    },
    codeClick(data) {
      this.$router.push({ path: '/template/detailedit3', query: { id: data } })
    },
    Create() {
      this.$router.push({ path: '/template/create3' })
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
}

a {
  text-decoration: underline;
  color: blue;
}
</style>
