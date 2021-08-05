<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>고객선택</th>
        <td>
          <select v-model="selectedId" @change="selectACustomer">
            <option value="">==select a customer==</option>
            <option
              v-for="user in userList"
              v-bind:key="user.id"
              :value="user.id"
              >{{ user.name }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>고객명</th>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <th>회사명</th>
        <td><input type="text" v-model="user.company" /></td>
      </tr>
      <tr>
        <th>이메일</th>
        <td><input type="text" v-model="user.email" /></td>
      </tr>
      <tr>
        <th>연락처</th>
        <td><input type="tel" v-model="user.phone" /></td>
      </tr>
      <tr>
        <th>주소</th>
        <td><input type="text" v-model="user.address" /></td>
      </tr>
    </table>

    <br /><br />

    <button @click="modify" v-bind:disabled="isNotChanged">save</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  computed: {
    isNotChanged: function() {
      return (
        this.user.name === this.userOrigin.name &&
        this.user.company === this.userOrigin.company &&
        this.user.email === this.userOrigin.email &&
        this.user.phone === this.userOrigin.phone &&
        this.user.address === this.userOrigin.address
      )
    }
  },
  data() {
    return {
      userList: '',
      selectedId: '',
      user: {},
      userOrigin: {},
      nullUser: {
        id: 987654321,
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
    },
    async selectACustomer() {
      if (!this.selectedId) {
        this.user = JSON.parse(JSON.stringify(this.nulluser))
      } else {
        this.user = await this.$get('/users/' + this.selectedId)
      }
      // deep copy value to check modified
      this.userOrigin = JSON.parse(JSON.stringify(this.user))
    },

    async modify() {
      this.$swal({
        title: 'Are you sure to modify?',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Modify it!'
      }).then(async result => {
        if (result.isConfirmed) {
          await this.$put('/users/' + this.selectedId, this.user)
          this.$swal(
            'Created!',
            'user "' + this.user.name + '" has been modified.',
            'success'
          ).then(async result => {
            if (result) {
              // refresh list
              this.getUserList()
            }
          })
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

.btn-area {
  text-align: center;
  margin-top: 10px;
}

.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
