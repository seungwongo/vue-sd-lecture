<template>
  <div>
    <div class="container">
      <h1>Scroe 입력</h1>
      <hr />

      <label><b>Pruject Name</b></label>
      <input type="text" v-model="project" placeholder="Project Name" />
      <br />
      <label><b>Language</b></label>

      <select v-model="lang">
        <option value="JAVA">JAVA</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
      </select>
      <br />
      <label><b>순환참조 (CC) Score</b></label>
      <input type="text" v-model="cc" placeholder="Enter CC Score" />
      <label><b>코드중복 (DC) Score</b></label>
      <input type="text" v-model="dc" placeholder="Enter DC Score" />
      <label><b>다중참조 (MCD) Score</b></label>
      <input type="text" v-model="mcd" placeholder="Enter MCD Score" />
      <label><b>코드길이 (LOC) Score</b></label>
      <input type="text" v-model="loc" placeholder="Enter LOC Score" />

      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button class="registerbtn" @click="doCreate">생성</button>&nbsp;
      <button class="searchbtn" @click="goToList">조회</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      project: '',
      lang: '',
      cc: '',
      dc: '',
      mcd: '',
      loc: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doCreate() {
      this.$swal({
        //   팝업 문구 및 디자인 설정
        title: 'Are you sure to create?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, create it!'
      }).then(async result => {
        //   result가 컨펌이면
        if (result.isConfirmed) {
          // jason.db 에 아래 부분을 저장한다.
          const r = await this.$post('/samscore', {
            project: this.project,
            lang: this.lang,
            cc: this.cc,
            dc: this.dc,
            mcd: this.mcd,
            loc: this.loc
          })
          console.log(r)
          this.$swal('Created!', 'New user has been created.', 'success')
        }
      })
    },
    goToList() {
      this.$router.push({ path: '/uitemplate/listtodetail3' })
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
  width: 49.5%;
  opacity: 0.9;
}
.registerbtn:hover {
  opacity: 1;
}
.searchbtn {
  background-color: #046daa;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 49.5%;
  opacity: 0.9;
}
.searchbtn:hover {
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
