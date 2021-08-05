<template>
  <div class="container">
    <h1>시스템 사용자 권한 Update</h1>
    <table class="customer-table">
      <tr>
        <th>User 선택</th>
        <td>
          <select
            v-model="authorityId"
            @change="changeUser"
            style="width:100%;"
          >
            <option value="">==사용자를 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.userName
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>사용지명</th>
        <td>
          <input
            type="text"
            v-model="authorityList.userName"
            :disabled="authorityList.userName"
          />
        </td>
      </tr>
      <tr>
        <th>부서명</th>
        <td>
          <input
            type="text"
            v-model="authorityList.userPart"
            :disabled="authorityList.userPart"
          />
        </td>
      </tr>
      <tr>
        <th>사번</th>
        <td>
          <input
            type="text"
            v-model="authorityList.userNumber"
            :disabled="authorityList.userNumber"
          />
        </td>
      </tr>
      <tr>
        <th>현재 권한</th>
        <td>
          <input
            type="text"
            v-model="authorityList.userAuthority"
            :disabled="authorityList.userAuthority"
          />
        </td>
      </tr>
      <tr>
        <th>변경 권한</th>
        <td>
          <select
            v-model="authorityList.userAuthority"
            @change="changeAuthority"
            style="width:100%;"
          >
            <option value=""></option>
            <option
              :value="kind.t"
              :key="kind.v"
              v-for="kind in authorityKind"
              >{{ kind.t }}</option
            >
          </select>
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
      items: [],
      authorityList: {},
      authorityId: '',
      authorityKind: [
        { t: 'General', v: '01' },
        { t: 'Manager', v: '02' },
        { t: 'Sub-Manager', v: '03' }
      ],
      authorityChange: ''
    }
  },
  setup() {},
  created() {
    this.getuserAuthority()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      this.$swal({
        title: '사용자의 권한을 변경하시겠습니까?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 변경하겠습니다',
        cancelButtonText: '아니요'
      }).then(async result => {
        if (result.isConfirmed) {
          const {
            userName,
            userPart,
            userNumber,
            userAuthority
          } = this.authorityList
          const r = await this.$put(`/Authority/${this.authorityId}`, {
            userName,
            userPart,
            userNumber,
            userAuthority
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeUser() {
      if (this.authorityId === '') {
        this.authorityList = {
          userPart: '',
          userNumber: '',
          userAuthority: ''
        }
        return
      }
      this.authorityList = await this.$get(`/Authority/${this.authorityId}`)
    },
    async changeAuthority() {
      console.log('변경되었습니다')
    },
    async getuserAuthority() {
      this.items = await this.$get('/Authority')
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
