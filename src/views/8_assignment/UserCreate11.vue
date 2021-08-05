<template>
  <div>
    <div class="container">
      <h1>[ 회원가입 ]</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <!-- 추가 항목들 -->
      <label for="ag"><b>Are you over 18 Years old ? &nbsp;</b></label>
      <input type="checkbox" id="ag" v-model="ag" /><br /><br />

      <label for="name"><b>UserName</b></label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="Enter UserName"
      /><br />

      <label for="gender"><b>UserGender&nbsp;&nbsp;</b></label>
      <select style="width:50px;height:30px" id="gender" v-model="gender">
        <option value="남">남</option>
        <option value="여">여</option>
      </select>

      <label for="birthyyyy"
        ><b>&nbsp;&nbsp;&nbsp;&nbsp;BirthYear&nbsp;&nbsp;</b></label
      >
      <input
        style="width:70px;height:30px"
        type="text"
        id="birthyyyy"
        v-model="birthyyyy"
        maxlength="4"
        placeholder="YYYY"
        oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
      />

      <label for="birthmm"><b>&nbsp;&nbsp;BirthMonth&nbsp;&nbsp;</b></label>
      <input
        style="width:60px;height:30px"
        type="text"
        id="birthmm"
        v-model="birthmm"
        maxlength="2"
        placeholder="MM"
        oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
      />

      <label for="birthdd"><b>&nbsp;&nbsp;BirthDay&nbsp;&nbsp;</b></label>
      <input
        style="width:60px;height:30px"
        type="text"
        id="birthdd"
        v-model="birthdd"
        maxlength="2"
        placeholder="DD"
        oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
      /><br /><br />

      <label><b>Phone Number&nbsp;&nbsp;&nbsp;</b></label>
      <input
        style="width:60px;height:30px"
        type="text"
        id="phone1"
        v-model="phone1"
        maxlength="3"
        placeholder="000"
        oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
      />
      &nbsp;&nbsp;<input
        style="width:70px;height:30px"
        type="text"
        id="phone2"
        v-model="phone2"
        maxlength="4"
        placeholder="1234"
        oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
      />
      &nbsp;&nbsp;<input
        style="width:70px;height:30px"
        type="text"
        id="phone3"
        v-model="phone3"
        maxlength="4"
        placeholder="5678"
        oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
      /><br /><br />

      <label for="add"><b>Address</b></label>
      <input
        type="text"
        id="add"
        v-model="add"
        placeholder="Enter Address"
      /><br />

      <!-- 기존 내용들 -->

      <label for="email"><b>Email</b></label>
      <input type="text" id="email" v-model="email" placeholder="Enter Email" />

      <label for="pass"><b>Password</b></label>
      <input
        type="password"
        id="pass"
        v-model="pass"
        placeholder="Enter Password"
      />

      <label for="rpass"><b>Repeat Password</b></label>
      <input
        type="password"
        id="rpass"
        v-model="rpass"
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
      user: {},
      // ageCheck: '',
      // userName: '',
      // userGender: '',
      // userBirthyear: '',
      // userBirthmonth: '',
      // userBirthday: '',
      // userAddress: '',
      // userEmail: '',
      // userPass: '',
      // userRpass: ''

      ag: '',
      name: '',
      gender: '',
      birthyyyy: '',
      birthmm: '',
      birthdd: '',
      add: '',
      email: '',
      pass: '',
      rpass: ''

      // email: ''
      // userName: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      // this.user.ag = this.ageCheck
      // this.user.name = this.userName
      // this.user.gender = this.userGender
      // this.user.birthyyyy = this.userBirthyear
      // this.user.birthmm = this.userBirthmonth
      // this.user.birthdd = this.userBirthday
      // this.user.add = this.userAddress
      // this.user.email = this.userEmail
      // this.user.pass = this.userPass
      // this.user.rpass = this.userRpass

      this.user.ag = this.ag
      this.user.name = this.name
      this.user.gender = this.gender
      this.user.birthyyyy = this.birthyyyy
      this.user.birthmm = this.birthmm
      this.user.birthdd = this.birthdd
      this.user.add = this.add
      this.user.email = this.email
      this.user.pass = this.pass
      this.user.rpass = this.rpass

      // userPhone1
      // userPhone2
      // userPhone3
      // this.user.address = this.userAddress
      // this.user.email = this.userEmail
      // this.user.pass = this.userPass
      // this.user.repeatpass = this.userRepeatpass

      console.log(this.user)
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
/* 박스 아이템 가운데 정렬 */
.itemcenter {
  align-items: center;
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
