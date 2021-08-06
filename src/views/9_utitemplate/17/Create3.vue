<template>
  <div>
    <div class="container">
      <h1>신규설비 정보</h1>
      <hr />
      <label><b>설비ID</b></label>
      <input type="text" v-model="eqpId" placeholder="설비명 입력" />
      <br />
      <label><b>사업장코드</b></label>
      <select v-model="siteid">
        <option value="FT10">국내</option>
        <option value="FT60">베트남 법인</option>
        <option value="FT70">인도 법인</option>
      </select>
      <label><b>라인</b></label>
      <input type="text" v-model="line" placeholder="라인정보 입력" />
      <label><b>공정</b></label>
      <input type="text" v-model="group" placeholder="공정정보 입력" />
      <label><b>유휴설비 여부</b></label>
      <select v-model="isActive">
        <option value="Y">Y</option>
        <option value="N">N</option>
      </select>
      <hr />
      <p>
        <!-- By creating an account you agree to our <a href="#">Terms & Privacy</a>. -->
      </p>

      <button class="registerbtn" @click="doCreate">등록</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      // id: '',
      eqpId: '',
      siteid: '',
      line: '',
      group: '',
      isActive: 'N'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doCreate() {
      this.$swal({
        title: 'Are you sure to create?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, create it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const r = await this.$post('/facilities', {
            eqpId: this.eqpId,
            siteid: this.siteid,
            line: this.line,
            group: this.group,
            isActive: this.isActive
          })
          this.$swal('Created!', 'New user has been created.', 'success')

          console.log(r)
          this.goToMain()
        }
      })
    },
    async goToMain() {
      this.$router.push({
        path: '/uitemplate/listtodetail3',
        query: { searchName: this.eqpId }
      })
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
input[type='password'],
select {
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
© 2021 GitHub, Inc.
