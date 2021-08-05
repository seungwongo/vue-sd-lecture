<template>
  <table class="data-grid">
    <thead>
      <tr>
        <th
          v-if="
            selectType == 'radio' ||
              selectType == 'checkbox' ||
              selectType == 'textbox'
          "
        ></th>
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
        <td v-if="selectType == 'checkbox'">
          <input
            type="checkbox"
            :value="item[checkedKey]"
            v-model="checkedItems"
            @change="doSelect"
          />
        </td>
        <td v-if="selectType == 'textbox'">
          <input
            type="textbox"
            :value="item[checkedKey]"
            v-model="checkedText"
            @change="doSelect"
          />
        </td>

        <td :key="j" v-for="(h, j) in headers">{{ item[h['key']] }}</td>
      </tr>
    </tbody>
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
      checkedText: []
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
      } else if (this.selectType === 'textbox') {
        this.$emit(this.eventName, this.checkedText)
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
  border: 1px solid gray;
  padding: 5px;
}
.data-grid th {
  cursor: pointer;
}
</style>
