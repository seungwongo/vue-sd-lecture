<template>
  <div>
    <div class="container">
      <h1>EQPID 등록</h1>
      <hr />
      <label><b>ID</b></label>
      <input type="text" v-model="id" placeholder="설비id를 입력하세요" />
      <br />
      <label><b>EQPID</b></label>
      <input type="text" v-model="eqpid" placeholder="설비를 입력하세요" />
      <br />
      <label><b>Site</b></label>
      <input type="text" v-model="siteid" placeholder="Site 입력하세요" />
      <label><b>Area</b></label>
      <input type="text" v-model="areaid" placeholder="Area 입력하세요" />
      <label><b>Room</b></label>
      <input type="text" v-model="roomid" placeholder="Room 입력하세요" />
      <label><b>효율</b></label>
      <input type="text" v-model.number="eff" placeholder="효율입력하세요" />

      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button class="registerbtn" @click="doCreate">생성</button>

      <button class="cancelbtn" @click="goInitPage">취소</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      id: '',
      eqpid: '',
      siteid: '',
      areaid: '',
      roomid: '',
      eff: ''
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
          const r = await this.$post('/eqp', {
            // 서버로 보내는 데이터 json 서버, 데이터 내용
            eqpid: this.eqpid,
            siteid: this.siteid,
            areaid: this.areaid,
            roomid: this.roomid,
            eff: this.eff
          })
          console.log(r)
          this.$swal('Created!', 'New user has been created.', 'success')
        }
      })
    },
    goInitPage() {
      this.$router.push({ path: '/ui/listtodetail3' })
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
  width: 50%;
  opacity: 0.9;
}
.cancelbtn {
  background-color: gray;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
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
