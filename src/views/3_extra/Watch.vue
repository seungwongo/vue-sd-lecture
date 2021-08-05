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
      fullName: 'Seungwon Go',
      num1: 0,
      num2: 0
    }
  },
  watch: {
    firstName(currentValue, oldValue) {
      console.log(oldValue + ' => ' + currentValue)
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
