<template>
  <div>
    <table class="recipe-table">
      <tbody>
        <tr :key="h.key" v-for="h in headers">
          <td class="header">{{ h.title }}</td>
          <td>
            <select
              v-if="h.key === 'select'"
              v-model="currentRcpId"
              @change="changeRcp"
            >
              <option value="" selected>==레시피모델을 선택하세요==</option>
              <option :value="i.id" :key="i.id" v-for="i in rcpList">{{
                i.name
              }}</option>
            </select>
            <input
              type="text"
              v-if="h.key !== 'select'"
              v-model="currentRcp[h.key]"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn-area" @click="onClick">저장</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      headers: [
        { title: '레시피 선택', key: 'select' },
        { title: '레시피명', key: 'name' },
        { title: '모델', key: 'model' },
        { title: '해상도', key: 'resolution' },
        { title: '인치', key: 'inch' },
        { title: 'Dot(High)', key: 'highDot' },
        { title: 'Dot(off)', key: 'offDot' },
        { title: 'Line(Open)', key: 'openLine' },
        { title: 'Line(Dim)', key: 'dimLine' }
      ],
      rcpList: [],
      currentRcpId: '',
      currentRcp: {
        name: '',
        model: '',
        resolution: '',
        inch: '',
        highDot: '',
        offDot: '',
        openLine: '',
        dimLine: ''
      }
    }
  },
  setup() {},
  created() {
    this.getRcpList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getRcpList() {
      this.rcpList = await this.$get('/recipes')
      console.log(this.rcpList)
    },
    changeRcp() {
      console.log(this.currentRcpId)
      this.getCurrentRcp()
    },
    async getCurrentRcp() {
      this.currentRcp = await this.$get(`/recipes/${this.currentRcpId}`)
      console.log(this.currentRcp)
    },
    onClick() {
      console.log(this.currentRcp)
      if (this.currentRcpId === '') {
        alert('선택된 레시피가 없습니다.')
        return
      }
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
          } = this.currentRcp
          const r = await this.$put(`/recipes/${this.currentRcpId}`, {
            name,
            model,
            resolution,
            inch,
            highDot,
            offDot,
            openLine,
            dimLine
          })
          console.log(r)
          this.$swal('Saved!', 'Recipe information has been saved.', 'success')
        }
      })
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

.recipe-table th {
  text-align: right;
}

.recipe-table td input {
  width: 100%;
}

.recipe-table select {
  width: 100%;
}

.header {
  text-align: right;
  font-weight: bold;
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
