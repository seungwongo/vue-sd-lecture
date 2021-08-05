<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />
      <label><b>Name</b></label>
      <input v-model="user.name" type="text" placeholder="Enter Name" />

      <label><b>Gender</b></label> <br />
      <p>
        <label
          ><input type="radio" value="m" v-model="user.gender" />MALE</label
        >
        <label>
          <input type="radio" value="f" v-model="user.gender" />FEMALE</label
        >
      </p>

      <label><b>Email</b></label>
      <input v-model="user.email" type="text" placeholder="Enter Email" />

      <label><b>Cell phone</b></label>
      <input
        v-model="user.phone"
        type="text"
        placeholder="Enter Phone number"
      />

      <label><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        placeholder="Enter Password"
      />

      <label><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" />

      <label><b>Interests</b></label>
      <p>
        <label v-for="sport in sports" v-bind:key="sport.v">
          <input type="checkbox" :value="sport.v" v-model="user.interests" />{{
            sport.k
          }}&nbsp;
        </label>
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
        name: '',
        gender: '',
        email: '',
        phone: '',
        password: '',
        interests: []
      },
      sports: [
        { k: '골프', v: '1' },
        { k: '가라데', v: '2' },
        { k: '근대5종', v: '3' },
        { k: '농구', v: '4' },
        { k: '다이빙', v: '5' },
        { k: '럭비', v: '6' },
        { k: '레슬링', v: '7' },
        { k: '배구', v: '8' },
        { k: '배드민턴', v: '9' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      console.log(this.user)
    },
    checkName() {
      if (this.user.name === '') {
        alert('name is mandatory')
        this.isEmptyName = true
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

.required {
  border: 2px dashed red;
}
</style>
