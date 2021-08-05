<template>
  <div>
    <div>
      <P>프로젝트에 사용한 언어를 고르세요.</P>
      <label
        ><input type="radio" v-model="checklang" value="java" /> JAVA
      </label>
      <label><input type="radio" v-model="checklang" value="cs" /> C# </label>
      <label><input type="radio" v-model="checklang" value="cpp" /> C++ </label>
    </div>
    <br /><br />
    <table
      class="data-grid"
      style="margin-left:auto; margin-right:auto"
      v-show="checklang == 'java' || checklang == 'cs' || checklang == 'cpp'"
    >
      <!-- 언어 선택에 따라 Table 을 종류별로 불러오기 -->

      <thead>
        <tr>
          <th>Check</th>
          <th :key="header.key" v-for="header in headers">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <td>
            <input
              type="checkbox"
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="langSelect"
            />
          </td>
          <td :key="j" v-for="(h, j) in headers">{{ item[h['key']] }}</td>
        </tr>
      </tbody>
    </table>
    <br /><br />
    <button>Score update</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    checkedKey: {
      type: String,
      default: ''
    },
    selectType: {
      type: String,
      default: ''
    },
    langs: {
      type: String,
      default: ''
    },
    headers: {
      type: Array,
      default: function() {
        return []
      }
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      checkedItem: '',
      cheeckedItems: [],
      checklang: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    langSelect() {
      if (this.selectType === 'checkbox') {
        this.$emit(this.eventName, this.checkedItems)
      } else if (this.selectType === 'radio') {
        this.$emit(this.eventName, this.checkItem)
      }
    }
  }
}
</script>
<style scoped>
.data-grid {
  width: 100%;
}
.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: seperate;
}

.data-grid,
.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 5px;
}
</style>
