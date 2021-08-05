<template>
  <div>
    <table class="customer-table">
      <tbody>
        <tr :key="h.key" v-for="h in headers">
          <td class="header">{{ h.title }}</td>
          <td>
            <select
              v-if="h.key === 'select'"
              v-model="currentUserId"
              @change="changeUser"
            >
              <option value="" selected>==고객을 선택하세요==</option>
              <option :value="c.id" :key="c.id" v-for="c in userList">{{
                c.name
              }}</option>
            </select>
            <input
              type="text"
              v-if="h.key !== 'select'"
              v-model="currentUser[h.key]"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn-area" @click="onClick">저장</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      headers: [
        { title: '고객 선택', key: 'select' },
        { title: '고객명', key: 'name' },
        { title: '회사명', key: 'company' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      userList: [],
      currentUserId: '',
      currentUser: {
        name: '',
        company: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getUserList()
  },
  unmounted() {},
  methods: {
    async getUserList() {
      this.userList = await this.$get('/users')
      console.log(this.userList)
    },
    changeUser() {
      console.log(this.currentUserId)
      this.getCurrentUser()
    },
    async getCurrentUser() {
      this.currentUser = await this.$get(`/users/${this.currentUserId}`)
      console.log(this.currentUser)
    },
    onClick() {
      console.log(this.currentUser)

      if (this.currentUserId === '') {
        alert('선택된 고객이 없습니다.')
        return
      }

      this.$swal({
        title: 'Are you sure to save?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const r = await this.$put(`/users/${this.currentUserId}`, {
            name: this.currentUser.name,
            email: this.currentUser.email,
            company: this.currentUser.company,
            phone: this.currentUser.phone,
            address: this.currentUser.address
          })
          console.log(r)
          this.$swal('Saved!', 'User information has been saved.', 'success')
        }
      })
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

.customer-table select {
  width: 100%;
}

.header {
  text-align: right;
  font-weight: bold;
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
