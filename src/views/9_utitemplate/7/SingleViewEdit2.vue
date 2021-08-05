<template>
  <div class="container">
    <table class="data-table">
      <tr :key="header.key" v-for="header in headers">
        <td v-if="header.key == '' || header.key == 'glassid'"></td>
        <td v-else>
          <input
            type="checkbox"
            v-model="chk[header['key']]"
            @change="doChangeValue(header['key'])"
            :disabled="chk[header['key']] == false"
          />
        </td>
        <th>{{ header.title }}</th>
        <td v-if="header.key == ''">
          <select v-model="ID" @change="doSearch" style="width:100%;">
            <option value="">==Glass를 선택하세요==</option>
            <option
              :value="item.glassid"
              :key="item.glassid"
              v-for="item in items"
              >{{ item.glassid }}</option
            >
          </select>
        </td>
        <td
          v-else-if="header.key == 'glassid'"
          style="text-align:left;font-size:14px;"
        >
          {{ data[header['key']] }}
        </td>
        <td v-else>
          <input
            type="text"
            v-model="data[header['key']]"
            @blur="doChangeCheck(header['key'])"
          />
        </td>
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
      data: {},
      ID: '',
      headers: [
        {
          title: 'GLASSID 선택',
          key: ''
        },
        { title: 'GLASSID', key: 'glassid' },
        { title: 'SITEID', key: 'siteid' },
        { title: 'STEPID', key: 'stepid' },
        {
          title: 'EQPUNITTYPE',
          key: 'eqpunittype'
        },
        {
          title: 'EQPUNITID',
          key: 'eqpunitid'
        }
      ],
      preData: {
        glassid: '',
        siteid: '',
        stepid: '',
        eqpunittype: '',
        eqpunitid: ''
      },
      chk: {
        glassid: false,
        siteid: false,
        stepid: false,
        eqpunittype: false,
        eqpunitid: false
      }
    }
  },
  setup() {},
  created() {
    this.getData()
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
          // const {
          //   glassid,
          //   siteid,
          //   stepid,
          //   eqpunittype,
          //   eqpunitid
          // } = this.data[0]
          console.log(`/glassespath?glassid=${this.ID}`)
          const r = (
            await this.$put(`/glassespath?glassid=${this.ID}`, {
              siteid: this.data.siteid,
              stepid: this.data.stepid,
              eqpunittype: this.data.eqpunitype,
              eqpunitid: this.data.eqpunitid
            })
          )[0]

          console.log('result', r)

          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async doSearch() {
      if (this.ID === '') {
        this.data = {
          glassid: '',
          siteid: '',
          stepid: '',
          eqpunittype: '',
          eqpunitid: ''
        }
        return
      }
      this.data = (await this.$get(`/glassespath?glassid=${this.ID}`))[0]
      // this.data = await this.$get(`/glassespath?glassid=${this.ID}`)

      this.preData.glassid = this.data.glassid
      this.preData.siteid = this.data.siteid
      this.preData.stepid = this.data.stepid
      this.preData.eqpunittype = this.data.eqpunittype
      this.preData.eqpunitid = this.data.eqpunitid
    },
    async getData() {
      this.items = await this.$get('/glassespath')
    },
    doChangeCheck(col) {
      if (this.preData[col] === this.data[col]) {
        this.chk[col] = false
      } else {
        this.chk[col] = true
        // console.log('here : ' + this.chk[col])
      }
    },
    doChangeValue(col) {
      if (!this.chk[col]) {
        this.data[col] = this.preData[col]
      }
    }
  }
}
</script>

<style scoped>
.data-table {
  width: 100%;
}

.data-table,
.data-table th,
.data-table td {
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  border: 1px solid #222;
  padding: 10px;
}

.data-table th {
  text-align: right;
}

.data-table td input {
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
.border-red {
  border: 1px solid red;
}
</style>
