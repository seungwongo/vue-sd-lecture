<template>
  <div>
    <table class="customer-table">
      <tbody v-show="clickedModifybtn == true">
        <tr :key="header.key" v-for="header in headers">
          <th>{{ header.title }}</th>
          <td v-show="header['key'] == 'id'">{{ userInfo[header['key']] }}</td>
          <td v-show="header['key'] != 'id'">
            <input type="text" v-model="userInfo[header['key']]" />
          </td>
        </tr>
      </tbody>
      <tbody v-show="clickedModifybtn == false">
        <tr :key="header.key" v-for="header in headers">
          <th>{{ header.title }}</th>
          <td>{{ items[header['key']] }}</td>
        </tr>
      </tbody>
    </table>

    <p class=".btn-area" v-show="userInfo.id !== undefined">
      <button @click="doModify">수정</button>
      <button @click="doSave">저장</button>
    </p>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    headers: {
      type: Array,
      default: function() {
        return []
      }
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    },
    eventName: {
      type: String,
      default: 'change-item'
    },
    enableBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userid: '',
      userInfo: {},
      clickedModifybtn: false,
      headInfo: {}
    }
  },
  watch: {
    items() {
      this.userInfo = this.items
    }
  },

  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doModify() {
      this.clickedModifybtn = true
    },
    async doSave() {
      this.$emit(this.eventName, this.userInfo)
      this.clickedModifybtn = false
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
  text-align: center;
  width: 35%;
}
.customer-table td {
  text-align: left;
}
.customer-table input {
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
