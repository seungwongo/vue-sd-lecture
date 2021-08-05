<template>
  <span>
    LINE :
    <select v-model="line" @change="changeItem">
      <option v-for="(line, i) in lines" :key="i"> {{ line.code }}</option>
    </select>
  </span>
</template>
<script>
export default {
  name: '',
  props: {
    lines: {
      type: Array,
      default: function() {
        return []
      }
    },
    defaultLine: {
      type: String,
      default: ''
    },
    eventName: {
      type: String,
      default: 'changeItem'
    }
  },
  components: {},
  data() {
    return {
      line: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.line = this.defaultLine
    this.changeItem()
  },
  unmounted() {},
  methods: {
    changeItem() {
      this.$emit(this.eventName, this.line)
    }
  }
}
</script>
