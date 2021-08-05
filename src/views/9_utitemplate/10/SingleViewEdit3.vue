<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>설비선택</th>
        <td>
          <select v-model="eqpId" @change="changeEqp" style="width:100%;">
            <option value="">==설비를 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">
              {{ item.eqpName }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>설비명</th>
        <td><input type="text" v-model="eqp.eqpName" /></td>
      </tr>
      <tr>
        <th>구성품</th>
        <td>
          <input type="text" v-model="eqp.parts" />
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
      eqp: {},
      eqpId: ''
    }
  },
  setup() {},
  created() {
    this.getEqpList()
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
          const { eqpId, eqpName, parts } = this.eqp
          const r = await this.$put(`/eqpList/${this.eqpId}`, {
            eqpId,
            eqpName,
            parts
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeEqp() {
      if (this.eqpId === '') {
        this.eqp = {
          eqpName: '',
          parts: []
        }
        return
      }
      this.eqp = await this.$get(`/eqpList/${this.eqpId}`)
    },
    async getEqpList() {
      this.items = await this.$get('/eqpList')
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
