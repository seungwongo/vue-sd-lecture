<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>라인 선택</th>
        <td>
          <select
            v-model="selectedLine"
            style="width:100%;"
            @change="lineChange"
          >
            <option value="" disabled selected>
              === 라인을 선택하세요 ===
            </option>
            <option :value="line.code" :key="line.code" v-for="line in lines">{{
              line.Desc
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>코드 종류 선택</th>
        <td>
          <select
            v-model="selectedType"
            style="width:100%;"
            @change="typeChange"
          >
            <option value="" disabled selected>
              === Code종류를 선택하세요 ===
            </option>
            <option :value="type" :key="i" v-for="(type, i) in codeTypes">{{
              type
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>코드 선택</th>
        <td>
          <select
            v-model="selectedCode"
            style="width:100%;"
            @change="codeChange"
          >
            <option value="" disabled selected>
              === Code를 선택하세요 ===
            </option>
            <option :value="code.id" :key="code.id" v-for="code in codes">{{
              code.description
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Code</th>
        <td><input type="text" v-model="codeDetails.code" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="doSave">저장</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      lines: {},
      codeTypes: ['Reject', 'Rework'],
      selectedLine: '',
      selectedType: '',
      selectedCode: '',
      codes: [],
      codeDetails: {}
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getLines()
  },
  unmounted() {},
  methods: {
    async doSave() {
      this.$swal({
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const { line, gubun, code, description } = this.codeDetails
          const r = await this.$put(`/codes/${this.selectedCode}`, {
            line,
            gubun,
            code,
            description
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async getLines() {
      this.lines = await this.$get('/lines')
    },
    async getCodes() {
      if (this.selectedLine === '') return
      if (this.selectedType === '') return
      var url =
        '/codes?line=' + this.selectedLine + '&gubun=' + this.selectedType
      console.log(url)
      this.codes = await this.$get(url)
    },
    async getCodeDetail() {
      this.codeDetails = await this.$get(`/codes/${this.selectedCode}`)
    },
    typeChange() {
      this.codeDetails.code = ''
      this.getCodes()
    },
    codeChange() {
      this.getCodeDetail()
    },
    lineChange() {
      this.typeChange()
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
  padding: 10px;
}
.customer-table th {
  text-align: right;
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
</style>
