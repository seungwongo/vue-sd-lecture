<template>
  <div>
    <button>삭제</button>
    <DataGrid
      selectType="checkbox"
      checkedKey="id"
      :enableFilter="true"
      :headers="headers"
      :items="items"
      @change-item="changeItem"
    />
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid'

export default {
  name: '',
  components: { DataGrid },
  data() {
    return {
      headers: [
        { title: '이름', key: 'name' },
        { title: '연락처', key: 'phone' },
        { title: '이메일', key: 'email' }
      ],
      items: [
        {
          id: 1,
          name: '유재석',
          phone: '0101010101',
          email: 'ryu@mail.com',
          addr: '서울시'
        },
        {
          id: 2,
          name: '김종국',
          phone: '32233424',
          email: 'kim@mail.com',
          addr: '서울시'
        },
        {
          id: 3,
          name: '하하',
          phone: '553345353',
          email: 'ha@mail.com',
          addr: '서울시'
        },
        {
          id: 4,
          name: '지석진',
          phone: '123123',
          email: 'ji@mail.com',
          addr: '서울시'
        }
      ],
      weekHeaders: []
    }
  },
  setup() {},
  created() {
    var headers = [{ title: 'project', key: 'project' }]

    for (var i = 20; i <= 31; i++) {
      headers.push({ title: 'w' + i, key: 'w' + i })
    }

    this.weekHeaders = headers

    console.log(this.weekHeaders)
  },
  mounted() {},
  unmounted() {},
  methods: {
    changeItem(data) {
      console.log(data)
    }
  }
}
</script>
