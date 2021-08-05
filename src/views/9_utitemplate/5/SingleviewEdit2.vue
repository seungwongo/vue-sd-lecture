<template>
  <div class="container">
    <h1>시스템 담당자 정보 Update</h1>
    <table class="customer-table">
      <tr>
        <th>시스템 선택</th>
        <td>
          <select
            v-model="systemId"
            @change="changeManager"
            style="width:100%;"
          >
            <option value="">==시스템을 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.systemName
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>담당자명</th>
        <td><input type="text" v-model="managerList.manager" /></td>
      </tr>
      <tr>
        <th>담당자 연락처</th>
        <td><input type="text" v-model="managerList.managerPhone" /></td>
      </tr>
      <tr>
        <th>담당자 이메일</th>
        <td><input type="text" v-model="managerList.managerEmail" /></td>
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
      managerList: {},
      systemId: ''
    }
  },
  setup() {},
  created() {
    this.getManager()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      this.$swal({
        title: '담당자 정보를 수정하시겠습니까?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 수정하겠습니다',
        cancelButtonText: '아니요'
      }).then(async result => {
        if (result.isConfirmed) {
          const { manager, managerPhone, managerEmail } = this.managerList
          const r = await this.$put(`/systems/${this.systemId}`, {
            manager,
            managerPhone,
            managerEmail
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeManager() {
      if (this.systemId === '') {
        this.managerList = {
          manager: '',
          managerPhone: '',
          managerEmail: ''
        }
        return
      }
      this.managerList = await this.$get(`/systems/${this.systemId}`)
    },
    async getManager() {
      this.items = await this.$get('/systems')
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
