<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>설비 정보</th>
        <td>
          <select
            v-model="productid"
            @change="changeProduct"
            style="width:100%;"
          >
            <option value="">==설비를 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.id
            }}</option>
          </select>
        </td>
      </tr>
    </table>

    <br />
    <table class="customer-table">
      <thead>
        <tr>
          <th scope="col">구분</th>
          <th>ORIGINAL</th>
          <th>CURRENT</th>
        </tr>
      </thead>
      <tr>
        <th>공정명</th>
        <td>
          <input type="text" v-model="product.stepid" />
        </td>
        <td><input type="text" v-model="product.stepid_new" /></td>
      </tr>
      <tr>
        <th>기준설비명</th>
        <td><input type="text" v-model="product.refeqpid" /></td>
        <td><input type="text" v-model="product.refeqpid_new" /></td>
      </tr>
      <tr>
        <th>비교설비명</th>
        <td><input type="text" v-model="product.compeqpid" /></td>
        <td><input type="text" v-model="product.compeqpid_new" /></td>
      </tr>
      <tr>
        <th>모듈명</th>
        <td><input type="text" v-model="product.moduleid" /></td>
        <td><input type="text" v-model="product.moduleid_new" /></td>
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
      product: {},
      productid: ''
    }
  },
  setup() {},
  created() {
    this.getProduct()
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
            stepid,
            refeqpid,
            compeqpid,
            moduleid
            //     stepid_new,
            //     refeqpid_new,
            //     compeqpid_new,
            //    moduleid_new
          } = this.product

          console.log(this.productid)

          const r = await this.$put(`/product/${this.productid}`, {
            stepid,
            refeqpid,
            compeqpid,
            moduleid
            //   stepid_new,
            //   refeqpid_new,
            //    compeqpid_new,
            //    moduleid_new
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeProduct() {
      if (this.productid === '') {
        this.product = {
          stepid: '',
          refeqpid: '',
          compeqpid: '',
          moduleid: ''
          //   stepid_new: '',
          //    refeqpid_new: '',
          //   compeqpid_new: '',
          //  moduleid_new: ''
        }
        return
      }
      this.product = await this.$get(`/product/${this.productid}`)
    },
    async getProduct() {
      this.items = await this.$get('/product')
    }
  }
}
</script>
<style scoped>
.customer-table {
  width: 100%;
}
.customer-table,
.customer-table th {
}
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
