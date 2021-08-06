<template>
  <div v-if="viewFilter == 'select'">
    <table class="customer-table">
      <tr>
        <th>EQPID</th>
        <td>{{ list.eqpid }}</td>
      </tr>
      <tr>
        <th>Site</th>
        <td>{{ list.siteid }}</td>
      </tr>
      <tr>
        <th>Area</th>
        <td>{{ list.areaid }}</td>
      </tr>
      <tr>
        <th>Room</th>
        <td>{{ list.roomid }}</td>
      </tr>
      <tr>
        <th>효율</th>
        <td>{{ list.eff }}</td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToList">목록</button>
      <button @click="ChangeViewSelect">수정</button>
    </div>
  </div>
  <div v-else>
    <table class="customer-table">
      <tr>
        <th>EQPID</th>
        <td>{{ list.eqpid }}</td>
      </tr>
      <tr>
        <th>Site</th>
        <td><input type="text" v-model="list.siteid" /></td>
      </tr>
      <tr>
        <th>Area</th>
        <td><input type="text" v-model="list.areaid" /></td>
      </tr>
      <tr>
        <th>Room</th>
        <td><input type="text" v-model="list.roomid" /></td>
      </tr>
      <tr>
        <th>효율</th>
        <td><input type="text" v-model.number="list.eff" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="ChangeViewSelect">취소</button>
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
      equipment: {},
      eqpid: '',
      list: {},
      viewFilter: 'select'
    }
  },
  setup() {},
  created() {
    this.eqpid = this.$route.query.id
    this.eqpinfo()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToList() {
      this.$router.push({ path: '/ui/listtodetail3' })
    },
    ChangeViewSelect() {
      if (this.viewFilter === 'select') {
        this.viewFilter = 'edit'
      } else this.viewFilter = 'select'

      console.log(this.viewFilter)
    },
    async eqpinfo() {
      this.equipment = await this.$get(`/eqp?eqpid=${this.eqpid}`)
      this.list = this.equipment[0]
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
          const { siteid, areaid, roomid, eff } = this.list
          const r = await this.$put(`/eqp/${this.list.id}`, {
            siteid,
            areaid,
            roomid,
            eff
          })
          console.log(this.eff)
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
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
.btn-area {
  text-align: center;
  margin-top: 10px;
}
.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
