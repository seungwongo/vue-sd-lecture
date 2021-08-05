<template>
  <div>
    <h1>재사용 컴포넌트</h1>
    <button>추가</button>
    <button>삭제</button>
    <DataGrid
      selectType="textbox"
      checkedKey="id"
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
        { title: '품명', key: 'name' },
        { title: '재고수량', key: 'amount' },
        { title: '가격', key: 'price' }
      ],
      items: [
        {
          id: 1,
          name: '사과',
          amount: '10',
          price: '1500'
        },
        {
          id: 2,
          name: '복숭아',
          amount: '50',
          price: '3000'
        },
        {
          id: 3,
          name: '딸기',
          amount: '20',
          price: '2000'
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
    }
  }
}
</script>
