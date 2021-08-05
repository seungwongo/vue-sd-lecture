<template>
  <div>
    <Score
      selectType="checkbox"
      checkedKey="projectname"
      v-bind:headers="headers"
      v-bind:langs="langs"
      v-bind:items="items"
      @change-item="changeScore"
    />
  </div>
</template>
<script>
import Score from './Score'

export default {
  name: '',
  components: { Score },

  data() {
    return {
      headers: [
        { title: '순환참조', key: 'CC' },
        { title: '동일코드', key: 'DC' },
        { title: '코드길이', key: 'LOC' }
      ],
      langs: [
        // { pjtlang: 'JAVA', key: 'java' },
        // { pjtlang: 'C#', key: 'cs' },
        // { pjtlang: 'C++', key: 'cpp' }
        { key: 'lang' }
      ],
      items: [
        {
          projectname: 'HiAA1',
          CC: '3.5',
          DC: '3.5',
          LOC: '3.5',
          lang: 'cpp'
        },
        {
          projectname: 'HiAA2',
          CC: '3.0',
          DC: '4.5',
          LOC: '2.7',
          lang: 'cs'
        },
        {
          projectname: 'Lamiinspection',
          CC: '3.3',
          DC: '2.5',
          LOC: '1.7',
          lang: 'cs'
        },
        {
          projectname: 'SAMautoupload',
          CC: '3.8',
          DC: '4.1',
          LOC: '2.6',
          lang: 'java'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeScore(data) {
      console.log(data)
    }
  }
}
</script>
