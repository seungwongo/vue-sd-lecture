<template>
  <div class="search-textList">
    <h3 class="search-title">{{ title }}</h3>

    <input
      v-if="selectType == 'checkbox'"
      type="checkbox"
      v-model="isStatusCheckbox"
      @change="doChangeCheckbox"
    />
    <!-- <p v-show="isStatusCheckbox">isStatusCheckbox는 true입니다.</p> -->

    <input
      v-if="selectType == 'checkbox'"
      type="text"
      style="float:center;width:140px;margin:3px;border:"
      v-model="keyInText"
      @keyup.enter="doSearchText"
      :disabled="isStatusCheckbox == true"
    />
    <input
      v-else-if="selectType != 'checkbox'"
      type="text"
      style="float:center;width:160px;margin:3px;"
      v-model="keyInText"
      @keyup.enter="doSearchText"
    />

    <button
      style="float:center;width:45px;margin:3px;"
      @click="doSearchText"
      :disabled="isStatusCheckbox == true"
    >
      조회
    </button>

    <div style="clear:both;padding:10px 15px ">
      <!-- <input
      type="textarea"
      style="float:left;width:210px;height:100px"
      :value="eqpItems"
    /> -->
      <table
        style="border:1px solid black;width:220px;height:100px;text-align:left;align;center"
      >
        <tbody>
          <tr :key="item.key" v-for="item in items">
            <!-- <td>{{ item.key }}</td> -->
            <td>{{ item.disp }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: '제목을 입력해주세요.'
    },
    selectType: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    },
    eventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      keyInText: '',
      isStatusCheckbox: false
      //   eqpItems: '어떻게 해야 나올까요?'
    }
  },
  setup() {},
  created() {},
  mounted() {
    // console.log(isStatusCheckbox)
  },
  unmounted() {},
  methods: {
    doSearchText() {
      this.$emit(this.eventName, this.keyInText)
    }
  }
}
</script>
<style scoped>
.search-title {
  border-left: 4px solid blue;
  text-align: left;
  padding: 1px;
  margin: 3px;
}
.search-textList {
  border: 1px solid gray;
  width: 250px;
  margin: 1px;
  padding: 1px;
}
</style>
