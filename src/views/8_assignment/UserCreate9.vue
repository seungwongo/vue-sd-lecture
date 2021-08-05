<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>Email</b></label>
      <input
        id="email"
        type="text"
        placeholder="Enter Email"
        v-model="email"
        ref="email"
        @keyup.enter="moveFocus"
      />

      <label><b>Password</b></label>
      <input
        id="password"
        type="password"
        placeholder="Enter Password"
        v-model="password"
        ref="password"
        @keyup.enter="moveFocus"
      />

      <label><b>Repeat Password</b></label>
      <input
        id="password2"
        type="password"
        placeholder="Repeat Password"
        v-model="password2"
        ref="password2"
        @keyup.enter="moveFocus"
      />

      <p v-show="bPassErrorMsg" style="color:red">
        비밀번호가 일치하지 않습니다.
      </p>
      <p v-show="bPassSuccessMsg" style="color:green">
        비밀번호가 일치하지 않습니다.
      </p>

      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button
        class="registerbtn"
        @click="register"
        ref="register"
        @keyup.enter="register"
      >
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
      password: '',
      password2: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      if (this.email) {
        this.user.email = this.email
      } else {
        this.$refs.email.focus()
        alert('Email 을 입력하세요')
        return
      }

      if (this.password) {
        this.user.password = this.password
      } else {
        this.$refs.password.focus()
        alert('Password 를 입력하세요')
        return
      }

      if (this.password2) {
        if (this.user.password !== this.password2) {
          this.password2 = ''
          this.$refs.password2.focus()
          alert('Password 가 동일하지 않습니다. 다시 입력바랍니다.')
          return
        }
      } else {
        this.$refs.password2.focus()
        alert('재확인을 위한 Password 를 입력하세요.')
        return
      }

      console.log(this.user)
      alert('등록이 완료되었습니다.')
    },
    moveFocus(e) {
      console.log(e.target.id)
      const id = e.target.id
      switch (id) {
        case 'email':
          if (this.email) {
            this.$refs.password.focus()
          } else {
            alert('Email 을 입력하세요')
          }
          break
        case 'password':
          if (this.password) {
            this.$refs.password2.focus()
          } else {
            alert('Password 을 입력하세요')
          }
          break
        case 'password2':
          if (this.password2) {
            this.$refs.register.focus()
          } else {
            alert('재확인을 위한 Password 를 입력하세요.')
          }
          break
        default:
          break
      }
    }
    // checkPass() {
    //   if (this.user.password === this.user.password2) {
    //     this.validPass = true
    //   } else {
    //     this.validPass = false
    //   }
    // },
    // checkPass2() {
    //   if (this.user.password.startsWith(this.user.password2)) {
    //     this.bPassSuccessMsg = false
    //     this.bPass
    //   } else {
    //     this.validPass = false
    //   }
    // }
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
