<template>
  <div>
    <h2 style="text-align:left">사용자 권한 Update</h2>
    <button style="width: 80px; float: right;" @click="add">추가</button>
    <button style="width: 80px; float: right;" @click="remove">삭제</button>
    <UserUpdate
      selectType="checkbox"
      checkedKey="id"
      :headers="headers"
      :items="items"
      @change-item="changeItem"
    />
  </div>
</template>
<script>
import UserUpdate from './UserUpdate.vue'
export default {
  name: '',
  components: { UserUpdate },
  data() {
    return {
      headers: [
        { title: '이름', key: 'name' },
        { title: 'KnoxID', key: 'nid' },
        { title: '부서', key: 'dept' },
        { title: '권한', key: 'auth' }
      ],
      items: [
        {
          id: 1,
          name: '홍길동',
          nid: 'gildogn.hong',
          dept: '스마트팩토리그룹',
          system2: 'UI',
          auth: 'general'
        },
        {
          id: 2,
          name: '김영수',
          nid: 'ys80.kim',
          dept: '시스템개발그룹',
          system2: 'Workplace',
          auth: 'developer'
        },
        {
          id: 3,
          name: '임걱정',
          nid: 'jung.im',
          dept: 'SE그룹',
          system2: 'Mobile',
          auth: 'master'
        },
        {
          id: 4,
          name: '',
          nid: '',
          dept: '',
          system2: '',
          auth: ''
        },
        {
          id: 5,
          name: '',
          nid: '',
          dept: '',
          system2: '',
          auth: ''
        },
        {
          id: 6,
          name: '',
          nid: '',
          dept: '',
          system2: '',
          auth: ''
        },
        {
          id: 7,
          name: '',
          nid: '',
          dept: '',
          system2: '',
          auth: ''
        }
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
    remove(index) {
      this.items.splice(index, 1)
    },
    add() {}
  }
}
</script>
