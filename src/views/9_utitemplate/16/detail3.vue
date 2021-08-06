<template>
  <div>
    <h1>GLass Info</h1>
    <hr />
    <table class="data-grid">
      <tr>
        <td>GLASS ID</td>
        <td>
          <input type="text" readonly="true" v-model="glassInfo.glassid" />
        </td>
      </tr>
      <tr>
        <td>STEP</td>
        <td>
          <input type="text" v-model="glassInfo.step" />
        </td>
      </tr>
      <tr>
        <td>STATUS</td>
        <td>
          <input type="text" v-model="glassInfo.status" />
        </td>
      </tr>
      <tr>
        <td>PRODTYPE</td>
        <td>
          <input type="text" v-model="glassInfo.prodtype" />
        </td>
      </tr>
      <tr>
        <td>PRODID</td>
        <td>
          <input type="text" v-model="glassInfo.prodid" />
        </td>
      </tr>
      <tr>
        <td>EQPID</td>
        <td>
          <input type="text" v-model="glassInfo.eqpid" />
        </td>
      </tr>
      <tr>
        <td>PROCID</td>
        <td><input type="text" v-model="glassInfo.procid" /></td>
      </tr>
    </table>

    <hr />

    <button @click="doEdit">수정</button>
    <button @click="goMainPage">목록</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      id: '',
      labels: [
        { title: 'GLASS ID', key: 'glassid' },
        { title: 'STEP', key: 'step' },
        { title: 'STATUS', key: 'status' },
        { title: 'PRODTYPE', key: 'prodtype' },
        { title: 'PRODID', key: 'prodid' },
        { title: 'EQPID', key: 'eqpid' },
        { title: 'PROCID', key: 'procid' }
      ],
      glassInfo: {
        glassid: '',
        step: '',
        status: '',
        prodtype: '',
        prodid: '',
        eqpid: '',
        procid: '',
        id: ''
      }
    }
  },
  setup() {},
  created() {
    this.id = this.$route.query.id
    this.getGlassinfo()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getGlassinfo() {
      this.glassInfo = await this.$get(`/glasses2/${this.id}`)
    },
    async goMainPage() {
      this.$router.push({ path: '/template/listDetail3' })
    },
    async doEdit() {
      this.$swal({
        title: 'Are you sure to Change?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change it!'
      }).then(async result => {
        if (result.isConfirmed) {
          await this.$put(`/glasses2/${this.glassInfo.id}`, {
            id: this.glassInfo.id,
            glassid: this.glassInfo.glassid,
            step: this.glassInfo.step,
            status: this.glassInfo.status,
            prodtype: this.glassInfo.prodtype,
            prodid: this.glassInfo.prodid,
            eqpid: this.glassInfo.eqpid,
            procid: this.glassInfo.procid
          })
          this.$swal('Change!', 'the Glass has been changed.', 'success')
          this.getGlassinfo()
        }
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
.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}
.data-grid th,
.data-grid td {
  border: 1px solid #222;
  padding: 5px;
  text-align: left;
}
/* Full-width input fields */
input[type='text'],
input[type='password'],
select {
  width: 100%;
  padding: 15px;
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
button {
  margin: 5px 5px 5px 5px;
  cursor: pointer;
}
</style>
