<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>Project ID</th>
        <td>{{ customer.id }}</td>
      </tr>
      <tr>
        <th>Project Name</th>
        <td><input type="text" v-model="customer.project" /></td>
      </tr>
      <tr>
        <th>Language</th>
        <td><input type="text" v-model="customer.lang" /></td>
      </tr>
      <tr>
        <th>순환참조 (CC) Score</th>
        <td><input type="text" v-model="customer.cc" /></td>
      </tr>
      <tr>
        <th>코드중복 (DC) Score</th>
        <td><input type="text" v-model="customer.dc" /></td>
      </tr>
      <tr>
        <th>다중참조 (MCD) Score</th>
        <td><input type="text" v-model="customer.mcd" /></td>
      </tr>
      <tr>
        <th>코드길이 (LOC) Score</th>
        <td><input type="text" v-model="customer.loc" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToDetail">이전</button>
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
      customerId: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.customerId = this.$route.query.id
    this.getCustomer()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToDetail() {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: this.customerId }
      })
    },
    async doSave() {
      this.$swal({
        //   팝업 문구 및 디자인 설정
        title: 'Are you sure to create?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, create it!'
      }).then(async result => {
        //   result가 컨펌이면
        if (result.isConfirmed) {
          // jason.db 에 아래 부분을 저장한다.

          const { project, lang, cc, dc, mcd, loc } = this.customer
          const r = await this.$put(`/samscore/${this.customerId}`, {
            project,
            lang,
            cc,
            dc,
            mcd,
            loc
          })
          console.log('result', r)
          this.$swal('Changed!', 'Data Changed.', 'success')
        }
      })
    },
    async getCustomer() {
      this.customer = await this.$api(`/samscore/${this.customerId}`)
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
