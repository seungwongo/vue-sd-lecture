<template>
  <div>
    <h1>GLASS 정보 수정</h1>
    <table class="data-grid">
      <tr>
        <td>Glass id 선택</td>
        <td>
          <input
            :readonly="editControl == 1"
            type="text"
            v-model="editGlass"
            @keyup.enter="doSearch"
          />
        </td>
      </tr>
      <tr>
        <td>STEP</td>
        <td>
          <input type="text" v-model="editGlassInfo.step" />
        </td>
      </tr>
      <tr>
        <td>STATUS</td>
        <td><input type="text" v-model="editGlassInfo.status" /></td>
      </tr>
      <tr>
        <td>MACHINE</td>
        <td><input type="text" v-model="editGlassInfo.machine" /></td>
      </tr>
      <tr>
        <td>COMMENT</td>
        <td><input type="text" v-model="editGlassInfo.comment" /></td>
      </tr>
    </table>

    <br />
    <button class="registerbtn" @click="doSave">
      수정
    </button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      editGlassInfoList: [],
      editGlassInfo: {},
      editGlass: '',
      editName: '',
      editControl: 0,
      status: '',
      machine: '',
      step: '',
      comment: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doSearch() {
      if (this.editGlass === '') {
        this.$swal('Input Glass ID')
        return
      }
      this.editGlassInfoList = await this.$get(
        `/glasses?glassid=${this.editGlass}`
      )
      if (this.editGlassInfoList.length === 0) {
        this.$swal('There is no Glass ID ')
        return
      } else if (this.editGlassInfoList.length > 1) {
        this.$swal('Many glasses are returned ')
        return
        //  중복된 것 있으면 어떻게 되는건지?
      }
      this.editGlassInfo = this.editGlassInfoList[0]
      this.editControl = 1
    },
    async doSave() {
      this.$swal({
        title: 'Are you sure to create?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, create it!'
      }).then(async result => {
        if (result.isConfirmed) {
          // const r = await this.$put(`/glasses?glassid=${this.editGlass}`, {
          await this.$put(`/glasses/${this.editGlassInfo.id}`, {
            id: this.editGlassInfo.id,
            glassid: this.editGlassInfo.glassid,
            status: this.editGlassInfo.status,
            machine: this.editGlassInfo.machine,
            step: this.editGlassInfo.step,
            comment: this.editGlassInfo.comment
          })
        }
        // console.log(r)
        this.$swal('Created!', 'New user has been created.', 'success')
        this.editGlassInfo = {}
        this.editGlass = ''
        this.editControl = 0
      })
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
  text-align: left;
}
/* Full-width input fields */
input[type='text'],
input[type='password'],
select {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type='text']:focus,
input[type='password']:focus {
  background-color: #ddd;
  outline: none;
}
/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
/* Set a style for the submit button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.registerbtn:hover {
  opacity: 1;
}
/* Add a blue text color to links */
a {
  color: dodgerblue;
}
/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
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
  padding: 1px;
}
.data-grid th {
  cursor: pointer;
}
</style>
