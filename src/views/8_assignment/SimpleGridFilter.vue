<template>
  <div>
    <label>filterString </label>
    <input type="text" v-model="filterString" @keyup.enter="doFilter" />
    <table class="data-grid">
      <thead>
        <tr>
          <th>CHK</th>
          <th :key="header.key" v-for="header in headers">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items" v-bind:class="activeClass">
          <td>
            <input type="checkbox" v-model="item.checkItem" />
          </td>
          <td :key="j" v-for="(header, j) in headers">
            <span>{{ item[header['key']] }}</span>
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
      default: ''
    }
  },
  data() {
    return {
      filterString: '',
      activeClass: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doFilter() {
      for (var head of this.headers) {
        for (var item of this.items) {
          if (item[head.key] === this.filterString) {
            this.activeClass = 'active'
            console.log(this.filterString)
          } else {
            this.activeClass = 'hide'
          }
        }
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
.active {
  background-color: yellow;
  font-weight: bold;
}
.hide {
  display: none;
}
</style>
