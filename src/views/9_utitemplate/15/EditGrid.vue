<template>
  <div>
    <div class="btn-area">
      <button @click="doSave">저장</button>
    </div>
    <table class="edit-table">
      <tr :key="h.key" v-for="h in headers">
        <td class="header">{{ h.title }}</td>
        <td>
          <input type="text" v-if="h.isEditable" v-model="item[h.key]" />
          <span v-else>{{ item[h.key] }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    headers: {
      type: Array,
      default: function() {
        return []
      }
    },
    items: {
      type: Object,
      default: function() {
        return {}
      }
    },
    eventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {}
  },
  computed: {
    item() {
      return this.items
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSave() {
      this.$swal({
        title: 'Are you sure to save?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
      }).then(async result => {
        if (result.isConfirmed) {
          this.$emit(this.eventName, this.item)
          this.$swal('Saved!', 'Recipe information has been saved.', 'success')
        }
      })
    }
  }
}
</script>
<style scoped>
.edit-table {
  width: 100%;
}
.edit-table,
.edit-table th,
.edit-table td {
  border-collapse: collapse;
}
.edit-table th,
.edit-table td {
  border: 1px solid #222;
  padding: 10px;
}
.btn-area {
  text-align: center;
  margin-top: 10px;
}
.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
