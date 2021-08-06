<template>
  <div>
    <input
      type="text"
      v-model="searchCustomerName"
      placeholder="고객명"
      @keyup.enter="doSearch"
    />
    <button @click="doSearch">조회</button>
    <button @click="goToCreate">생성</button>
    <button @click="changeHeaders">테이블 항목 수정</button>
    <select v-model="pageNum">
      <option v-for="page in pages" :key="page" :value="page">
        {{ page }}
      </option>
    </select>
  </div>
  <div class="table-container">
    <DataGrid
      :headers="headers"
      :items="items"
      checkedKey="id"
      :bHover="true"
      @link="goToDetail"
    />
  </div>
  <ChangeTableHeaders v-show="isPopup" @close-popup="this.isPopup = false" />
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
import ChangeTableHeaders from '@/components/fragments/ChangeTableHeaders.vue'

export default {
  name: '',
  components: { DataGrid, ChangeTableHeaders },
  data() {
    return {
      searchCustomerName: '',
      // headers: [
      //   {
      //     title: '고객명',
      //     key: 'name',
      //     link: true,
      //     linkKey: 'id',
      //     eventName: 'link'
      //   },
      //   {
      //     title: '회사명',
      //     key: 'company'
      //   },
      //   { title: '성별', key: 'gender' },
      //   { title: '이메일', key: 'email' },
      //   { title: '연락처', key: 'phone' },
      //   { title: '주소', key: 'address' }
      // ],
      items: [],
      pageNum: '5',
      pages: (() => {
        return Array.from({ length: 10 }, (v, i) => i + 1)
      })(),
      isPopup: false
    }
  },
  computed: {
    headers() {
      return this.$store.state.listToDetail3.headers
    }
  },
  setup() {},
  created() {
    this.getHeaders()
  },
  mounted() {},
  unmounted() {},
  methods: {
    changeRegion(data) {
      this.searchRegion = data
    },
    goToDetail(customerId) {
      this.$router.push({
        path: '/template/detail3',
        query: {
          id: customerId
        }
      })
    },
    async doSearch() {
      if (this.searchItemName) {
        this.items = await this.$get(
          `/users?name_like=${this.searchItemName}&_limit=${this.pageNum}`
        )
      } else {
        this.items = await this.$get(`/users?_limit=${this.pageNum}`)
      }
    },
    goToCreate() {
      this.$router.push({ path: '/template/create3' })
    },
    async getHeaders() {
      const items = (await this.$get('/users?_limit=1'))[0]
      // console.log(items)
      const headers = []
      Object.keys(items).forEach((key) => {
        headers.push({
          title: key,
          key: key,
          type: typeof items[key],
          link: true,
          linkKey: 'id',
          eventName: 'link'
        }) // key 는 문자열
      })
      // console.log(headers)
      this.$store.commit('listToDetail3/updateState', {
        headers0: headers
      })
      if (this.headers.length === 0) {
        console.log('hi')
        this.$store.commit('listToDetail3/updateState', {
          headers
        })
      }
      // items[0].foreach((item) => console.log(item))
    },
    changeHeaders() {
      this.isPopup = true
    }
  }
}
</script>
