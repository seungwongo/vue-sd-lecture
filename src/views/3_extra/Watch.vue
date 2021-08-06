<template>
  <div>
    <h1>{{ fullName }}</h1>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />

    <input type="number" v-model.number="num1" />
    <input type="number" v-model.number="num2" />
    <p>sum : {{ num1 + num2 }}</p>

    <button @click="changeData">changeData</button>
    <br />
    <button @click="changeData2">changeData2</button>
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
      num2: 0,
      oData: {},
      oldData: {}
    }
  },
  watch: {
    firstName(currentValue, oldValue) {
      console.log(oldValue + ' => ' + currentValue)
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    // oData(currentValue, oldValue) {
    //   console.log('oldValue', oldValue)
    //   console.log('currentValue', currentValue)
    // }
    oData: {
      // immediate: true,
      deep: true,
      handler(currentValue, oldValue) {
        console.log('oldValue', oldValue)
        console.log('currentValue', currentValue)
      }
    }
    // oData: {
    //   deep: true,
    //   handler(currentValue) {
    //     console.log('oldValue', this.oldData)
    //     console.log('currentValue', currentValue)
    //     this.oldData = JSON.parse(JSON.stringify(currentValue))
    //   }
    // }
  },
  setup() {},
  created() {},
  mounted() {
    var x = 0.1
    var y = 0.2
    var z = x + y
    console.log(z)
    console.log(z.toFixed(2))

    this.oData = {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D'
    }
  },
  unmounted() {},
  methods: {
    changeData() {
      this.oData.a = 'AAAA'
    },
    changeData2() {
      this.oData = {
        a: 'AA',
        b: 'B',
        c: 'C',
        d: 'D'
      }
    }
  }
}
</script>
