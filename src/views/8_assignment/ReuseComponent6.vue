<template>
  <div>
    <Report
      :monthItems="monthItems"
      :weekItems="weekItems"
      @change-item="changeItem"
    />
  </div>
</template>
<script>
import Report from './Report'

export default {
  name: '',
  components: { Report },
  data() {
    return {
      monthItems: [
        {
          id: 1,
          project: 'A',
          6: 0,
          7: 0
        },
        {
          id: 2,
          project: 'B',
          6: 0,
          7: 0
        },
        {
          id: 3,
          project: 'C',
          6: 0,
          7: 0
        },
        {
          id: 4,
          project: 'D',
          6: 0,
          7: 0
        },
        {
          id: 5,
          project: 'E',
          6: 0,
          7: 0
        }
      ],
      weekItems: [
        {
          id: 1,
          project: 'A',
          w20: 0,
          w21: 2,
          w22: 0,
          w23: 0,
          w24: 0
        },
        {
          id: 2,
          project: 'B',
          w20: 2,
          w21: 1,
          w22: 0,
          w23: 0,
          w24: 0
        },
        {
          id: 3,
          project: 'C',
          w20: 2,
          w21: 3,
          w22: 2,
          w23: 0,
          w24: 0
        },
        {
          id: 4,
          project: 'D',
          w20: 0,
          w21: 0,
          w22: 0,
          w23: 0,
          w24: 0
        },
        {
          id: 5,
          project: 'E',
          w20: 2,
          w21: 0,
          w22: 3,
          w23: 2,
          w24: 0
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
