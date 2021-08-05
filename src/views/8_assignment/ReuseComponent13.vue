<template>
  <div>
    <TextList keyitem="id" valueitem="disp" :items="items" />
  </div>
</template>
<script>
import TextList from './TextList'
export default {
  name: '',
  components: { TextList },
  data() {
    return {
      items: [
        { id: 1, disp: 'data1' },
        { id: 2, disp: 'data2' },
        { id: 3, disp: 'data3' },
        { id: 4, disp: 'data4' },
        { id: 5, disp: 'data5' },
        { id: 6, disp: 'data6' }
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
