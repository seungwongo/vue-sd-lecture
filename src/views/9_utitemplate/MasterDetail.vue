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
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        selectType="radio"
        checkedKey="id"
        :pagecnt="5"
        @change-item="showDetail"
      />
    </div>
    <div class="detail-container" v-show="customer.id">
      <div class="btn-area">
        <button @click="doSave">저장</button>
      </div>
      <table class="detail-table">
        <tr>
          <th>고객아이디</th>
          <td>{{ customer.id }}</td>
        </tr>
        <tr>
          <th>고객명</th>
          <td><input type="text" v-model="customer.name" /></td>
        </tr>
        <tr>
          <th>회사명</th>
          <td><input type="text" v-model="customer.company" /></td>
        </tr>
        <tr>
          <th>이메일</th>
          <td><input type="text" v-model="customer.email" /></td>
        </tr>
        <tr>
          <th>연락처</th>
          <td><input type="text" v-model="customer.phone" /></td>
        </tr>
        <tr>
          <th>주소</th>
          <td><input type="text" v-model="customer.address" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      searchCustomerName: '',
      regionList: [],
      headers: [
        { title: '고객명', key: 'name' },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      items: [],
      customer: {}
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeRegion(data) {
      this.searchRegion = data
    },
    async showDetail(customerId) {
      //   this.customer = this.items.filter(c => c.id === customerId)[0]
      this.customer = await this.$get(`/users/${customerId}`)
    },
    doSave() {
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
          //   const { name, company, email, phone, address } = this.customer
          const r = await this.$put(`/users/${this.customer.id}`, {
            name: this.customer.name,
            company: this.customer.company,
            email: this.customer.email,
            phone: this.customer.phone,
            address: this.customer.address
          })
          console.log('result', r)

          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/users?name_like=${this.searchCustomerName}`
      )
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

.detail-container {
  margin-top: 10px;
}

.detail-table {
  width: 100%;
}

.detail-table,
.detail-table th,
.detail-table td {
  border-collapse: collapse;
}

.detail-table th,
.detail-table td {
  border: 1px solid #222;
  padding: 10px;
}

.detail-table th {
  text-align: right;
}

.detail-table td {
  text-align: left;
}

.detail-table td input {
  width: 100%;
}

.btn-area {
  text-align: right;
  margin-right: 10px;
  margin-bottom: 10px;
}

.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
