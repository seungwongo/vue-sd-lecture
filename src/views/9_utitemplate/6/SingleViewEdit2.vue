<template>
  <div class="container">
    <table class="project-table">
      <tr>
        <th>Project 선택</th>
        <td>
          <select
            v-model="projectId"
            @change="changeProject"
            style="width:100%;"
          >
            <option value="">==project를 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">{{
              item.projectName
            }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>project name</th>
        <td><input type="text" v-model="project.projectName" /></td>
      </tr>
      <tr>
        <th>codeSmell</th>
        <td><input type="text" v-model="project.codeSmell" /></td>
      </tr>
      <tr>
        <th>bug</th>
        <td><input type="text" v-model="project.bug" /></td>
      </tr>
      <tr>
        <th>sequrity</th>
        <td><input type="text" v-model="project.sequrity" /></td>
      </tr>
      <tr>
        <th>leader</th>
        <td><input type="text" v-model="project.leader" /></td>
      </tr>
    </table>

    <div class="btn-area">
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
          const { projectName, codeSmell, bug, sequrity, leader } = this.project
          const r = await this.$put(`/projects6/${this.projectId}`, {
            projectName,
            codeSmell,
            bug,
            sequrity,
            leader
          })
          console.log('result', r)

          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeProject() {
      if (this.projectId === '') {
        this.project = {
          projectName: '',
          codeSmell: '',
          bug: '',
          sequrity: '',
          leader: ''
        }
        return
      }
      this.project = await this.$get(`/projects6/${this.projectId}`)
    },
    async getProject() {
      this.items = await this.$get('/projects6')
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
