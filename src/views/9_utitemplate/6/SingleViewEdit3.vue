<template>
  <div class="container">
    <table class="process-table">
      <tr>
        <th>Process 선택</th>
        <td>
          <select
            v-model="processId"
            @change="changeProcess"
            style="width:100%;"
          >
            <option value="">==process를 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.processName
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>process name</th>
        <td>
          <input
            id="1"
            type="text"
            :disabled="true"
            v-model="process.processName"
          />
        </td>
      </tr>
      <tr>
        <th>시작 시간</th>
        <td>
          <input type="text" :disabled="true" v-model="process.startTime" />
        </td>
      </tr>
      <tr>
        <th>종료 시간</th>
        <td>
          <input type="text" :disabled="true" v-model="process.endTime" />
        </td>
      </tr>
      <tr>
        <th>담당자</th>
        <td>
          <input type="text" :disabled="bEditAble" v-model="process.owner" />
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
      process: {},
      processId: '',
      bEditAble: true
    }
  },
  setup() {},
  created() {
    this.getProcess()
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
          const { processName, startTime, endTime, owner } = this.process
          const r = await this.$put(`/Process/${this.processId}`, {
            processName,
            startTime,
            endTime,
            owner
          })
          console.log('result', r)

          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeProcess() {
      if (this.processId === '') {
        this.process = {
          processName: '',
          startTime: '',
          endTime: '',
          owner: ''
        }
        return
      }
      this.process = await this.$get(`/Process/${this.processId}`)
      this.bEditAble = false
    },
    async getProcess() {
      this.items = await this.$get('/Process')
    }
  }
}
</script>
<style scoped>
.process-table {
  width: 100%;
}

.process-table,
.process-table th,
.process-table td {
  border-collapse: collapse;
}

.process-table th,
.process-table td {
  border: 1px solid #222;
  padding: 10px;
}

.process-table th {
  text-align: right;
}

.process-table td input {
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
