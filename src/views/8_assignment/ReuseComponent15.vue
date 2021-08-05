<template>
  <div>
    <label>조회 월 선택 </label>
    <select v-model.number="selectMonth">
      <option :value="n" :key="n" v-for="n in 12">{{ n }}</option>
    </select>
    <button @click="doClick">조회</button>
    <SummaryData
      :headers="headers"
      :items="monthItems"
      :sum="sum"
      :selectMonth="selectMonth"
    />
  </div>
</template>
<script>
import SummaryData from './SummaryData'

export default {
  name: '',
  components: { SummaryData },
  data() {
    return {
      headers: [
        { title: '연도', key: 'year' },
        { title: '월', key: 'month' },
        { title: '일', key: 'day' },
        { title: '수량', key: 'count' }
      ],
      items: [
        { id: 1, year: 2021, month: 7, day: 1, count: 10 },
        { id: 2, year: 2021, month: 7, day: 3, count: 15 },
        { id: 3, year: 2021, month: 8, day: 2, count: 5 },
        { id: 4, year: 2021, month: 8, day: 3, count: 4 },
        { id: 5, year: 2021, month: 8, day: 4, count: 7 },
        { id: 6, year: 2021, month: 6, day: 5, count: 8 },
        { id: 7, year: 2021, month: 6, day: 10, count: 6 },
        { id: 8, year: 2021, month: 8, day: 15, count: 11 },
        { id: 9, year: 2021, month: 7, day: 17, count: 30 },
        { id: 10, year: 2021, month: 9, day: 21, count: 52 }
      ],
      selectMonth: 1,
      monthItems: [],
      sum: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doClick() {
      this.monthItems.splice(0)
      this.sum = 0
      for (var index in this.items) {
        if (this.items[index].month === this.selectMonth) {
          console.log(this.items[index])
          this.monthItems.push(this.items[index])
          this.sum += this.items[index].count
        }
      }
    }
  }
}
</script>
