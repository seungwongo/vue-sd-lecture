<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <td>Select</td>
        <td>
          <select v-model="searchKey" style="width=100%" @change="searchItem">
            <option :value="header" :key="header" v-for="header in headers">
              {{ header }}
            </option>
          </select>
        </td>
      </tr>
      <tr :key="header" v-for="header in headers">
        <td v-if="selectKey == header">{{ header }}</td>
        <td v-if="selectKey == header">
          <select v-model="eachId" style="width=100%" @change="changeItem">
            <option value=""> ==선택하세요== </option>
            <option :value="item.id" :key="item.id" v-for="item in items">
              {{ item[header] }}
            </option>
          </select>
        </td>
      </tr>
      <tr :key="header" v-for="header in headers">
        <td>{{ header }}</td>
        <td>
          <input type="text" v-model="eachItem[header]" />
        </td>
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
      url: '/partList', // '/eqpList' '/partList' '/engineerList'  '/users'
      selectKey: '',
      uniqueKey: '',
      valueKey: [],
      headers: [],
      items: [],
      eachItem: {},
      eachId: '',
      searchKey: ''
    }
  },
  setup() {},
  created() {
    this.getList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    searchItem() {
      this.selectKey = this.searchKey
    },
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
          const r = await this.$put(this.url + `/${this.eachId}`, this.eachItem)
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeItem() {
      if (this.eachId === '') {
        return
      }
      this.eachItem = await this.$get(this.url + `/${this.eachId}`)
    },
    async getList() {
      this.items = await this.$get(this.url)
      if (this.items.length > 0 && Object.keys(this.items[0]).length > 1) {
        this.headers = Object.keys(this.items[0])
        this.uniqueKey = this.headers.shift()
        this.selectKey = this.headers[0]
        this.valueKey = this.headers
      }
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
