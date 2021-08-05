<template>
  <table class="data-grid">
    <thead>
      <tr>
        <th v-if="selectType == 'radio' || selectType == 'checkbox'"></th>
        <th :key="header.key" v-for="header in headers">{{ header.title }}</th>
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
    <div>필수여부: {{ checkedItem }}</div>
  </table>
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
    eventName: {
      type: String,
      default: 'change-item'
    },
    checkedKey: {
      type: String,
      default: ''
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
  border: 1px solid black;
  padding: 5px;
}

.data-grid,
.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 5px;
}
</style>
