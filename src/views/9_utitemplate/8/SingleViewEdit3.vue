<template>
  <div class="container">
    <table class="system-user-info-table">
      <tr>
        <th>시스템</th>
        <td>
          <select v-model="systemID" @change="updateUse" style="width:100%;">
            <option value="">==시스템을 선택하세요==</option>
            <option :value="info.id" :key="info.id" v-for="info in infos">{{
              info.system
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>이름</th>
        <!-- 10. 돌리면서 오브젝트로 선언된 커스터머에 데이터를 각각 넣어 준다. -->
        <td><input type="text" v-model="systemuserinfo.name" /></td>
      </tr>
      <tr>
        <th>KnoxID</th>
        <td><input type="text" v-model="systemuserinfo.knoxid" /></td>
      </tr>
      <tr>
        <th>사번</th>
        <td><input type="text" v-model="systemuserinfo.empno" /></td>
      </tr>
      <tr>
        <th>SingleKey</th>
        <td><input type="text" v-model="systemuserinfo.singlekey" /></td>
      </tr>
      <tr>
        <th>부서명</th>
        <td><input type="text" v-model="systemuserinfo.dept" /></td>
      </tr>
      <tr>
        <th>시스템</th>
        <td><input type="text" v-model="systemuserinfo.system" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <!-- <button v-show="isShow" @click="doSave">저장</button> -->
      <button v-show="empty" @click="doSave">저장</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      infos: [],
      systemuserinfo: {}, // 9. customer는 오브젝트 형식으로 선언되어 있다.
      systemID: ''
    }
  },
  setup() {},
  created() {
    this.getSysteminfo() // 1. 처음 실행할 때 함수 호출
    this.isShow = false
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
          const { name, empno, singlekey, dept, knoxid } = this.systemuserinfo
          const r = await this.$put(`/systemusersinfo/${this.systemID}`, {
            // 4. put으로 현재값, 바꿀 값(this.customerId)
            name, // = name : this.customer.name,     //const { name, company, email, phone, address } = this.customer
            empno, // = company : this.customer.company,
            singlekey, // = email : this.customer.email,
            dept, // = phone : this.customer.phone,
            knoxid // = address : this.customer.address
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async updateUse() {
      if (this.systemID === '') {
        // 6. 값이 비어있는지 확인
        this.systemuserinfo = {
          // 7. 비어있다면 입력되어있던 값 clear 시켜줌
          name: '',
          empno: '',
          singlekey: '',
          dept: '',
          knoxid: ''
        }
        return // if 로 해서 customer 클리어 해주고 리턴하고 끝  밑으로 안내려 감
      }
      this.systemuserinfo = await this.$get(`/systemusersinfo/${this.systemID}`)
      this.empty = true
    },
    async getSysteminfo() {
      this.infos = await this.$get('/systemusersinfo')
    }
  }
}
</script>
<style scoped>
.system-user-info-table {
  width: 100%;
}
.system-user-info-table,
.system-user-info-table- th,
.system-user-info-table td {
  border-collapse: collapse;
}
.system-user-info-table th,
.system-user-info-table td {
  border: 1px solid #222;
  padding: 10px;
}
.system-user-info-table th {
  text-align: right;
}
.system-user-info-table td input {
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
