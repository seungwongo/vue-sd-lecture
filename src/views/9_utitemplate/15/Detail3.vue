<template>
  <div>
    <table class="recipe-table">
      <tr :key="h.key" v-for="h in headers">
        <td class="header">{{ h.title }}</td>
        <td>
          {{ rcp[h.key] }}
        </td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToList">목록</button>
      <button @click="goToEdit">수정</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      headers: [
        { title: '레시피명', key: 'name' },
        { title: '모델', key: 'model' },
        { title: '해상도', key: 'resolution' },
        { title: '인치', key: 'inch' },
        { title: 'Dot(High)', key: 'highDot' },
        { title: 'Dot(off)', key: 'offDot' },
        { title: 'Line(Open)', key: 'openLine' },
        { title: 'Line(Dim)', key: 'dimLine' }
      ],
      items: [],
      rcp: {},
      rcpId: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.rcpId = this.$route.query.id
    this.getRcp()
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToList() {
      this.$router.push({ path: '/uitemplate/listtodetail3' })
    },
    goToEdit() {
      this.$router.push({
        path: '/uitemplate/detailedit3',
        query: { id: this.rcpId }
      })
    },
    async getRcp() {
      this.rcp = await this.$get(`/recipes/${this.rcpId}`)
    }
  }
}
</script>
<style scoped>
.recipe-table {
  width: 100%;
}
.recipe-table,
.recipe-table th,
.recipe-table td {
  border-collapse: collapse;
}
.recipe-table th,
.recipe-table td {
  border: 1px solid #222;
  padding: 10px;
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
