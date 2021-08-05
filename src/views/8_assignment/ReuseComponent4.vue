<template>
  <div>
    <PageTitle title="8월 온라인 교육" />
    <Education
      selectType="radio"
      checkedKey="name"
      :headers="headers"
      :items="items"
      @change-item="changeItem"
    />
  </div>
</template>
<script>
import PageTitle from '@/components/fragments/PageTitle'
import Education from '@/components/fragments/Education.vue'
export default {
  name: '',
  components: { PageTitle, Education },
  data() {
    return {
      headers: [
        { title: '과정명', key: 'name' },
        { title: '필수', key: 'most' },
        { title: '납기', key: 'deadline' },
        { title: '현재 진척도', key: 'now' },
        { title: '테스트', key: 'test' }
      ],
      items: [
        {
          name: '8월 환경안전 온라인 교육',
          most: '필수',
          deadline: '2021/08/31',
          now: '11%',
          test: 'N'
        },
        {
          name: '상호 존중 문화 온라인 교육',
          most: '필수',
          deadline: '2021/08/31',
          now: '50%',
          test: 'N'
        },
        {
          name: 'compliance 교육',
          most: '필수',
          deadline: '2021/08/15',
          now: '34%',
          test: 'N'
        },
        {
          name: '공정 온라인 교육',
          most: '선택',
          deadline: '2021/12/31',
          now: '0%',
          test: 'N'
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
      this.changeItem = data
    }
  }
}
</script>
