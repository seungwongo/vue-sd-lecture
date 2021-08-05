<template>
  <div>
    <div class="container">
      <h1>Customer</h1>
      <hr />

      <label><b>Name</b></label>
      <input type="text" v-model="name" placeholder="Enter Name" />
      <br />
      <label><b>Gender</b></label>

      <select v-model="gender">
        <option value="male">남</option>
        <option value="female">여</option>
      </select>
      <br />
      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />
      <label><b>Company</b></label>
      <input type="text" v-model="company" placeholder="Enter Company" />
      <label><b>Phone</b></label>
      <input type="text" v-model="phone" placeholder="Enter Phone" />
      <label><b>Address</b></label>
      <input type="text" v-model="address" placeholder="Enter Address" />

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
      email: '',
      company: '',
      phone: '',
      address: '',
      gender: ''
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
          const r = await this.$post('/users', {
            name: this.name,
            email: this.email,
            company: this.company,
            phone: this.phone,
            address: this.address,
            gender: this.gender
          })

          console.log(r)

          this.$swal('Created!', 'New user has been created.', 'success')
        }
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
</style>
