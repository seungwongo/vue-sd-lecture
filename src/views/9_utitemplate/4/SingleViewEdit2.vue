<template>
  <div class="container">
    <table class="development-table">
      <tr>
        <td colspan="2" style="text-align: center;">
          <h2>개발 진행 현황 Update</h2>
        </td>
      </tr>
      <tr>
        <th>개발 내용 update</th>
        <td>
          <select
            v-model="developmentId"
            @change="changeDevelopment"
            style="width:100%;"
          >
            <option value="">==개발 건 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.name
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>SW Portal ID</th>
        <td><input type="text" v-model="development.name" /></td>
      </tr>
      <tr>
        <th>JIRA</th>
        <td><input type="text" v-model="development.jira" /></td>
      </tr>
      <tr>
        <th>Confluence</th>
        <td><input type="text" v-model="development.confluence" /></td>
      </tr>
      <tr>
        <th>Code Review</th>
        <td><input type="text" v-model="development.codereview" /></td>
      </tr>
      <tr>
        <th>Acceptence</th>
        <td><input type="text" v-model="development.acceptence" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="doSave">변경</button>
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
      development: {},
      developmentId: ''
    }
  },
  setup() {},
  created() {
    this.getDevelopment()
  },
  mounted() {},
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
          const {
            name,
            jira,
            confluence,
            codereview,
            acceptence
          } = this.development
          const r = await this.$put(`/developments/${this.developmentId}`, {
            name,
            jira,
            confluence,
            codereview,
            acceptence
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeDevelopment() {
      if (this.developmentId === '') {
        this.development = {
          name: '',
          jira: '',
          confluence: '',
          codereview: '',
          acceptence: ''
        }
        return
      }
      this.development = await this.$get(`/developments/${this.developmentId}`)
    },
    async getDevelopment() {
      this.items = await this.$get('/developments')
    }
  }
}
</script>
<style scoped>
.development-table {
  width: 100%;
}
.development-table,
.development-table th,
.development-table td {
  border-collapse: collapse;
}
.development-table th,
.development-table td {
  border: 1px solid #222;
  padding: 10px;
}
.development-table th {
  text-align: right;
}
.development-table td input {
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
