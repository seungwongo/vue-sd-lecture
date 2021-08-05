<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.id" v-for="user in userList">
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import api from '@/mixins/api.js'
export default {
  name: '',
  components: {},
  mixins: [api],
  data() {
    return {
      cities: [
        { t: '서울', v: '02' },
        { t: '부산', v: '21' },
        { t: '대구', v: '23' },
        { t: '제주', v: '064' }
      ],
      userList: []
    }
  },
  setup() {},
  beforeCreate() {},
  created() {},
  mounted() {
    console.log('믹스인을 호출해서 사용하는 컴포넌트 mounted')
    this.getUserList()
  },
  unmounted() {
    // this.cities = null
  },
  methods: {
    async getUserList() {
      this.userList = await this.$get('http://localhost:3000/users')
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
