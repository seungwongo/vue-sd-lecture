<template>
  <div>
    <div class="container">
      <h1>Recipe</h1>
      <button @click="goToListToDetail">조회 화면으로 돌아가기</button>
      <hr />

      <label><b>레시피명</b></label>
      <input type="text" v-model="rcp.name" placeholder="Enter Recipe Name" />
      <label><b>모델명</b></label>
      <input type="text" v-model="rcp.model" placeholder="Enter Model Name" />
      <label><b>해상도</b></label>
      <input
        type="text"
        v-model="rcp.resolution"
        placeholder="Enter Panel Resolution"
      />
      <label><b>인치</b></label>
      <input type="number" v-model="rcp.inch" placeholder="Enter Panel Inch" />
      <label><b>Dot(High)</b></label>
      <input
        type="number"
        v-model="rcp.highDot"
        placeholder="Enter High Dot Spec"
      />
      <label><b>Dot(Off)</b></label>
      <input
        type="number"
        v-model="rcp.offDot"
        placeholder="Enter Off Dot Spec"
      />
      <label><b>Line(Open)</b></label>
      <input
        type="number"
        v-model="rcp.openLine"
        placeholder="Enter Line Open Spec"
      />
      <label><b>Line(Dim)</b></label>
      <input
        type="number"
        v-model="rcp.dimLine"
        placeholder="Enter Dim Line Spec"
      />

      <button class="registerbtn" @click="doCreate">생성</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      rcp: {
        name: '',
        model: '',
        resolution: '',
        inch: '',
        highDot: 0,
        offDot: 0,
        openLine: 0,
        dimLine: 0
      }
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    if (this.$route.query.id == null) return
    this.rcpId = this.$route.query.id
    this.getRcp()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doCreate() {
      if (this.rcp.name === '') {
        alert('레시피명이 비어있으면 안됩니다.')
        return
      }
      if (this.rcp.model === '') {
        alert('모델명이 비어있으면 안됩니다.')
        return
      }
      if (this.rcp.resolution === '') {
        alert('해상도 정보가 비어있으면 안됩니다.')
        return
      }
      if (this.rcp.inch === '') {
        alert('인치 정보가 비어있으면 안됩니다.')
        return
      }
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
          if (this.rcp.highDot === '') this.rcp.highDot = 0
          if (this.rcp.offDot === '') this.rcp.offDot = 0
          if (this.rcp.openLine === '') this.rcp.openLine = 0
          if (this.rcp.dimLine === '') this.rcp.dimLine = 0

          const {
            name,
            model,
            resolution,
            inch,
            highDot,
            offDot,
            openLine,
            dimLine
          } = this.rcp

          const r = await this.$post('/recipes', {
            name,
            model,
            resolution,
            inch,
            highDot,
            offDot,
            openLine,
            dimLine
          })
          console.log(r)
          this.$swal('Created!', 'New Recipe has been created.', 'success')
          this.$router.push({ path: '/uitemplate/listtodetail3' })
        }
      })
    },
    async getRcp() {
      this.rcp = await this.$get(`/recipes/${this.rcpId}`)
      this.rcp.name += '_Copy'
    },
    goToListToDetail() {
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
input[type='number'],
select {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type='text']:focus,
input[type='number']:focus {
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
