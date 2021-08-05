<template>
  <div>
    <div>
      <label><input type="radio" value="A" v-model="check" /> 옵션A</label>
      <label><input type="radio" value="B" v-model="check" /> 옵션B</label>
      <label><input type="radio" value="C" v-model="check" /> 옵션C</label>
    </div>
    <table class="data-grid" v-show="check == 'B'">
      <thead>
        <tr>
          <th v-if="selectType == 'radio' || selectType == 'checkbox'"></th>
          <th :key="header.key" v-for="header in headers">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <td v-if="selectType == 'radio'">
            <input
              type="radio"
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-else-if="selectType == 'checkbox'">
            <input
              type="checkbox"
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doSelect"
            />
          </td>
          <td :key="j" v-for="(h, j) in headers">{{ item[h['key']] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    selectType: {
      type: String,
      default: ''
    },
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
    eventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: [],
      check: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSelect() {
      if (this.selectType === 'checkbox') {
        this.$emit(this.eventName, this.checkedItems)
      } else if (this.selectType === 'radio') {
        this.$emit(this.eventName, this.checkedItem)
      }
    }
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

.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 5px;
}
</style>
