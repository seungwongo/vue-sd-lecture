<template>
  <div class="container">
    <p><b>[ Workplace Menu ]</b></p>
    <table class="customer-table">
      <tr>
        <th>Menu</th>
        <td>
          <select v-model="itemId" @change="changeSystem" style="width:100%;">
            <option value="">==메뉴를 선택하세요==</option>
            <option :value="h.id" :key="h.id" v-for="h in items">{{
              h.menu
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>접속경로</th>
        <td><input type="text" v-model="systemList.menuPath" /></td>
      </tr>
      <tr>
        <th>Menu Group ID</th>
        <td><input type="text" v-model="systemList.menuGroup" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button :disabled="systemList.menuGroup == ''" @click="doSave">
        저장
      </button>
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
      systemList: {},
      itemId: ''
    }
  },
  setup() {},
  created() {
    this.getSystem()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      if (this.itemId === '') alert('메뉴를 선택하여 주세요')
      else {
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
            const r = await this.$put(`/system/${this.itemId}`, {
              id: this.systemList.id,
              menu: this.systemList.menu,
              menuPath: this.systemList.menuPath,
              menuGroup: this.systemList.menuGroup
            })
            console.log('result', r)
            this.$swal('Updated!', 'User has been updated.', 'success')
          }
        })
      }
    },
    async changeSystem() {
      if (this.itemId === '') {
        this.systemList = {
          id: '',
          menuPath: '',
          menu: '',
          menuGroup: ''
        }
        return
      }
      this.systemList = await this.$get(`/system/${this.itemId}`)
    },
    async getSystem() {
      this.items = await this.$get('/system')
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
