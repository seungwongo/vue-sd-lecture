<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>프로젝트 선택</th>
        <td>
          <select
            v-model="samScore"
            @change="changeSamscore"
            style="width:100%;"
          >
            <option value="">==프로젝트를 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.project
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>프로젝트명</th>
        <td><input type="text" v-model="customer.project" /></td>
      </tr>
      <tr>
        <th>개발 언어</th>
        <td><input type="text" v-model="customer.lang" /></td>
      </tr>
      <tr>
        <th>순환 참조</th>
        <td><input type="text" v-model="customer.cc" /></td>
      </tr>
      <tr>
        <th>코드 중복</th>
        <td><input type="text" v-model="customer.dc" /></td>
      </tr>
      <tr>
        <th>다중 참조</th>
        <td><input type="text" v-model="customer.mcd" /></td>
      </tr>
      <tr>
        <th>코드 라인</th>
        <td><input type="text" v-model="customer.loc" /></td>
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
      customer: {},
      samScore: ''
    }
  },
  setup() {},
  created() {
    this.getCustomer()
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
          const { project, lang, cc, dc, mcd, loc } = this.customer
          const r = await this.$put(`/samscore/${this.samScore}`, {
            project,
            lang,
            cc,
            dc,
            mcd,
            loc
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeSamscore() {
      if (this.samScore === '') {
        this.customer = {
          project: '',
          lang: '',
          cc: '',
          dc: '',
          mcd: '',
          loc: ''
        }
        return
      }
      this.customer = await this.$get(`/samscore/${this.samScore}`)
    },
    async getCustomer() {
      this.items = await this.$get('/samscore')
    }
  }
}
</script>
<style scoped>
/* 표 스타일 설정, scoped 이므로 해당 Vue 에만 적용된다. */
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
