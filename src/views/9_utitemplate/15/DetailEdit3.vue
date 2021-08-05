<template>
  <div>
    <table class="recipe-table">
      <tr :key="h.key" v-for="h in headers">
        <td class="header">{{ h.title }}</td>
        <td>
          <input type="text" v-if="!h.isNumber" v-model="rcp[h.key]" />
          <input type="number" v-else v-model.number="rcp[h.key]" />
        </td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToDetail">취소</button>
      <button @click="doSave">저장</button>
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
        { title: '레시피명', key: 'name', isNumber: false },
        { title: '모델', key: 'model', isNumber: false },
        { title: '해상도', key: 'resolution', isNumber: false },
        { title: '인치', key: 'inch', isNumber: true },
        { title: 'Dot(High)', key: 'highDot', isNumber: true },
        { title: 'Dot(off)', key: 'offDot', isNumber: true },
        { title: 'Line(Open)', key: 'openLine', isNumber: true },
        { title: 'Line(Dim)', key: 'dimLine', isNumber: true }
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
    goToDetail() {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: this.rcpId }
      })
    },
    async doSave() {
      this.$swal({
        title: 'Are you sure to save?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const {
            name,
            model,
            resolution,
            inch,
            highDot,
            offDot,
            openLine,
            dimLine
          } = this.rcp
          const r = await this.$put(`/recipes/${this.rcpId}`, {
            name,
            model,
            resolution,
            inch,
            highDot,
            offDot,
            openLine,
            dimLine
          })
          console.log('result', r)
          this.$swal('Saved!', 'Recipe information has been saved.', 'success')

          this.$router.push({
            path: '/uitemplate/detail3',
            query: { id: this.rcpId }
          })
        }
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
