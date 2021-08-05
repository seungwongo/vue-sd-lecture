<template>
  <div>
    <h1>{{ $translate('ko.hi') }}</h1>
    <h1>{{ $translate('en.hi') }}</h1>
    <button>{{ $translate(`${userLang}.save`) }}</button>
    <br />
    <button>{{ i18n[userLang].hi }}</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  inject: ['i18n'],
  data() {
    return {
      sampleData: '',
      userLang: 'ko'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
