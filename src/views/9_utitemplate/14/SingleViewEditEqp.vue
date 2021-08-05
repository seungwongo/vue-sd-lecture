<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>SITE선택</th>
        <td>
          SITE :
          <select v-model="curSiteId" @change="selectSite">
            <option value="">==select a Site==</option>
            <option
              v-for="site in siteList"
              v-bind:key="site.objectId"
              :value="site.site"
              >{{ site.site }}
            </option>
          </select>
          EQPTYPE :
          <select v-model="curEqpTypeId" @change="selectEqpType">
            <option value="">==select a EqpType==</option>
            <option
              v-for="eqpType in eqpTypeList"
              v-bind:key="eqpType.objectId"
              :value="eqpType.eqpType"
              >{{ eqpType.eqpType }}
            </option>
          </select>
          EQPID :
          <select v-model="curEqpId" @change="selectEqp">
            <option value="">==select a Eqp==</option>
            <option v-for="eqp in eqpList" v-bind:key="eqp.id" :value="eqp.id"
              >{{ eqp.eqpId }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>SITE</th>
        <td><input type="text" v-model="eqp.site" /></td>
      </tr>
      <tr>
        <th>EQPTYPE</th>
        <td><input type="text" v-model="eqp.eqpType" /></td>
      </tr>
      <tr>
        <th>EQPID</th>
        <td><input type="text" v-model="eqp.eqpId" /></td>
      </tr>
    </table>

    <br /><br />

    <button @click="modify" v-bind:disabled="!changed">save</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  computed: {
    isNotChanged: function() {
      return (
        this.eqp.site === this.eqpOrigin.site &&
        this.eqp.eqpType === this.eqpOrigin.eqpType &&
        this.eqp.eqpId === this.eqpOrigin.eqpId
      )
    }
  },
  data() {
    return {
      changed: false,
      siteList: '',
      curSiteId: '',
      curEqpTypeId: '',
      curEqpId: '',
      eqp: {},
      eqpOrigin: {},
      eqpTypeList: {},
      eqpList: {},
      nullEqp: {
        id: 987654321,
        name: '',
        company: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getSiteList()
  },
  unmounted() {},
  methods: {
    async getSiteList() {
      this.siteList = await this.$get('/sites')
    },
    async selectSite() {
      if (!this.curSiteId) {
        this.eqpTypeList = JSON.parse(JSON.stringify(this.nullEqp))
      } else {
        this.eqpTypeList = await this.$get('/eqpTypes?site=' + this.curSiteId)
      }
    },
    async selectEqpType() {
      if (!this.curEqpTypeId) {
        this.eqpList = JSON.parse(JSON.stringify(this.nullEqp))
      } else {
        this.eqpList = await this.$get(
          '/eqps?site=' + this.curSiteId + '&eqpType=' + this.curEqpTypeId
        )
      }
    },
    async selectEqp() {
      if (!this.curEqpId) {
        this.eqp = JSON.parse(JSON.stringify(this.nullEqp))
      } else {
        this.eqp = await this.$get('/eqps/' + this.curEqpId)
      }
      console.log(this.eqp)
      // deep copy value to check modified
      this.eqpOrigin = JSON.parse(JSON.stringify(this.eqp))
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
          await this.$put('/eqps/' + this.curEqpId, this.eqp)
          this.$swal(
            'Created!',
            'user "' + this.eqp.eqpId + '" has been modified.',
            'success'
          ).then(async result => {
            if (result) {
              // refresh list
              this.selectEqpType()
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
