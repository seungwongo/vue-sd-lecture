<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>고객 선택</th>
        <td>
          <select
            style="width: 100%;height:23px"
            v-model="selectedUserid"
            @change="doSelectUserInfo"
            ><option value="default"> ==고객을 선택하세요== </option>
            <option :value="user.id" :key="user.id" v-for="user in userList">{{
              user.name
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>고객명</th>
        <td>
          <input type="text" v-model="selectedUserInfo.name" />
        </td>
      </tr>
      <tr>
        <th>회사명</th>
        <td>
          <input type="text" v-model="selectedUserInfo.company" />
        </td>
      </tr>
      <tr>
        <th>이메일</th>
        <td>
          <input type="text" v-model="selectedUserInfo.email" />
        </td>
      </tr>
      <tr>
        <th>연락처</th>
        <td>
          <input type="text" v-model="selectedUserInfo.phone" />
        </td>
      </tr>
      <tr>
        <th>주소</th>
        <td>
          <input type="text" v-model="selectedUserInfo.address" />
        </td>
      </tr>
    </table>

    <p class="btn-area">
      <button @click="doUpdateUserInfo">저장</button>
    </p>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      selectedUserid: 'default',
      // selected: '',
      userList: [],
      selectedUserInfo: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.doSelect()
  },
  unmounted() {},
  methods: {
    async doSelect() {
      this.userList = await this.$get('/users')
    },
    async doSelectUserInfo() {
      // 고객을 선택하세요 선택 시 처리 추가
      this.selectedUserInfo = await this.$get('/users/' + this.selectedUserid)
    },
    async doUpdateUserInfo() {
      // console.log(this.selectedUserInfo)
      // const {name, company, email, phone, address} = this.selectedUserInfo
      // 위처럼 하면 name 처럼만 쓰면 됨
      await this.$put('/users/' + this.selectedUserid, {
        name: this.selectedUserInfo.name,
        email: this.selectedUserInfo.email,
        company: this.selectedUserInfo.company,
        phone: this.selectedUserInfo.phone,
        address: this.selectedUserInfo.address
      })
      console.log('success')
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
