<template>
  <div>
    <table class="eqp-table">
      <tr>
        <th>설비명</th>
        <td>{{ eqp.eqpId }}</td>
      </tr>
      <tr>
        <th>사업장코드</th>
        <td><input type="text" v-model="eqp.siteid" /></td>
      </tr>
      <tr>
        <th>라인</th>
        <td><input type="text" v-model="eqp.line" /></td>
      </tr>
      <tr>
        <th>공정</th>
        <td><input type="text" v-model="eqp.group" /></td>
      </tr>
      <tr>
        <th>유휴설비 여부</th>
        <td><input type="text" v-model="eqp.isActive" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToDetail">취소</button>
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
      eqpCheckId: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.eqpCheckId = this.$route.query.id
    this.getEqp()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToDetail() {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: this.eqpCheckId }
      })
    },
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
          const { id, isActive, group, eqpId, siteid, line } = this.eqp
          const r = await this.$put(`/facilities/${this.eqpCheckId}`, {
            id,
            isActive,
            group,
            eqpId,
            siteid,
            line
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async getEqp() {
      this.eqp = await this.$get(`/facilities/${this.eqpCheckId}`)
      console.log('get!')
    }
  }
}
</script>
<style scoped>
.eqp-table {
  width: 100%;
}
.eqp-table,
.eqp-table th,
.eqp-table td {
  border-collapse: collapse;
}
.eqp-table th,
.eqp-table td {
  border: 1px solid #222;
  padding: 10px;
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
