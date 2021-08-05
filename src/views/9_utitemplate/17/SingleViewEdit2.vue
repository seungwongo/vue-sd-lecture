<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>설비 선택</th>
        <td>
          <select v-model="itemId" @change="changeEqp" style="width:100%;">
            <option value="">==설비를 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.eqpId
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>유휴설비 여부</th>
        <td><input type="text" v-model="eqpInfo.isActive" /></td>
      </tr>
      <tr>
        <th>설비INDEX</th>
        <td><input type="text" v-model="eqpInfo.id" /></td>
      </tr>
      <tr>
        <th>공정명</th>
        <td><input type="text" v-model="eqpInfo.group" /></td>
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
      // customer: {},
      eqpInfo: {},
      itemId: ''
    }
  },
  setup() {},
  created() {
    this.getEqp()
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
          const r = await this.$put(`/facilities/${this.itemId}`, {
            id: this.eqpInfo.id,
            isActive: this.eqpInfo.isActive,
            group: this.eqpInfo.group
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeEqp() {
      if (this.itemId === '') {
        this.eqpInfo = {
          id: '',
          isActive: '',
          group: ''
        }
        return
      }
      this.eqpInfo = await this.$get(`/facilities/${this.itemId}`)
    },
    async getEqp() {
      this.items = await this.$get('/facilities')
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
