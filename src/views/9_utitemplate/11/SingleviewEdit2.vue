<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>프로젝트 선택</th>
        <td>
          <select
            v-model="eq_items"
            @change="searchPriority"
            style="width:100%;"
          >
            <option value=""
              >==기능개발 우선순위를 확인할 프로젝트를 선택하세요==</option
            >
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
        <th>개발 1순위</th>
        <td><input type="text" v-model="customer.function1" /></td>
      </tr>
      <tr>
        <th>순환 2순위</th>
        <td><input type="text" v-model="customer.function2" /></td>
      </tr>
      <tr>
        <th>코드 3순위</th>
        <td><input type="text" v-model="customer.function3" /></td>
      </tr>
      <tr>
        <th>다중 4순위</th>
        <td><input type="text" v-model="customer.function4" /></td>
      </tr>
      <tr>
        <th>코드 5순위</th>
        <td><input type="text" v-model="customer.function5" /></td>
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
      eq_items: ''
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
          const {
            project,
            function1,
            function2,
            function3,
            function4,
            function5
          } = this.customer
          const r = await this.$put(
            `/equip_function_priority/${this.eq_items}`,
            {
              project,
              function1,
              function2,
              function3,
              function4,
              function5
            }
          )
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async searchPriority() {
      if (this.eq_items === '') {
        this.customer = {
          project: '',
          function1: '',
          function2: '',
          function3: '',
          function4: '',
          function5: ''
        }
        return
      }
      this.customer = await this.$get(
        `/equip_function_priority/${this.eq_items}`
      )
    },
    async getCustomer() {
      this.items = await this.$get('/equip_function_priority')
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
