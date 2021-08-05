<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>Line 선택</th>
        <td>
          <select
            v-model="selectedLine"
            style="width:100%;"
            @change="lineChange"
          >
            <option value="" disabled selected>
              === Line을 선택하세요 ===
            </option>
            <option :value="line.id" :key="line.id" v-for="line in lines">{{
              line.Desc
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>ID</th>
        <td>
          <input type="text" disabled v-model="selectedLine" />
        </td>
      </tr>
      <tr>
        <th>Code</th>
        <td><input type="text" v-model="lineDetails.code" /></td>
      </tr>
      <tr>
        <th>Desc</th>
        <td><input type="text" v-model="lineDetails.Desc" /></td>
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
      selectedLine: '',
      lines: [],
      lineDetails: {}
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
          const { code, Desc } = this.lineDetails
          const r = await this.$put(`/lines13/${this.selectedID}`, {
            code,
            Desc
          })
          console.log('result', r)
          this.$swal('Updated!', 'Line infomation has been updated.', 'success')
        }
      })
    },
    async getLines() {
      this.lines = await this.$get('/lines13')
    },
    async getlineDetail() {
      this.lineDetails = await this.$get(`/lines13/${this.selectedLine}`)
    },
    lineChange() {
      this.getlineDetail()
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
