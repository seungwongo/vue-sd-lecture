<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <!-- <ul> -->
    <div v-for="item in ToDoItems" :key="item.id">
      <label :class="{ isDone: isChecked }"
        ><input type="checkbox" @click="doCheck" />{{ item.label }}</label
      >
    </div>
    <!-- </ul> -->
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    ToDoItems: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      isChecked: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doCheck() {
      if (!this.isChecked) {
        this.isChecked = true
        console.log('체크합니다. ' + this.isChecked)
      } else {
        this.isChecked = false
        console.log('언체크합니다. ' + this.isChecked)
      }
    }
  }
}
</script>
<style scoped>
.isDone {
  color: blue;
}
</style>
