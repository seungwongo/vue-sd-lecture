<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>부품 선택</th>
        <td>
          <select v-model="partId" @change="changePart" style="width:100%;">
            <option value="">==부품을 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.partName
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>부품명</th>
        <td><input type="text" v-model="part.partName" /></td>
      </tr>
      <tr>
        <th>가격</th>
        <td><input type="text" v-model="part.price" /></td>
      </tr>
      <tr>
        <th>난이도</th>
        <td><input type="text" v-model="part.difficulty" /></td>
      </tr>
      <tr>
        <th>현재수량</th>
        <td><input type="text" v-model="part.stock" /></td>
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
      part: {},
      partId: ''
    }
  },
  setup() {},
  created() {
    this.getPartList()
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
          const { partId, partName, price, difficulty, stock } = this.part
          const r = await this.$put(`/partList/${this.partId}`, {
            partId,
            partName,
            price,
            difficulty,
            stock
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changePart() {
      if (this.partId === '') {
        this.part = {
          partId: '',
          partName: '',
          price: '',
          difficulty: '',
          stock: ''
        }
        return
      }
      //this.part = await this.$get('/partlist?partId=' + this.partId) //무조건 배열형태로 리턴
      this.part = await this.$get(`/partList/${this.partId}`)
    },
    async getPartList() {
      this.items = await this.$get('/partList')
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
</style>
