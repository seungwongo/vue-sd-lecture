<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>Product선택</th>
        <td>
          SITE :
          <select v-model="curSite" @change="selectSite">
            <option value="ALL">ALL</option>
            <option v-for="site in sites" v-bind:key="site" :value="site"
              >{{ site }}
            </option>
          </select>
          OWNING SITE :
          <select v-model="curOwningSite" @change="selectOwningSite">
            <option value="ALL">ALL</option>
            <option
              v-for="owningSite in owningSites"
              v-bind:key="owningSite"
              :value="owningSite"
              >{{ owningSite }}
            </option>
          </select>
          PRODUCT :
          <select v-model="curProductId" @change="selectProduct">
            <option value="">==select a Productid==</option>
            <option
              v-for="product in filteredProducts"
              v-bind:key="product.id"
              :value="product.id"
              >{{ product.productid }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>PRODUCTID</th>
        <td>
          <input
            type="text"
            v-model="userProduct.productid"
            v-bind:disabled="isNotEditable"
          />
        </td>
      </tr>
      <tr>
        <th>SITE</th>
        <td>
          <input
            type="text"
            v-model="userProduct.site"
            v-bind:disabled="isNotEditable"
          />
        </td>
      </tr>
      <tr>
        <th>OWNINGSITE</th>
        <td>
          <input
            type="text"
            v-model="userProduct.owningsite"
            v-bind:disabled="isNotEditable"
          />
        </td>
      </tr>
      <tr>
        <th>COUPLING ID</th>
        <td>
          <input
            type="text"
            v-model="userProduct.cfproductid"
            v-bind:disabled="isNotEditable"
          />
        </td>
      </tr>
      <tr>
        <th>DESCRIPTION</th>
        <td>
          <input
            type="text"
            v-model="userProduct.description"
            v-bind:disabled="isNotEditable"
          />
        </td>
      </tr>
    </table>

    <br /><br />

    <button @click="makeEditable">edit</button>
    <button @click="modify" v-bind:disabled="isNotChanged">save</button>
    <button @click="makeIneditable">cancel</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  computed: {
    isNotEditable: function() {
      return !this.isEditable
    },
    isNotChanged: function() {
      return (
        this.productOrigin == null ||
        (this.userProduct.productid === this.productOrigin.productid &&
          this.userProduct.owningsite === this.productOrigin.owningsite &&
          this.userProduct.cfproductid === this.productOrigin.cfproductid &&
          this.userProduct.site === this.productOrigin.site &&
          this.userProduct.description === this.productOrigin.description)
      )
    }
  },
  data() {
    return {
      sites: [],
      owningSites: [],
      filteredProducts: [],
      curSite: 'ALL',
      curOwningSite: 'ALL',
      curProductId: '',
      productOrigin: {},
      productList: {},
      userProduct: {},
      isEditable: false,
      nullProd: {
        productid: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getProductList()
  },
  unmounted() {},
  methods: {
    makeEditable() {
      this.isEditable = true
    },
    makeIneditable() {
      // discard edited thing
      this.userProduct = JSON.parse(JSON.stringify(this.productOrigin))
      this.isEditable = false
    },
    async getProductList() {
      this.productList = await this.$get('/products')

      this.filteredProducts = this.productList.reduce((acc, cur) => {
        acc.push(cur)
        return acc
      }, [])

      this.sites = Array.from(
        this.productList.reduce((acc, cur) => {
          acc.add(cur.site)
          return acc
        }, new Set())
      ).sort()

      console.log(this.sites)
    },
    isValid(val) {
      return this.curSite && this.curSite !== 'ALL'
    },
    selectSite() {
      this.owningSites = Array.from(
        this.productList.reduce((acc, cur) => {
          if (!this.isValid(this.curSite) || cur.site === this.curSite) {
            acc.add(cur.owningsite)
          }

          return acc
        }, new Set())
      ).sort()
      console.log(this.owningSites)
    },
    selectOwningSite() {
      this.filteredProducts = this.productList.reduce((acc, cur) => {
        if (
          (!this.isValid(this.curSite) || cur.site === this.curSite) &&
          (!this.isValid(this.curOwningSite) ||
            cur.owningsite === this.curOwningSite)
        ) {
          acc.push(cur)
        }
        return acc
      }, [])
    },
    async selectProduct() {
      if (!this.curProductId) {
        this.userProduct = JSON.parse(JSON.stringify(this.nullProd))
      } else {
        this.userProduct = this.productList
          .filter(product => product.id === this.curProductId)
          .pop()
      }
      // deep copy value to check modified
      this.productOrigin = JSON.parse(JSON.stringify(this.userProduct))
      this.isEditable = false
    },

    async modify() {
      this.$swal({
        title: 'Are you sure to modify?',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Modify it!'
      }).then(async result => {
        if (result.isConfirmed) {
          await this.$put('/products/' + this.curProductId, this.userProduct)
          this.$swal(
            'Modified!',
            'product "' + this.userProduct.productid + '" has been modified.',
            'success'
          ).then(async result => {
            if (result) {
              // refresh list
              this.getProductList()
            }
          })
        }
      })
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
