import axios from 'axios'
export default {
  mounted() {
    // console.log('믹스인 파일 안에서 일어나는 mounted')
  },
  methods: {
    async $get(url) {
      return (
        await axios.get(url).catch(e => {
          console.log(e)
        })
      ).data
    }
  }
}
