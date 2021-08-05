<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>ID</b></label>
      <input
        type="text"
        :class="{ notvalid: true }"
        v-model="user.id"
        placeholder="Enter ID"
      />

      <label><b>Name</b></label>
      <input type="text" v-model="user.name" placeholder="Enter Name" />

      <label><b>Phone (선택사항)</b></label>
      <input
        type="text"
        v-model.number="user.phone"
        placeholder="Enter Phone"
      />

      <label><b>Email (선택사항)</b></label>
      <input type="text" v-model="user.email" placeholder="Enter Email" />

      <label><b>Password</b></label>
      <input type="text" v-model="user.password" placeholder="Enter Password" />

      <label><b>Repeat Password</b></label>
      <input
        type="text"
        v-model="user.re_password"
        :disabled="user.password == ''"
        @change="checkPass"
        @keyup="checkPass2"
        placeholder="Repeat Password"
      />
      <p v-show="bPassErrorMsg" style="color:red;">
        비밀번호가 일치하지 않습니다.
      </p>
      <p v-show="bPassSuccessMsg" style="color:green;">
        비밀번호가 일치합니다.
      </p>
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
      user: {
        id: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        re_password: ''
      },
      userList: [],
      validpass: false,
      bPassErrorMsg: false,
      bPassSuccessMsg: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      if (!this.validCheck()) return
      alert('가입완료')
      console.log(this.user)
      this.initUserData()
    },
    validCheck() {
      if (
        this.user.id === '' ||
        this.user.name === '' ||
        this.user.password === ''
      ) {
        alert('누락값이 있습니다. 반드시 입력하세요.')
        return false
      } else if (!this.validpass) {
        alert('동일한 Password를 입력해주세요.')
        this.user.password = this.user.re_password = ''
        return false
      } else return true
    },

    checkPass() {
      if (this.user.password === this.user.re_password) {
        this.validpass = true
      } else {
        this.validpass = false
      }
    },
    checkPass2() {
      if (!this.user.password.startsWith(this.user.re_password)) {
        this.bPassSuccessMsg = false
        this.bPassErrorMsg = true
      } else {
        this.bPassErrorMsg = false
        if (this.user.password === this.user.re_password) {
          this.bPassSuccessMsg = true
        }
      }
    },

    initUserData() {
      this.user.id = ''
      this.user.name = ''
      this.user.phone = ''
      this.user.email = ''
      this.user.password = ''
      this.user.re_password = ''
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
