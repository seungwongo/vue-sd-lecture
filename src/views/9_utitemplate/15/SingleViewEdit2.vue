<template>
  <div>
    <table class="project-table">
      <tbody>
        <tr :key="h.key" v-for="h in headers">
          <td class="header">{{ h.title }}</td>
          <td>
            <select
              v-if="h.key === 'select'"
              v-model="currentPjtId"
              @change="changePjt"
            >
              <option value="" selected>==프로젝트를 선택하세요==</option>
              <option :value="i.id" :key="i.id" v-for="i in pjtList">{{
                i.name
              }}</option>
            </select>
            <input
              type="text"
              v-if="h.key !== 'select'"
              v-model="currentPjt[h.key]"
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
        { title: '프로젝트 선택', key: 'select' },
        { title: '프로젝트명', key: 'name' },
        { title: '부서명', key: 'depart' },
        { title: '프로젝트리더', key: 'leader' },
        { title: 'SVN주소', key: 'svn' },
        { title: '언어', key: 'lang' },
        { title: '개발환경', key: 'IDE' }
      ],
      pjtList: [],
      currentPjtId: '',
      currentPjt: {
        name: '',
        depart: '',
        leader: '',
        svn: '',
        lang: '',
        IDE: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getPjtList()
  },
  unmounted() {},
  methods: {
    async getPjtList() {
      this.pjtList = await this.$get('/projects')
      console.log(this.pjtList)
    },
    changePjt() {
      console.log(this.currentPjtId)
      this.getCurrentPjt()
    },
    async getCurrentPjt() {
      this.currentPjt = await this.$get(`/projects/${this.currentPjtId}`)
      console.log(this.currentPjt)
    },
    onClick() {
      console.log(this.currentPjt)

      if (this.currentPjtId === '') {
        alert('선택된 프로젝트가 없습니다.')
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
          const { name, depart, leader, svn, lang, IDE } = this.currentPjt
          const r = await this.$put(`/projects/${this.currentPjtId}`, {
            name,
            depart,
            leader,
            svn,
            lang,
            IDE
          })
          console.log(r)
          this.$swal('Saved!', 'Project information has been saved.', 'success')
        }
      })
    }
  }
}
</script>
<style scoped>
.project-table {
  width: 100%;
}

.project-table,
.project-table th,
.project-table td {
  border-collapse: collapse;
}

.project-table th,
.project-table td {
  border: 1px solid #222;
  padding: 10px;
}

.project-table th {
  text-align: right;
}

.project-table td input {
  width: 100%;
}

.project-table select {
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
