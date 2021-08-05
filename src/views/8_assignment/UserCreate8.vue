<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>Name</b></label>
      <input type="text" v-model="userName" placeholder="Enter Name" />
      <label><b>Birth</b></label>
      <input type="text" v-model.number="birthDay" placeholder="Enter Birth" />
      <label><b>Address</b></label>
      <input type="text" v-model="address" placeholder="Enter Address" />
      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" />
      <label><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" />
      <label
        ><input type="checkbox" v-model="checked" />14세 이상입니다
        <strong v-html="htmlString"></strong>
      </label>
      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button v-if="checked" class="registerbtn" @click="register">
        가입하기
      </button>
    </div>

    <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      user: {},
      email: '',
      userName: '',
      birthDay: '',
      checked: false,
      address: '',
      htmlString: '<p style="color:red;">(필수)</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      this.user.email = this.email
      this.user.name = this.userName
      this.user.birth = this.birthDay
      this.user.address = this.address
      this.user.password = this.password
      this.user.Repeatpassword = this.Repeatpassword
      console.log(this.user)
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
input[type='password'] {
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
