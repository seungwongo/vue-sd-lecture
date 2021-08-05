<template>
  <div>
    <input type="text" v-focus />
    <input type="text" v-blur:[required] />
    <br />
    <input type="text" v-number />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  directives: {
    // focus: {
    //   mounted(el, binding) {
    //     console.log(el)
    //     console.log(binding)
    //     el.focus()
    //   }
    // },
    blur: {
      mounted(el, binding) {
        if (binding.arg) {
          el.addEventListener('blur', () => {
            if (el.value === '') {
              alert('필수 입력값입니다.')
              //   el.focus()
            }
          })
        }
      }
    },
    number: {
      mounted(el, binding) {
        el.addEventListener('keydown', e => {
          console.log(e.keyCode)
          if (
            !(
              (e.keyCode >= 48 && e.keyCode <= 57) ||
              e.keyCode === 8 ||
              e.keyCode === 37 ||
              e.keyCode === 39
            )
          ) {
            e.preventDefault()
          }
        })
      }
    }
  },
  data() {
    return {
      required: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
