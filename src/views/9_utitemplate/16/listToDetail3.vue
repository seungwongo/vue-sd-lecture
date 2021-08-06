<template>
  <div>
    <h1>Glass info</h1>
    <input type="text" v-model="editGlassid" @keyup.enter="doSearchList" />
    <button @click="doSearchList">조회</button>
    <table class="data-grid">
      <thead>
        <tr>
          <th :key="header.key" v-for="header in headers">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items" class="hover">
          <td
            :key="j"
            v-for="(h, j) in headers"
            :class="{ underline: h['key'] === 'glassid' }"
          >
            <span @click="showDeatails(item.id)">{{ item[h['key']] }}</span>
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
  data() {
    return {
      checkedItem: '',
      items: [],
      editGlassid: '',
      headers: [
        { title: 'GLASS ID', key: 'glassid' },
        { title: 'STEP', key: 'step' },
        { title: 'STATUS', key: 'status' },
        { title: 'PRODTYPE', key: 'prodtype' },
        { title: 'PRODID', key: 'prodid' },
        { title: 'EQPID', key: 'eqpid' },
        { title: 'PROCID', key: 'procid' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async showDeatails(tempData) {
      this.$router.push({ path: '/template/detail3', query: { id: tempData } })
    },
    async doSearchList() {
      if (this.editGlassid === '' || this.editGlassid === 'undefined') {
        this.items = await this.$get('/glasses2')
      } else {
        this.items = await this.$get(
          `/glasses2?glassid_like=${this.editGlassid}`
        )
        this.editGlassid = ''
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
.data-grid .hover:hover {
  background-color: rgb(255, 235, 249);
  cursor: pointer;
}
.underline {
  text-decoration: underline;
  color: blue;
}
input[type='text'],
input[type='password'],
select {
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  display: inline-block;
  background: white;
}
button {
  margin: 5px 5px 5px 5px;
  cursor: pointer;
  opacity: 0.9;
}
</style>
