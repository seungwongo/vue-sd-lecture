<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>Name</b></label>
      <input type="text" v-model="user.name" placeholder="Enter Name" />

      <label><b>Email</b></label>
      <input type="text" v-model="user.email" placeholder="Enter Email" />

      <label><b>Phone</b></label>
      <input type="text" v-model="user.phone" placeholder="Enter Phone" />

      <label><b>Gender</b></label>
      <br />
      <select v-model="user.gender">
        <option value="male"> 남자 </option>
        <option value="female"> 여자 </option>
        <option value="etc"> 기타 </option>
      </select>
      <br />
      <!-- <input type="text" v-model="user.gender" placeholder="Enter Gender" /> -->

      <label><b>Company</b></label>
      <input type="text" v-model="user.company" placeholder="Enter Company" />

      <label><b>Password</b></label>
      <input
        ref="pwd"
        type="password"
        v-model="user.password"
        placeholder="Enter Password"
      />

      <label><b>Repeat Password</b></label>
      <input
        type="password"
        v-model="user.repassword"
        placeholder="Repeat Password"
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
      user: {
        name: '',
        password: '',
        repassword: '',
        email: '',
        phone: '',
        gender: 'female',
        company: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      if (this.user.password === this.user.repassword) {
        console.log(this.user)
      } else {
        alert('Not Matched Password!!')
        this.$refs.pwd.focus() //feoefoefo
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
select {
  width: 150px; /* 원하는 너비설정 */
  padding: 0.1em 0.1em; /* 여백으로 높이 설정 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #999;
  border-radius: 0px; /* iOS 둥근모서리 제거 */
  margin: 5px 0 22px 0;
}
</style>
