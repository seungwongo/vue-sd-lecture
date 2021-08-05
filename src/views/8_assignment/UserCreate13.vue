<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label v-bind:class="{ required: isEmpty }"><b>Name</b></label>
      <input type="text" v-model="name" placeholder="Enter Name" />

      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />

      <label><b>Password</b></label>
      <input type="password" v-model="pwd" placeholder="Enter Password" />

      <label><b>Repeat Password</b></label>
      <input type="password" v-model="compPwd" placeholder="Repeat Password" />

      <label><b>Company</b></label>
      <input type="text" v-model="company" placeholder="Enter Company" />

      <label><b>Phone</b></label>
      <br />
      <input
        type="text"
        style="display:inline; width:100px;"
        v-model="phone1"
        placeholder="010"
        maxLength="3"
      />-
      <input
        type="number"
        style="display:inline; width:100px;"
        v-model.number="phone2"
        placeholder="0000"
        @keyup="phoneNumCheck"
      />-
      <input
        type="number"
        style="display:inline; width:100px;"
        v-model.number="phone3"
        min="0"
        max="9999"
        placeholder="0000"
        @keyup="phoneNumCheck"
      />

      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button class="registerbtn" @click="register">가입하기</button>
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
      isEmpty: false,
      user: {},
      name: '',
      email: '',
      pwd: '',
      compPwd: '',
      phone1: '',
      phone2: '',
      phone3: '',
      company: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.phone1 = '010'
  },
  unmounted() {},
  methods: {
    register() {
      if (this.pwd !== this.compPwd) {
        alert('Password가 일치하지 않습니다')
        return
      }

      if (this.name === '') {
        this.isEmpty = true
        alert('Name은 필수값입니다.')
        return
      } else {
        this.isEmpty = false
      }

      this.user.name = this.name
      this.user.email = this.email
      this.user.pwd = this.pwd
      this.user.compPwd = this.compPwd
      this.user.company = this.company
      this.user.phone1 = this.phone1
      this.user.phone2 = this.phone2
      this.user.phone3 = this.phone3

      console.log(this.user)

      alert('회원가입처리가 완료되었습니다.')
    },
    phoneNumCheck() {
      if (this.phone1 !== '010') {
        alert('정확한 전화번호를 넣어주세요')
      }

      if (this.phone2 > 9999 || this.phone3 > 9999) {
        alert('정확한 전화번호를 넣어주세요')
      }
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
input[type='number'],
input[type='password'] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type='text']:focus,
input[type='number']:focus,
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

.required {
  color: red;
}
</style>
