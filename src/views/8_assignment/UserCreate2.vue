<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />

      <label><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter Password" />

      <label><b>Repeat Password</b></label>
      <input
        type="password"
        v-model="Repassword"
        placeholder="Repeat Password"
      />

      <label>
        <p><b> 권한 선택</b></p>
        <input type="radio" value="01" v-model="role" /> 일반사용자</label
      >
      <label> <input type="radio" value="02" v-model="role" /> 관리자</label>
      <br />
      <p><b> Site 선택</b></p>
      <select v-model="city">
        <option value="01">본사</option>
        <option value="02">국내지사</option>
        <option value="03">해외</option>
      </select>

      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <label>
        <input type="checkbox" v-model="agree" /> 개인정보 수집에 동의합니다
      </label>

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
      user: {},
      email: '',
      password: '',
      Repassword: '',
      role: '01',
      city: '01',
      agree: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      this.user.email = this.email
      this.user.password = this.password
      this.user.Repassword = this.Repassword
      this.user.role = this.role
      this.user.city = this.city
      this.user.agree = this.agree
      console.log(this.user)
      console.log(this.password)
      console.log(this.Repassword)
      console.log(this.role)
      console.log(this.city)
      console.log(this.agree)
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
