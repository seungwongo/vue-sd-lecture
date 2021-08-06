export default {
  namespaced: true,
  state: () => ({
    itemTitle: 'Customer',
    headers: [
      // {
      //   title: '고객명',
      //   key: 'name',
      //   link: true,
      //   linkKey: 'id',
      //   eventName: 'link'
      // },
      // {
      //   title: '회사명',
      //   key: 'company'
      // },
      // { title: '성별', key: 'gender' },
      // { title: '이메일', key: 'email' },
      // { title: '연락처', key: 'phone' },
      // { title: '주소', key: 'address' }
    ],
    headers0: []
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {}
}
