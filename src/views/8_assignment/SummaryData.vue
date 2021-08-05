<template>
  <div>
    <table class="data-grid">
      <thead>
        <tr>
          <th :key="i" v-for="(header, i) in headers">{{ header.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <td :key="j" v-for="(h, j) in headers">{{ item[h['key']] }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>2021</td>
          <td>{{ selectMonth }}</td>
          <td>합계</td>
          <td>{{ sum }}</td>
        </tr>
      </tfoot>
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
    sum: {
      type: Number,
      default: 0
    },
    selectMonth: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style>
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
.data-grid thead,
.data-grid tfoot {
  font-weight: bold;
  background-color: lightgray;
}
</style>
