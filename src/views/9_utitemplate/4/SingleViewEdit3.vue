<template>
  <div class="container">
    <table class="project-table">
      <tr>
        <td colspan="2" style="text-align: center;">
          <h2>Project별 개발건</h2>
        </td>
      </tr>
      <tr>
        <th>Project</th>
        <td>
          <select
            v-model="projectId"
            @change="changeProject"
            style="width:100%;"
          >
            <option value="">==개발 건 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.name
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Task</th>
        <td><input type="text" v-model="project.task" /></td>
      </tr>
      <tr>
        <th>Sub_Task</th>
        <td><input type="number" v-model="project.subtask" /></td>
      </tr>
      <tr>
        <th>Hot_Fix</th>
        <td><input type="number" v-model="project.hotfix" /></td>
      </tr>
      <tr>
        <th>Inprovement</th>
        <td><input type="number" v-model="project.inprovement" /></td>
      </tr>
      <tr>
        <th>Total</th>
        <td><input type="number" v-model="project.total" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="doSave">변경</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      items: [],
      project: {},
      projectId: ''
    }
  },
  setup() {},
  created() {
    this.getProject()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      this.$swal({
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const {
            name,
            task,
            subtask,
            hotfix,
            inprovement,
            total
          } = this.project
          const r = await this.$put(`/projects/${this.projectId}`, {
            name,
            task,
            subtask,
            hotfix,
            inprovement,
            total
          })
          console.log('result', r)
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeProject() {
      if (this.projectId === '') {
        this.project = {
          name: '',
          task: '',
          subtask: '',
          hotfix: '',
          inprovement: '',
          total: ''
        }
        return
      }
      this.project = await this.$get(`/projects/${this.projectId}`)
    },
    async getProject() {
      this.items = await this.$get('/projects')
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
.btn-area {
  text-align: center;
  margin-top: 10px;
}
.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
