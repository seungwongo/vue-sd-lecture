<template>
  <div>
    <table class="customer-table">
      <tr>
        <th>고객아이디</th>
        <!-- 4. 선택된 정보를 v-model로 binding해서 정보 보여주기 -->
        <td>{{ userID2.id }}</td>
      </tr>
      <tr>
        <th>고객명</th>
        <td><input type="text" v-model="userID2.name" /></td>
      </tr>
      <tr>
        <th>회사명</th>
        <td><input type="text" v-model="userID2.company" /></td>
      </tr>
      <tr>
        <th>이메일</th>
        <td><input type="text" v-model="userID2.email" /></td>
      </tr>
      <tr>
        <th>연락처</th>
        <td><input type="text" v-model="userID2.phone" /></td>
      </tr>
      <tr>
        <th>주소</th>
        <td><input type="text" v-model="userID2.address" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="goToDetail">취소</button>
      <button @click="doSave">저장</button>
      <!-- 5. doSave함수 호출 -->
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      items: [],
      userId: {},
      userID2: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.query.id)
    this.userID2 = this.$route.query.id // 1. created 하는 순간에 받아오는 id를 customerID에 넣어놓고
    this.getUserId() // 2. 함수 호출
  },
  mounted() {},
  unmounted() {},
  methods: {
    goToDetail() {
      this.$router.push({
        path: '/uitemplate/detail3',
        query: { id: this.userID2 }
      })
    },
    async doSave() {
      const { name, empno, singlekey, dept, knoxid } = this.userId // 7.  여러가지 값 중에 여기서 선언해 놓은거만 뽑아서 put 넣어준다.
      const r = await this.$put(`/systemusersinfo/${this.userID2}`, {
        // 6. put을 통해서 저장
        name,
        empno,
        singlekey,
        dept,
        knoxid
      })
      console.log('result', r)
    },
    async getUserId() {
      this.userId = await this.$get(`/systemusersinfo/${this.userID2}`) // 3. 현재 선택된 customer 정보를 가져와서 customer에 넣어
    }
  }
}
</script>
<style scoped>
.customer-table {
  width: 100%;
}
.customer-table,
.customer-table th,
.customer-table td {
  border-collapse: collapse;
}
.customer-table th,
.customer-table td {
  border: 1px solid #222;
  padding: 10px;
}
.btn-area {
  text-align: center;
  margin-top: 10px;
}
.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
