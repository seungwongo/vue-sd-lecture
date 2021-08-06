<template>
  <div class="container">
    <div class="search-container">
      <input
        type="text"
        v-model="searchCustomerName"
        placeholder="고객명"
        style="margin-right:10px;padding:3px;"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch" style="margin-right:5px;">조회</button>
      <button @click="doSave">저장</button>
      <button @click="doDelete">삭제</button>
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        selectType="checkbox"
        checkedKey="id"
        :editable="true"
        @change-item="checkedItem"
      />
    </div>
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      searchCustomerName: '',
      headers: [
        {
          title: '고객명',
          key: 'name'
        },
        {
          title: '회사명',
          key: 'company',
          type: 'text'
        },
        {
          title: '성별',
          key: 'gender',
          type: 'select',
          options: [
            { v: 'male', t: '남' },
            { v: 'female', t: '여' }
          ]
        },
        { title: '이메일', key: 'email', type: 'text' },
        { title: '연락처', key: 'phone', type: 'text' },
        { title: '주소', key: 'address', type: 'text' }
      ],
      items: [],
      checked: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkedItem(data) {
      this.checked = data
      console.log(this.checked)
    },
    doSave() {
      const checkedList = []
      if (this.checked.length === 0) {
        return alert('저장할 아이템을 선택하세요.')
      }

      this.$swal({
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(async result => {
        if (result.isConfirmed) {
          for (const id of this.checked) {
            checkedList.push(this.items.filter(item => item.id === id)[0])
          }

          console.log(checkedList)

          checkedList.forEach(async item => {
            // const { id, name, company, email, phone, address } = item
            await this.$put(`/users/${item.id}`, item)
          })

          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    doDelete() {
      if (this.checked.length === 0) {
        return alert('저장할 아이템을 선택하세요.')
      }

      console.log(this.checked)

      this.$swal({
        title: 'Are you sure to delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async result => {
        if (result.isConfirmed) {
          this.checked.forEach(async item => {
            await this.$delete(`/users/${item}`)
          })

          this.$swal('Deleted!', 'New user has been deleted.', 'success').then(
            result => {
              console.log(result)
              this.checked = []
              this.doSearch()
            }
          )
        }
      })
    },
    async doSearch() {
      this.items = await this.$get(
        `/users?name_like=${this.searchCustomerName}`
      )
    }
  }
}
</script>
<style scoped>
.search-container {
  padding: 10px;
}

.search-container:after {
  clear: none;
}

.search-container > div {
  float: left;
  margin-right: 10px;
}

.search-container .label {
  margin-right: 5px;
  font-weight: bold;
}

.search-container button {
  margin-right: 5px;
}

.data-grid {
  width: 100%;
}

.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}

.data-grid th,
.data-grid td {
  border: 1px solid #222;
  padding: 5px;
}

.data-grid th {
  cursor: pointer;
}

.data-grid td input {
  width: 100%;
}

.link {
  cursor: pointer;
  text-decoration: underline;
}

.table-container {
  margin-top: 10px;
  padding: 10px;
}
</style>
