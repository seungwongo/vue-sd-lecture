<template>
  <div>
    <div class="btn-area">
      <button @click="doSave" :disabled="disableSave">저장</button>
    </div>
    <table class="item-table">
      <tr v-for="(value, name) in item" :key="name">
        <th>{{ name }}</th>
        <td>
          <input
            v-if="typeof item0[name] === 'number'"
            :type="typeof item0[name] === 'number' ? 'number' : 'text'"
            v-model.number="item[name]"
          />
          <input
            v-else
            :type="typeof item0[name] === 'number' ? 'number' : 'text'"
            v-model="item[name]"
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
export default {
  name: '',
  components: {},
  props: {
    item0: {}
  },
  data() {
    return {
      item: {},
      itemId: '',
      disableSave: true
    }
  },
  setup() {},
  created() {
    this.item = cloneDeep(this.item0)
  },
  watch: {
    item: {
      deep: true,
      handler(newValue) {
        this.isSameObj(newValue, this.item0, 1)
      }
    }
  },
  mounted() {},
  // beforeUpdated() {
  //   this.isInitData = true
  // },
  updated() {
    // console.log('her')
    // this.item = cloneDeep(this.item0)
    // this.isInitData = true
  },
  unmounted() {},
  methods: {
    doSave() {
      this.$swal({
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          //   const { name, company, email, phone, address } = this.customer
          const item = {}
          Object.keys(this.item).forEach((key) => {
            item[key] = this.item[key] // key 는 문자열
          })
          // console.log(item)
          const r = await this.$put(`/users/${this.item.id}`, item)
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
          this.$emit('saveDetail')
        }
      })
    },
    isSameObj(changedObj, refObj, isEnd) {
      for (var i in changedObj) {
        // if (typeof this.item0[i] === 'number') {
        //   val = parseInt(val)
        // }
        if (typeof changedObj[i] === 'object') {
          this.isSameObj(changedObj[i], refObj[i], 0)
        } else {
          if (changedObj[i] !== refObj[i]) {
            console.log(typeof changedObj[i], changedObj[i])
            console.log(typeof refObj[i], refObj[i])
            this.disableSave = false
            return
          }
        }
      }
      if (isEnd) {
        this.disableSave = true
      }
    }
  }
}
</script>
<style scoped>
.item-table {
  width: 100%;
}
.item-table,
.item-table th,
.item-table td {
  border-collapse: collapse;
}
.item-table th,
.item-table td {
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
