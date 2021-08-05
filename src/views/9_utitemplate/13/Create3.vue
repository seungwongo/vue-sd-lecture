<template>
  <div>
    <div class="container">
      <h1>Create New Code</h1>
      <hr />
      <label><b>Code</b></label>
      <input type="text" v-model="code" placeholder="Enter Code" />
      <br />
      <label><b>Line</b></label>
      <select v-model="line">
        <option value="L1">Line1</option>
        <option value="L2">Line2</option>
        <option value="L3">Line3</option>
      </select>
      <br />
      <label><b>Gubun</b></label>
      <select v-model="gubun">
        <option value="Reject">Reject</option>
        <option value="Rework">Rework</option>
      </select>
      <label><b>Description</b></label>
      <input
        type="text"
        v-model="description"
        placeholder="Enter Description"
      />
      <hr />
      <p>
        By creating a code you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button class="registerbtn" @click="doCreate">생성</button>
      <button class="listbtn" @click="gotoList">목록</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      code: '',
      line: '',
      gubun: '',
      description: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doCreate() {
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
          const r = await this.$post('/codes', {
            id: this.line + this.gubun + this.code,
            line: this.line,
            gubun: this.gubun,
            code: this.code,
            description: this.description
          })
          console.log(r)
          this.$swal('Created!', 'New code has been created.', 'success')
        }
      })
    },
    gotoList() {
      this.$router.push({ path: '/template/listtodetail3' })
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
  margin: 8px 1px;
  border: 1px solid black;
  cursor: pointer;
  width: 49%;
  opacity: 0.9;
}

.listbtn {
  background-color: gray;
  color: white;
  padding: 16px 20px;
  margin: 8px 1px;
  border: 1px solid black;
  cursor: pointer;
  width: 49%;
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
</style>
