<template>
  <div class="popup">
    <div class="popup__container">
      <template v-for="(header, i) in headers" :key="header.key">
        <label
          ><input
            class="popup__headers"
            type="checkbox"
            :value="i"
            v-model="newHeaders"
          /><b>{{ header.title }}</b></label
        >
      </template>
    </div>
    <div class="popup__close">
      <button @click="doSaveHeaders">저장</button>
      <div>{{ newHeaders }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      newHeaders: []
    }
  },
  computed: {
    headers() {
      return this.$store.state.listToDetail3.headers0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSaveHeaders() {
      const headers = []
      this.newHeaders.forEach((key) => {
        headers.push(this.headers[key]) // key 는 문자열
      })
      // console.log(headers)
      this.$store.commit('listToDetail3/updateState', {
        // movie/tt123762
        headers
      })
      this.$emit('closePopup')
    }
  }
}
</script>
<style scoped>
.popup {
  margin: auto;
  position: fixed;
  top: 0;
  bottom: 50%;
  left: 0;
  right: 0;
  background-color: black;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0.8;
  transition: all 0.3s;
}

.popup__container {
  color: white;
  width: 50%;
  height: 33%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.popup__headers {
  margin: 10px 20px;
}
</style>
