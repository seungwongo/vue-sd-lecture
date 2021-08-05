<template>
  <div>
    <h1 v-show="user.id">{{ user.name }}님 환영합니다.</h1>
    <button @click="logout">로그아웃</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },

  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    logout() {
      this.$store.commit('user', {})
      this.$router.push({ path: '/vuex/store' })
    }
  }
}
</script>
