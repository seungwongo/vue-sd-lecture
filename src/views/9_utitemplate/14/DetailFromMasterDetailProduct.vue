<template>
  <div v-if="product != null">
    <table class="customer-table">
      <tr>
        <th>id</th>
        <td v-show="!editMode">{{ product.id }}</td>
        <td v-show="editMode"><input v-model="detailproduct.id" /></td>
      </tr>
      <tr>
        <th>product id</th>
        <td v-show="!editMode">{{ product.productid }}</td>
        <td v-show="editMode"><input v-model="detailproduct.productid" /></td>
      </tr>
      <tr>
        <th>site</th>
        <td v-show="!editMode">{{ product.site }}</td>
        <td v-show="editMode"><input v-model="detailproduct.site" /></td>
      </tr>
      <tr>
        <th>owning site</th>
        <td v-show="!editMode">{{ product.owningsite }}</td>
        <td v-show="editMode"><input v-model="detailproduct.owningsite" /></td>
      </tr>
      <tr>
        <th>matching productid</th>
        <td v-show="!editMode">{{ product.cfproductid }}</td>
        <td v-show="editMode"><input v-model="detailproduct.cfproductid" /></td>
      </tr>
      <tr>
        <th>description</th>
        <td v-show="!editMode">{{ product.description }}</td>
        <td v-show="editMode"><input v-model="detailproduct.description" /></td>
      </tr>
    </table>

    <button @click="changeEditMode" :disabled="editMode">수정</button>
    <button @click="abandonChange" :disabled="!editMode">취소</button>
    <button @click="save" :disabled="!editMode">저장</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    product: {
      type: Object,
      default: function() {
        return null
      }
    }
  },

  data() {
    return {
      editMode: false,
      detailproduct: {
        id: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  watch: {
    product(currentValue) {
      // when select from parent, makes change product, then reset edit mode
      if (currentValue != null) {
        this.editMode = currentValue.id === ''
        this.detailproduct = JSON.parse(JSON.stringify(this.product))
      }
      return currentValue
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.init()
  },
  unmounted() {},
  methods: {
    init() {},
    async save() {
      this.$emit('save', this.detailproduct)
      this.editMode = false
    },
    changeEditMode() {
      this.editMode = true
    },
    abandonChange() {
      if (this.product.id === '') {
        this.$emit('hide')
      } else {
        this.editMode = false
      }
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
