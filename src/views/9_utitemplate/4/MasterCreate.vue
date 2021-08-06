<template>
  <div>
    <div class="container">
      <h1>Development ID</h1>
      <hr />

      <label><b>SW Portal ID</b></label>
      <input type="text" v-model="name" placeholder="Enter SW Portal ID" />
      <br />
      <label><b>Development PI</b></label>
      <input type="text" v-model="userid" placeholder="Enter Single ID" />
      <br />
      <label><b>JIRA ID</b></label>
      <input type="text" v-model="jira" placeholder="Enter JIRA ID" />
      <label><b>Confluence ID</b></label>
      <input
        type="text"
        v-model="confluence"
        placeholder="Enter Confluence ID"
      />
      <label><b>Code Review</b></label>
      <select v-model="codereview">
        <option value="Y">Y</option>
        <option value="N">N</option>
      </select>
      <br />
      <label><b>Acceptence Test</b></label>
      <select v-model="acceptence">
        <option value="Y">Y</option>
        <option value="N">N</option>
      </select>
      <br />
      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button class="registerbtn" @click="doCreate">생성</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      name: '',
      userid: '',
      jira: '',
      confluence: '',
      codereview: '',
      acceptence: ''
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
          const r = await this.$post('/developments', {
            name: this.name,
            userid: this.userid,
            jira: this.jira,
            confluence: this.confluence,
            codereview: this.codereview,
            acceptence: this.acceptence
          })
          console.log(r)
          this.$swal('Created!', 'New user has been created.', 'success')
        }
      })
      this.$router.push({ path: '/uitemplate/masterdetail3' })
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
</style>
