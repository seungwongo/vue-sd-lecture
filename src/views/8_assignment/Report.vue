<template>
  <div>
    <PageTitle title="Monthly Bug Count" title2="need to fix immediately" />

    <SimpleGrid
      selectType="checkbox"
      checkedKey="id"
      :headers="monthHeaders"
      :items="monthItems"
      @change-item="changeItem"
    />
    <PageTitle title="Weekly Bug Count" title2="need to fix immediately" />

    <SimpleGrid
      selectType="checkbox"
      checkedKey="id"
      :headers="weekHeaders"
      :items="weekItems"
      @change-item="changeItem"
    />
  </div>
</template>
<script>
import PageTitle from '@/components/fragments/PageTitle'
import SimpleGrid from '@/components/fragments/SimpleGrid'

export default {
  name: '',
  components: { PageTitle, SimpleGrid },
  props: {
    monthItems: {
      type: Array,
      default: function() {
        return []
      }
    },
    weekItems: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: [],
      monthHeaders: [
        { title: 'project', key: 'project' },
        { title: 'JUN', key: 6 },
        { title: 'JUL', key: 7 },
        { title: 'AUG', key: 8 },
        { title: 'SEP', key: 9 },
        { title: 'OCT', key: 10 }
      ]
    }
  },
  setup() {},
  created() {
    var headers = [{ title: 'project', key: 'project' }]
    for (var i = 20; i <= 40; i++) {
      headers.push({ title: 'w' + i, key: 'w' + i })
    }
    this.weekHeaders = headers
  },
  mounted() {},
  unmounted() {},
  methods: {
    doSelect() {
      if (this.selectType === 'checkbox') {
        this.$emit(this.eventName, this.checkedItems)
      } else if (this.selectType === 'radio') {
        this.$emit(this.eventName, this.checkedItem)
      }
    }
  }
}
</script>
