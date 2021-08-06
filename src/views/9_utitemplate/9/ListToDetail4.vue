<template>
  <div>
    <input
      type="text"
      v-model="searchItemName"
      placeholder="고객명"
      @keyup.enter="doSearch"
    />
    <button @click="doSearch">조회</button>
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
      @link="showDetail"
    />
  </div>
  <Detail
    v-if="dipsDetail"
    :item0="item"
    @save-detail="this.dipsDetail = false"
  />
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
import Detail from '@/components/fragments/Detail4.vue'

export default {
  name: '',
  components: { DataGrid, Detail },
  data() {
    return {
      searchItemName: '',
      headers: [
        {
          title: '고객명',
          key: 'name',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      items: [],
      item: {},
      dipsDetail: false,
      pageNum: '5',
      pages: (() => {
        return Array.from({ length: 10 }, (v, i) => i + 1)
      })()
    }
  },
  setup() {},
  created() {
    // this.getHeaders()
  },
  mounted() {},
  unmounted() {},
  methods: {
    changeRegion(data) {
      this.searchRegion = data
    },
    async showDetail(itemId) {
      this.dipsDetail = false
      this.item = await this.$api(`/users/${itemId}`)
      this.dipsDetail = true
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
    async getHeaders() {
      const items = (
        await this.$get(`/users?name_like=${this.searchItemName}&_limit=1`)
      )[0]
      // console.log(typeof items)
      Object.keys(items).forEach((key) => {
        this.headers.push({ title: key, key: key }) // key 는 문자열
      })
      console.log(this.headers)
      // items[0].foreach((item) => console.log(item))
    }
  }
}
</script>
