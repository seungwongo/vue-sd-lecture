<template>
  <div>
    <table class="data-grid">
      <thead>
        <tr>
          <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
          <th :key="i" v-for="(h, i) in headers">
            {{ h.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-else-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doSelect"
            />
          </td>
          <td :key="j" v-for="(h, j) in headers">
            <span>{{ item[h['key']] }}</span>
          </td>
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
        return [] // [{title:'컬럼명', key:'items의 오브젝트 키', link:false, linkKey:'', linkEventName:''}]
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
  changed() {},
  methods: {
    doSelect() {
      if (this.selectType === 'radio') {
        this.$emit(this.eventName, this.checkedItem)
        this.currentItem = this.checkedItem
      } else if (this.selectType === 'checkbox') {
        this.$emit(this.eventName, this.checkedItems)
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
  border: 1px solid #222;
  padding: 5px;
}
.data-grid th {
  cursor: pointer;
}
</style>
