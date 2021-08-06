<template>
  <div>
    <table class="eqp-table">
      <tr>
        <th>설비아이디</th>
        <td><input type="text" v-model="eachItem.id" /></td>
      </tr>
      <tr>
        <th>설비명</th>
        <td><input type="text" v-model="eachItem.eqpName" /></td>
      </tr>
      <tr>
        <th>컨트롤러</th>
        <td><input type="text" v-model="eachItem.controller" /></td>
      </tr>
      <tr>
        <th>모터</th>
        <td><input type="text" v-model="eachItem.motor" /></td>
      </tr>
      <tr>
        <th>마감재</th>
        <td><input type="text" v-model="eachItem.frame" /></td>
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
      eachItem: {},
      eachId: '',
      searchEqpName: '',
      equipment: {
        eqpName: '',
        controller: '',
        motor: '',
        frame: ''
      }
    }
  },
  setup() {},
  created() {
    this.eachId = this.$route.query.id
    this.getItem()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getItem() {
      this.eachItem = await this.$get(`/eqpList/${this.eachId}`)
    },
    goToDetail() {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: this.eachId }
      })
    },
    doSave() {
      this.$swal({
        title: 'Are you sure to Update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Update it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const { eqpName, controller, motor, frame } = this.eachItem
          const r = await this.$put(`/eqplist/${this.eachId}`, {
            eqpName,
            controller,
            motor,
            frame
          })
          console.log(r)
          this.$swal('Created!', 'New user has been created.', 'success')

          console.log(this.eachId)

          this.$router.push({
            path: '/uitemplate/detail3',
            query: { id: this.eachId }
          })
        }
      })
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
  border: 1px solid black;
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
