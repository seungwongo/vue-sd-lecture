<template>
  <table class="data-grid">
    <thead>
      <tr>
        <th></th>
        <th :key="header.key" v-for="header in headers">{{ header.title }}</th>
        <th>기능</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(item, i) in items">
        <td>
          <input
            type="checkbox"
            :value="item[checkedKey]"
            v-model="checkedItems"
            @change="doSelect"
          />
        </td>
        <td :key="j" v-for="(h, j) in headers">{{ item[h['key']] }}</td>
        <button @click="doMod">수정</button>
        <button @click="doDel">삭제</button>
      </tr>
      <button @click="doDel">선택삭제</button>
    </tbody>
  </table>
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
    checkedKey: {
      type: String,
      default: ''
    },
    eventname: {
      type: String,
      default: 'del-item'
    }
  },

  data() {
    return {
      checkedItem: '',
      checkedItems: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doMod() {},
    doDel() {
      //console.log(this.checkedItems)
      this.$emit(this.eventname, this.checkedItems)
    },
    doSelect() {}
  }
}
</script>
<style scoped>
.data-grid {
  width: 100%;
}
.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}

.data-grid,
.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 10px;
}
.data-grid button {
  width: 50pt;
  height: 30pt;
}
</style>
