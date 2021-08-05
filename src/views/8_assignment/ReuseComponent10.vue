<template>
  <div>
    <MoreSimpleGrid
      :headers="headers"
      :items="items"
      checkedKey="id"
      @del-item="delUser"
    />
  </div>
</template>
<script>
import MoreSimpleGrid from './MoreSimpleGrid'
export default {
  name: '',
  components: { MoreSimpleGrid },
  data() {
    return {
      headers: [
        { title: '이름', key: 'name' },
        { title: '이메일', key: 'email' },
        { title: '권한', key: 'permission' }
      ],
      items: [
        {
          id: 1,
          name: '유재석',
          phone: '010010101',
          email: 'ryu@mail.com',
          permission: 'admin'
        },
        {
          id: 2,
          name: '김종국',
          phone: '1231231',
          email: 'kim@mail.com',
          permission: 'dev'
        },
        {
          id: 3,
          name: '하하',
          phone: '0103453451',
          email: 'haha@mail.com',
          permission: 'user'
        },
        {
          id: 4,
          name: '지석진',
          phone: '01034534501',
          email: 'jiji@mail.com',
          permission: 'user'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    delUser(data) {
      for (let i = 0; i < data.length; i++) {
        console.log(this.items[data[i] - 1])
      }
    }
  }
}
</script>
