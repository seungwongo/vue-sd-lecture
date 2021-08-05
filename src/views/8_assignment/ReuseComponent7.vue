<template>
  <div>
    <SearchMulti
      title="설비"
      selectType="checkbox"
      :items="eqpItems"
      eventName="doSearchText"
      @doSearchText="doSearchText"
    />

    <p></p>

    <SearchMulti
      title="공정"
      selectType=""
      :items="stepItems"
      eventName="doSearchText"
      @doSearchText="doSearchText"
    />
  </div>
</template>
<script>
import SearchMulti from './SearchMulti'
export default {
  name: '',
  components: { SearchMulti },
  data() {
    return {
      //   eqpItems: 'eqp01,eqp02,eqp03'
      eqpItems: [
        { key: 'eqp01', disp: 'eqp01(eqp01)' },
        { key: 'eqp02', disp: 'eqp02(eqp02)' },
        { key: 'eqp03', disp: 'eqp03(eqp03)' }
      ],
      stepItems: [
        { key: 'step01', disp: 'stepname01(step01)' },
        { key: 'step02', disp: 'stepname02(step02)' },
        { key: 'step03', disp: 'stepname03(step03)' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearchText(data) {
      console.log('db에서 %' + data + '%를 검색한 결과만 보여줍니다.')
    }
  }
}
</script>
