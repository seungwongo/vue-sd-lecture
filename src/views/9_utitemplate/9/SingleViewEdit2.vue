<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>생산라인 선택</th>
        <td>
          <select v-model="lineId" @change="changeLine">
            <option value="">==고객을 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">
              {{ item.Desc }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>라인</th>
        <td><input type="text" v-model="line.line" /></td>
      </tr>
      <tr>
        <th>공정</th>
        <td><input type="text" v-model="line.process" /></td>
      </tr>
      <tr>
        <th>지역</th>
        <td><input type="text" v-model="line.area" /></td>
      </tr>
      <tr>
        <th>담당자</th>
        <td>
          <select v-if="line.charge" v-model="line.charge">
            <option
              :value="charge"
              :key="i"
              v-for="(charge, i) in chargePersons"
            >
              {{ charge }}
            </option>
          </select>
          <input v-else type="text" v-model="line.charge" />
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
      line: {},
      lineId: ''
    }
  },
  computed: {
    chargePersons() {
      return this.items.map(item => {
        return item.charge
        // return {
        //   id: item.id,
        //   charge: item.charge
        // }
      })
    }
  },
  setup() {},
  created() {
    this.getLine()
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
          const { id, line, process, area, charge } = this.line
          if (id !== this.chargeId) {
            console.log('here')
          }
          const r = await this.$put(`/lines13/${this.lineId}`, {
            line,
            process,
            area,
            charge
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeLine() {
      if (this.lineId === '') {
        this.line = {
          line: '',
          process: '',
          area: '',
          charge: ''
        }
        return
      }
      this.line = await this.$get(`/lines13/${this.lineId}`)
    },
    async getLine() {
      this.items = await this.$get('/lines13')
      console.log(this.items)
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

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

input,
select {
  width: 99%;
  font-size: 12px;
}
</style>
