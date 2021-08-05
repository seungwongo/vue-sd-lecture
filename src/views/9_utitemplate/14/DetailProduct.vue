<template>
  <div>
    <table class="product-table">
      <tr>
        <th>id</th>
        <td v-show="!editMode">{{ product.id }}</td>
        <td v-show="editMode"><input v-model="product.id" /></td>
      </tr>
      <tr>
        <th>product id</th>
        <td v-show="!editMode">{{ product.productid }}</td>
        <td v-show="editMode"><input v-model="product.productid" /></td>
      </tr>
      <tr>
        <th>site</th>
        <td v-show="!editMode">{{ product.site }}</td>
        <td v-show="editMode"><input v-model="product.site" /></td>
      </tr>
      <tr>
        <th>owningsite</th>
        <td v-show="!editMode">{{ product.owningsite }}</td>
        <td v-show="editMode"><input v-model="product.owningsite" /></td>
      </tr>
      <tr>
        <th>cfproductid</th>
        <td v-show="!editMode">{{ product.cfproductid }}</td>
        <td v-show="editMode"><input v-model="product.cfproductid" /></td>
      </tr>
      <tr>
        <th>description</th>
        <td v-show="!editMode">{{ product.description }}</td>
        <td v-show="editMode"><input v-model="product.description" /></td>
      </tr>
    </table>

    <button @click="viewList">목록</button>
    <button
      @click="changeEditMode"
      :disabled="editMode"
      v-show="mode !== 'create'"
    >
      수정
    </button>
    <button @click="save" :disabled="!editMode">저장</button>
    <button
      @click="abandonChange"
      :disabled="!editMode"
      v-show="mode !== 'create'"
    >
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
      mode: '',
      id: '',
      editMode: false,
      product: {
        id: '',
        productid: '',
        site: '',
        owningsite: '',
        cfproductid: '',
        description: ''
      },
      productOrigin: {
        id: '',
        productid: '',
        site: '',
        owningsite: '',
        cfproductid: '',
        description: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.init()
  },
  unmounted() {},
  methods: {
    init() {
      this.id = this.$route.query.id
      this.mode = this.$route.query.mode
      if (this.mode === 'create') {
        this.editMode = true
      } else {
        this.getproduct()
      }
    },
    async getproduct() {
      this.product = await this.$get('/products/' + this.id)
      this.editMode = false
      // deep copy value to check modified
      this.productOrigin = JSON.parse(JSON.stringify(this.product))
    },
    async save() {
      if (this.mode === 'create') {
        this.id = this.product.id // for refresh
        await this.$post('/products', this.product)
      } else {
        await this.$put('/products/' + this.id, this.product)
      }

      // refresh
      this.getproduct()
    },
    viewList() {
      this.$router.push({
        path: '/uitemplate/listtodetailproduct'
      })
    },
    changeEditMode() {
      this.editMode = true
      this.productOrigin = JSON.parse(JSON.stringify(this.product))
    },
    abandonChange() {
      this.editMode = false
      // deep copy value to abandon change
      this.product = JSON.parse(JSON.stringify(this.productOrigin))
    }
  }
}
</script>

<style scoped>
.product-table {
  width: 100%;
}

.product-table,
.product-table th,
.product-table td {
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  border: 1px solid #222;
  padding: 10px;
}

.product-table th {
  text-align: right;
}

.product-table td input {
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
