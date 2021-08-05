<template>
  <div>
    <ToDoItem :ToDoItems="ToDoItems" />
  </div>
</template>
<script>
import ToDoItem from './ToDoItem.vue'
// import uniqueId from 'lodash.uniqueid'
export default {
  name: 'app',
  components: { ToDoItem },
  data() {
    return {
      ToDoItems: [
        { id: '1', label: 'Learn Vue', done: false },
        {
          id: '2',
          label: 'Create a Vue project with the CLI',
          done: true
        },
        { id: '3', label: 'Have fun', done: true },
        { id: '4', label: 'Create a to-do list', done: false }
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
