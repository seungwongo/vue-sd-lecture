<template>
  <div>
    <!-- <button>삭제</button> -->
    <SimpleGrid
      selectType="checkbox"
      checkedKey="id"
      :headers="headers"
      :items="items"
      @change-item="changeItems"
    />
    <br />
    <SearchDetail @change-item="chk()" />
    <p align="left" v-show="show"><b>▣ 상세정보</b></p>
    <SimpleGrid
      v-show="show"
      selectType="list"
      checkedKey="id"
      :headers="subheaders"
      :items="items"
      @change-item="changeItems"
    />
  </div>
</template>
<script>
import SimpleGrid from '@/components/fragments/SimpleGrid'
import SearchDetail from './SearchDetail'
export default {
  name: '',
  components: { SimpleGrid, SearchDetail },
  data() {
    return {
      show: false,
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
          email: 'riu@mail.com',
          addr: '서울시'
        },
        {
          id: 2,
          name: '김종국',
          phone: '0101010101',
          email: 'kim@mail.com',
          addr: '서울시'
        },
        {
          id: 3,
          name: '원빈',
          phone: '0101010101',
          email: 'kim@mail.com',
          addr: '서울시'
        },
        {
          id: 4,
          name: '전지현',
          phone: '0101010101',
          email: 'kim@mail.com',
          addr: '서울시'
        }
      ],
      subheaders: [
        { title: '이름', key: 'name' },
        { title: '연락처', key: 'phone' },
        { title: '이메일', key: 'email' },
        { title: '주소', key: 'addr' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeItem(data) {
      console.log(data)
    },
    changeItems(data) {
      console.log(data)
    },
    chk(data) {
      // console.log(data)
      if (this.show) {
        this.show = false
      } else this.show = true
    }
  }
}
</script>
