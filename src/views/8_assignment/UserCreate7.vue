<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <!-- <label><b>Name</b></label>
      <input type="text" v-model="userName" placeholder="Enter Name" />

      <label><b>ID</b></label>
      <input type="text" v-model="id" placeholder="Enter ID" />

      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />

      <label><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter Password" />

      <label><b>Repeat Password</b></label>
      <input
        type="password"
        v-model="re_password"
        @blur="doPasswordCheck"
        placeholder="Repeat Password"
      />

      <label><b>Phone</b></label>
      <input type="text" v-model="phone" placeholder="Enter Phone" /> -->

      <label><b>개인정보수집</b></label>
      <label><input type="radio" value="01" v-model="privateInfo" />동의</label>
      <label
        ><input
          type="radio"
          value="02"
          v-model="privateInfo"
          @change="doPrivateInfo"
        />미동의</label
      >
      <br />
      <br />

      <label><b>마케팅 수신동의</b></label>
      <label>
        ( <input type="checkbox" value="01" v-model="marketings" />이메일</label
      >
      <label
        ><input type="checkbox" value="02" v-model="marketings" />SMS</label
      >
      <label
        ><input type="checkbox" value="03" v-model="marketings" />앱Push알림
        )</label
      >

      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button
        class="registerbtn"
        @click="register"
        :disabled="privateInfo != '01'"
        :class="{ gray: privateInfo != '01' }"
      >
        가입하기
      </button>
      <!-- <div v-html="htmlRegister"></div> -->
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
      userName: '',
      id: '',
      email: '',
      password: '',
      re_password: '',
      phone: '',
      privateInfo: '01',
      marketings: [],
      isPasswordNotEqual: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      // this.user.name = this.userName
      // this.user.id = this.id
      // this.user.email = this.email
      // this.user.password = this.password
      // this.user.re_password = this.re_password
      // this.user.phone = this.phone
      this.user.privateInfo = this.privateInfo
      this.user.marketings = this.marketings
      console.log(this.user)
    },
    doPasswordCheck() {
      if (this.password !== this.re_password) {
        this.isPasswordNotEqual = true
        alert('password가 일치하지 않습니다.')
      } else {
        this.isPasswordNotEqual = false
      }
    },
    doPrivateInfo() {
      if (this.privateInfo === '02') {
        alert('개인정보수집을 동의하지 않으시면 회원가입을 할 수 없습니다.')
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

.gray {
  background-color: gray;
}
</style>
