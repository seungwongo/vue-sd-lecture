<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />

      <label><b>Name</b></label>
      <input type="text" v-model="name" placeholder="Enter Name" />

      <label><b>Gender </b></label>
      <label><input type="radio" value="남자" v-model="gender" /> 남자</label>
      <label><input type="radio" value="여자" v-model="gender" /> 여자</label>

      <br />
      <br />

      <label><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter Password" />

      <label><b>Repeat Password</b></label>
      <input
        type="password"
        v-model="repeatPassword"
        placeholder="Repeat Password"
      />

      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button class="registerbtn" @click="register">
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
      user: {
        email: '',
        name: '',
        password: '',
        gender: ''
      },
      email: '',
      name: '',
      password: '',
      gender: '',
      repeatPassword: '',

      isEmpty: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      this.isEmpty = false
      if (this.email === '') {
        this.isEmpty = true
        alert('email을 입력하세요.')
        return
      } else {
        this.user.email = this.email
      }

      if (this.name === '') {
        this.isEmpty = true
        alert('name을 입력하세요.')
        return
      } else {
        this.user.name = this.name
      }

      if (this.gender === '') {
        this.isEmpty = true
        alert('gender를 선택하세요.')
        return
      } else {
        this.user.gender = this.gender
      }

      if (this.password === '') {
        this.isEmpty = true
        alert('password를 입력하세요')
        return
      } else {
        this.user.password = this.password
      }

      if (this.password !== this.repeatPassword) {
        alert('password가 동일하지 않습니다.')
        return
      }

      if (this.isEmpty === false) {
        console.log(this.user)
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

hr1 {
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
