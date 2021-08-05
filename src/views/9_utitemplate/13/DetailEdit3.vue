<template>
  <div>
    <table class="customer-table">
      <tbody>
        <th>Code ID</th>
        <td>
          <input type="text" disabled v-model="queryid" />
        </td>
        <tr>
          <th>Code</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="CodeInfo.code"
            />
          </td>
        </tr>
        <tr>
          <th>Line</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="CodeInfo.line"
            />
          </td>
        </tr>
        <tr>
          <th>Gubun</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="CodeInfo.gubun"
            />
          </td>
        </tr>
        <tr>
          <th>Description</th>
          <td>
            <input
              type="text"
              :disabled="modifyDisable"
              v-model="CodeInfo.description"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn-area" v-show="modifyDisable" @click="gotoList">
      목록
    </button>
    <button class="btn-area" @click="modify">{{ btnName }}</button>
    <button class="btn-area" v-show="!modifyDisable" @click="cancel">
      취소
    </button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      queryid: '',
      CodeInfoOrigin: {},
      CodeInfo: {},
      modifyDisable: true
    }
  },
  computed: {
    btnName() {
      if (this.modifyDisable) return '수정'
      else return '저장'
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.queryid = this.$route.query.id
    this.getCodeInfo()
  },
  unmounted() {},
  methods: {
    async getCodeInfo() {
      this.CodeInfo = await this.$get(`/codes/${this.queryid}`)

      //원본을 deep copy로 보관
      this.CodeInfoOrigin = JSON.parse(JSON.stringify(this.CodeInfo))
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
          const { code, line, gubun, description } = this.CodeInfo
          const r = await this.$put(`/codes/${this.queryid}`, {
            code,
            line,
            gubun,
            description
          })
          console.log('result', r)
          this.$swal('Updated!', 'Code has been updated.', 'success')

          //변경된 정보를 다시 가져온다.
          this.getCodeInfo()
        }
      })
    },
    cancel() {
      this.modifyDisable = true
      //값을 변경이후 취소할수도 있으니 원본을 반영
      this.CodeInfo = JSON.parse(JSON.stringify(this.CodeInfoOrigin))
    },
    gotoList() {
      this.$router.push({ path: '/template/listtodetail3' })
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

select {
  width: 100%;
}
</style>
