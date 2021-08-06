<template>
  <div>
    <table class="item-table">
      <tr v-for="header in headers" :key="header.key">
        <th>{{ header.title }}</th>
        <td>
          <input
            v-if="editMode && typeof item0[header.key] === 'number'"
            type="number"
            v-model="item[header.key]"
          />
          <input v-else-if="editMode" type="text" v-model="item[header.key]" />
          <template v-else>{{ item[header.key] }}</template>
        </td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToList">목록</button>
      <button v-show="!editMode" @click="doEdit">수정</button>
      <button v-show="editMode" @click="doSave" :disabled="disableSave">
        저장
      </button>
    </div>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
export default {
  name: '',
  components: {},
  data() {
    return {
      item: {},
      item0: {},
      itemId: '',
      editMode: false,
      disableSave: true
    }
  },
  computed: {
    headers() {
      return this.$store.state.listToDetail3.headers
    }
  },
  setup() {},
  created() {
    this.itemId = this.$route.query.id
    this.getitem()
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
  unmounted() {},
  methods: {
    goToList() {
      this.$router.push({ path: '/template/listtodetail3' })
    },
    doEdit() {
      this.editMode = true
    },
    async getitem() {
      console.log(this.itemId)
      this.item = await this.$api(`/users/${this.itemId}`)
      this.item0 = cloneDeep(this.item)
    },
    async doSave() {
      // const { name, company, email, phone, address } = this.item
      const r = await this.$put(`/users/${this.itemId}`, this.item)
      console.log('result', r)
      this.editMode = false
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
