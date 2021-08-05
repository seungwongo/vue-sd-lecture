<template>
  <div>
    <button class="btn-area" v-show="!modifyDisable" @click="cancel">
      취소
    </button>
    <button class="btn-area" @click="modify">{{ btnName }}</button>
    <table class="customer-table">
      <tbody>
        <th>ID</th>
        <td>
          <input type="text" disabled v-model="queryid" />
        </td>
        <tr>
          <th>Code명</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="codeInfo.code"
            />
          </td>
        </tr>
        <tr>
          <th>라인명</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="codeInfo.line"
            />
          </td>
        </tr>
        <tr>
          <th>구분</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="codeInfo.gubun"
            />
          </td>
        </tr>
        <tr>
          <th>설명</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="codeInfo.description"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      queryid: '',
      codeInfoOrigin: {},
      codeInfo: {},
      modifyDisable: true
    }
  },
  computed: {
    btnName() {
      if (this.modifyDisable) return '수정'
      else return '저장'
    }
  },
  watch: {
    id(currentValue, oldValue) {
      this.queryid = currentValue
      this.getCodeInfo()
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.queryid = this.id
  },
  unmounted() {},
  methods: {
    async getCodeInfo() {
      this.codeInfo = await this.$get(`/codes/${this.queryid}`)

      //원본을 deep copy로 보관
      this.codeInfoOrigin = JSON.parse(JSON.stringify(this.codeInfo))
    },
    modify() {
      if (this.modifyDisable) {
        this.modifyDisable = false
      } else {
        //수정 이후 저장단계
        this.doSave()
        this.modifyDisable = true
      }
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
          const { code, line, gubun, description } = this.codeInfo
          const r = await this.$put(`/codes/${this.queryid}`, {
            code,
            line,
            gubun,
            description
          })
          console.log('result', r)
          this.$swal('Updated!', 'Code has been updated.', 'success')
        }
      })
    },
    cancel() {
      this.modifyDisable = true
      //값을 변경이후 취소할수도 있으니 원본을 반영
      this.codeInfo = JSON.parse(JSON.stringify(this.codeInfoOrigin))
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
  margin-right: 10px;
  float: right;
}

.btn-area button {
  padding: 5px;
  margin-right: 5px;
}

select {
  width: 100%;
}
</style>
