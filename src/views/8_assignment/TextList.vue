<template>
  <div>
    <input
      style="width:200px;"
      v-model="inputTxt"
      @keyup="inputTxtChange"
      type="text"
    />
    <button style="width:100px;" @click="btnClick">Search</button>
    <br />
    <select style="width:310px; height:40px;">
      <option
        :key="i"
        :value="item[keyitem]"
        v-for="(item, i) in currentItems"
        >{{ item[valueitem] }}</option
      >
    </select>
    <p v-show="!bExists">{{ this.inputTxt }}데이터가 존재하지 않습니다.</p>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    items: {
      type: Array,
      default: function() {
        return []
      }
    },
    keyitem: {
      type: String,
      default: ''
    },
    valueitem: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputTxt: '',
      bExists: true,
      searchResult: function() {
        return []
      },
      currentItems: {
        type: Array,
        default: function() {
          return []
        }
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    btnClick() {
      if (this.inputTxt === '') {
        this.currentItems = this.items
      } else {
        var compValue = this.inputTxt
        var filered = this.items.filter(function(node) {
          return node.disp === compValue
        })

        this.currentItems = filered
      }

      if (this.currentItems.length < 1) {
        this.bExists = false
      } else {
        this.bExists = true
      }
    },
    inputTxtChange() {
      this.searchResult = function() {
        return []
      }
      //초기화
      this.bExists = true
    }
  }
}
</script>
