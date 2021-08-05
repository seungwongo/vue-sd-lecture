<template>
  <div>
    <P> [T REQUEST LIST] </P>
    <SimpleGrid2
      :headers="headers"
      :items="items"
      selectType="checkbox"
      checkedKey="stepid"
      @change-item="showDetail"
    />
    <P> [UPDATE INFORMATION] </P>
    <SimpleGrid2
      :headers="headers2"
      :items="items2"
      selectType="checkbox"
      checkedKey="updatetime"
      @change-item="showDetail"
    />
  </div>
</template>
<script>
import SimpleGrid2 from './SimpleGrid2.vue'
export default {
  name: '',
  components: { SimpleGrid2 },
  data() {
    return {
      headers: [
        { title: 'STEPID', key: 'stepid' },
        { title: 'EQPID', key: 'eqpid' },
        { title: 'COMPEQPID', key: 'compeqpid' },
        { title: 'LOTID', key: 'lotid' }
      ],
      items: [
        {
          stepid: 'MZ',
          eqpid: 'A3HH2',
          compeqpid: 'A3HH5',
          lotid: 'A8ZZ'
        },
        {
          stepid: 'AA1',
          eqpid: 'A3HH3',
          compeqpid: 'A3HH5',
          lotid: 'A8ZZ'
        },
        {
          stepid: 'VBBD',
          eqpid: 'A3HH6',
          compeqpid: 'A3HH5',
          lotid: 'A8ZZ'
        }
      ],
      headers2: [
        { title: 'UPDATETIME', key: 'updatetime' },
        { title: 'UPDATEUSER', key: 'updateuser' },
        { title: 'STATE', key: 'state' }
      ],
      items2: [
        {
          updatetime: '11:30',
          updateuser: 'hyeunah.kim',
          state: 'Y'
        },
        {
          updatetime: '12:30',
          updateuser: 'yuri.kim',
          state: 'N'
        },
        {
          updatetime: '13:30',
          updateuser: 'hyeunah.kim',
          state: 'Y'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    showDetail(data) {
      console.log(data)
    }
  }
}
</script>
