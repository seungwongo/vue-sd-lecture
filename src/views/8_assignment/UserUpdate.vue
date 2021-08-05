<template>
  <table class="data-grid">
    <thead>
      <tr>
        <th v-if="myVisible" selectType="checkbox"></th>
        <th :key="header.key" v-for="header in headers">{{ header.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(item, i) in items">
        <td>
          <input type="checkbox" />
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
      checkedItems: [],
      myVisible: true
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

.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 5px;
}

.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 5px;
}
</style>
