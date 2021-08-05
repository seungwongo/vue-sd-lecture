<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>Name</b></label>
      <input type="text" v-model="userName" placeholder="Enter Name" />

      <label><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" />

      <label><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter Password" />

      <label><b>Repeat Password</b></label>
      <input
        type="password"
        v-model="checkPassword"
        placeholder="Repeat Password"
      />

      <label><b>사번</b></label>
      <input type="text" v-model="id" placeholder="Enter ID Number" />

      <label><b>근무지</b></label>
      <select v-model="campus">
        <option :value="region.v" :key="region.v" v-for="region in regions">{{
          region.t
        }}</option>
      </select>
      <br />

      <label><b>사용자 권한</b></label>
      <label :key="role.v" v-for="role in roles">
        <input type="radio" :value="role.v" v-model="authority" />{{
          role.t
        }}</label
      >

      <br />

      <label><b>접근사이트</b></label>
      <label :key="region.v" v-for="region in regions">
        <input type="checkbox" :value="region.v" v-model="authorRegion" />{{
          region.t
        }}</label
      >
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
      user: {},
      userName: '',
      email: '',
      password: '',
      checkPassword: '',
      id: '',
      campus: '',
      authority: '',
      authorRegion: [],
      regions: [
        { t: '기흥', v: '01' },
        { t: '천안', v: '02' },
        { t: '아산1', v: '03' },
        { t: '아산2', v: '04' }
      ],
      roles: [
        { t: '일반', v: 'general' },
        { t: '개발자', v: 'dev' },
        { t: '운영자', v: 'admin' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      if (this.password !== this.checkPassword) {
        alert('패스워드가 일치하지 않습니다')
      } else {
        this.user.userName = this.userName
        this.user.email = this.email
        this.user.password = this.password
        this.user.campus = this.campus
        this.user.id = this.id
        this.user.authority = this.authority
        this.user.authorRegion = this.authorRegion
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
input[type='radio'],
input[type='checkbox'],
select {
  margin: 15px 5px 22px 5px;
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
