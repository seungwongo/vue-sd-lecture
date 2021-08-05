<template>
  <div>
    <h1>사용자 정보 수정</h1>
    <table class="data-grid">
      <tr>
        <td>이름 검색</td>
        <td>
          <input
            :readonly="editControl == 1"
            type="text"
            v-model="searchEdit"
            @keyup.enter="doSearch"
          />
        </td>
      </tr>
      <tr>
        <td>이름</td>
        <td>
          <select v-model="resultId" @change="changeUserName" ref="combo">
            <option
              :value="resultUser.id"
              :key="resultUser.id"
              v-for="resultUser in resultUserList"
            >
              {{ resultUser.name }}</option
            >
          </select>
        </td>
      </tr>
      <tr></tr>
      <tr>
        <td>회사명</td>
        <td>
          <input type="text" v-model="userData.company" />
        </td>
      </tr>
      <tr>
        <td>이메일</td>
        <td><input type="text" v-model="userData.email" /></td>
      </tr>
      <tr>
        <td>연락처</td>
        <td><input type="text" v-model="userData.phone" /></td>
      </tr>
      <tr>
        <td>주소</td>
        <td><input type="text" v-model="userData.address" /></td>
      </tr>
    </table>

    <br />
    <button class="registerbtn" @click="doEdit">
      수정
    </button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      userData: {},
      resultId: '',
      editControl: 0,
      searchEdit: '',
      resultUserList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doSearch() {
      if (this.searchEdit === '') {
        this.$swal('Input User Name')
        return
      }
      this.resultUserList = await this.$get(`/users?name=${this.searchEdit}`)
      if (this.resultUserList.length === 0) {
        this.$swal('There is no User Name, Please Register yout information  ')
        return
      }
      this.editControl = 1
      this.$refs.combo.focus()
    },
    async changeUserName() {
      if (this.resultId === '') {
        return
      }
      this.userData = await this.$get(`/users/${this.resultId}`)
    },
    async doEdit() {
      if (this.resultId === '') {
        return
      }
      this.$swal({
        title: 'Are you sure to change?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change it!'
      }).then(async result => {
        if (result.isConfirmed) {
          // const r = await this.$put(`/glasses?glassid=${this.editGlass}`, {
          await this.$put(`/users/${this.userData.id}`, {
            id: this.userData.id,
            company: this.userData.company,
            email: this.userData.email,
            phone: this.userData.phone,
            address: this.userData.address,
            name: this.userData.name
          })
        } else {
          return
        }
        // console.log(r)
        this.$swal('Changed!', 'New user has been Changed.', 'success')
        this.userData = {}
        this.searchEdit = ''
        this.resultId = ''
        this.editControl = 0
        this.resultUserList = []
      })
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
  text-align: left;
}
/* Full-width input fields */
input[type='text'],
input[type='password'],
select {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type='text']:focus,
input[type='password']:focus {
  background-color: #ddd;
  outline: none;
}
/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
/* Set a style for the submit button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.registerbtn:hover {
  opacity: 1;
}
/* Add a blue text color to links */
a {
  color: dodgerblue;
}
/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
.data-grid {
  width: 100%;
}
.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}
.data-grid th,
.data-grid td {
  border: 1px solid #222;
  padding: 1px;
}
.data-grid th {
  cursor: pointer;
}
</style>
