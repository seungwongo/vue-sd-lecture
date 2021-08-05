<template>
  <div>
    <p>현재 접속 권한: admin</p>
    <Rolefilter defaultValue="admin" @change-item="getUserList" />
    <button @click="doSearch">search</button>
    <table>
      <thead>
        <tr>
          <th>SITE</th>
          <th>LINE</th>
          <th>EQP</th>
          <th>효율</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.id" v-for="user in userList">
          <td>{{ user.site }}</td>
          <td>{{ user.line }}</td>
          <td>{{ user.eqp }}</td>
          <td>{{ user.eff }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Rolefilter from './RoleFilter'
export default {
  name: '',
  components: { Rolefilter },
  data() {
    return {
      userList: [
        {
          site: '',
          line: '',
          eqp: '',
          eff: '',
          id: ''
        }
      ],
      list1: [
        {
          site: '본사',
          line: 'asan',
          eqp: 'asan_eqp_01',
          eff: '100%'
        },
        {
          site: '본사',
          line: 'asan',
          eqp: 'asan_eqp_02',
          eff: '44%'
        },
        {
          site: '본사',
          line: 'asan',
          eqp: 'asan_eqp_03',
          eff: '55%'
        }
      ],
      list2: [
        {
          site: '법인',
          line: 'sdv',
          eqp: 'sdv_eqp_01',
          eff: '33%'
        },
        {
          site: '법인',
          line: 'sdt',
          eqp: 'sdt_eqp_02',
          eff: '23%'
        },
        {
          site: '법인',
          line: 'sdd',
          eqp: 'sdd_eqp_03',
          eff: '57%'
        }
      ],
      list3: [
        {
          site: '외주',
          line: 'U2',
          eqp: 'u2_eqp_01',
          eff: '43%'
        },
        {
          site: '외주',
          line: 'U3',
          eqp: 'u3_eqp_02',
          eff: '76%'
        },
        {
          site: '외주',
          line: 'U4',
          eqp: 'u4_eqp_03',
          eff: '11%'
        }
      ],
      role: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getUserList()
  },
  unmounted() {},
  methods: {
    getUserList(data) {
      this.role = data
    },
    doSearch() {
      if (this.role === 'ASAN') {
        this.userList = this.list1
      }
      if (this.role === 'OUTSITE') {
        this.userList = this.list2
      }
      if (this.role === 'OTHER') {
        this.userList = this.list3
      }
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
