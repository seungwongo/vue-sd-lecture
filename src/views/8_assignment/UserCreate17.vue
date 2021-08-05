<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>

      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />
      <!-- <div style="color:red; font-size: 30px;"></div> -->
      <label><b>임직원 여부</b></label>
      <label><input type="radio" value="Y" v-model="employFlag" />Y</label>
      <label><input type="radio" value="N" v-model="employFlag" />N </label>
      <p></p>

      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />

      <label><b>Name</b></label>
      <input type="text" v-model="userName" placeholder="Enter Name" />

      <label><b>Password</b></label>
      <input
        type="password"
        v-model="userPassword"
        placeholder="Enter Password"
      />

      <label><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" />
      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button class="registerbtn" @click="register">가입하기</button>
      <img width="180" height="80" v-bind:src="imgSrc" />
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
        password: ''
      },
      email: '',
      userName: '',
      userPassword: '',
      employFlag: 'Y',
      imgSrc:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDNfMjIy%2FMDAxNjEyMzI1MDgxNzk5.ljyqaz95-fcHqg4JPeKRWmGCZ69W2Xc_pKlizR3OtAQg.STPe7gKLOlxXAFkS_yo-kCG9fMDDYXn73hBnDzSEL3gg.JPEG.kmdglobal%2F011UmtlRCWFbSUfoKGakluu.jpg&type=l340_165'
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
      this.user.password = this.userPassword
      //      console.log('???' + this.user.email)
      console.log('Email: ' + this.user.email)
      console.log('Name:' + this.user.name)
      console.log('Password:' + this.user.password)
      console.log('Employflag:' + this.employFlag)
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
