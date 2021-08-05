<template>
  <div>
    <table class="data-grid">
      <tbody>
        <tr>
          <td></td>
          <td>고객 선택</td>
          <td>
            <select v-model="selectedId" @change="changeCustomer()">
              <option value="">==고객을 선택하세요==</option>
              <option v-for="user in allUsers" :key="user.id" :value="user.id">
                {{ user.name }}
              </option>
            </select>
          </td>
        </tr>
        <tr v-for="(row, i) in tableBody" :key="i">
          <td>
            <input type="checkbox" @click="isChecked(i)" />
          </td>
          <td>{{ row.title }}</td>
          <td>
            <input v-if="row.checked" type="text" v-model="$data[row.key]" />
            <template v-else>{{ $data[row.key] }}</template>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="doSave">저장</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      allUsers: [],
      selectedId: '',
      name: '',
      email: '',
      company: '',
      phone: '',
      address: '',
      tableBody: [
        { title: '고객명', key: 'name', checked: false },
        { title: '회사명', key: 'email', checked: false },
        { title: '이메일', key: 'company', checked: false },
        { title: '연락처', key: 'phone', checked: false },
        { title: '주소', key: 'address', checked: false }
      ]
    }
  },
  setup() {},
  created() {
    this.getAllUsers()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getAllUsers() {
      this.allUsers = await this.$get('/users')
    },
    async changeCustomer() {
      if (this.selectedId === '') {
        this.name = ''
        this.company = ''
        this.email = ''
        this.phone = ''
        this.address = ''
        return
      }
      const user = await this.$get(`/users/${this.selectedId}`)
      this.name = user.name
      this.email = user.email
      this.company = user.company
      this.phone = user.phone
      this.address = user.address
    },
    doSave(url, user) {
      this.$swal({
        title: 'Are you sure to save?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const r = await this.$put(`/users/${this.selectedId}`, {
            name: this.name,
            email: this.email,
            company: this.company,
            phone: this.phone,
            address: this.address
          })
          console.log(r)
          this.$swal('Saved!', 'New user has been modified.', 'success')
        }
      })
    },
    isChecked(i) {
      if (this.tableBody[i].checked) {
        this.tableBody[i].checked = false
      } else {
        this.tableBody[i].checked = true
      }
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.data-grid {
  width: 100%;
  border-collapse: collapse;
}

.data-grid tr,
.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 5px;
  text-align: left;
  font-size: 12px;
}

input,
select {
  width: 99%;
  font-size: 12px;
}

select {
  border: 1px solid black;
  background-color: white;
}

select:focus,
input:focus,
button:focus {
  outline: 0;
}
</style>
