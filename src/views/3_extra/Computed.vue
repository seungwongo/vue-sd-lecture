<template>
  <div>
    <h1>{{ fullName }}</h1>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />

    <input type="number" v-model.number="num1" />
    <input type="number" v-model.number="num2" />
    <p>sum : {{ num1 + num2 }}</p>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      firstName: 'Seungwon',
      lastName: 'Go',
      num1: 0,
      num2: 0,
      dbProductName: 'ABC123'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    sum() {
      return this.num1 + this.num2
    },
    productName() {
      return 'P' + this.dbProductName
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
