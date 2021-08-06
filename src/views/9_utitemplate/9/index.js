import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'
import user from './user'
import listToDetail3 from './listToDetail3'

export default createStore({
  modules: {
    // movie : movie,
    user, // 같은 이름이면 생략 가능
    listToDetail3
  },
  plugins: [
    persistedstate({
      paths: ['listToDetail3']
    })
  ]
})
