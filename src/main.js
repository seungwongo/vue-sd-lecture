import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import api from './mixins/api'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'
import i18nStrings from './plugins/default_lang'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

// createApp(App)
//   .mixin(api)
//   .use(store)
//   .use(router)
//   .mount('#app')

const app = createApp(App)
app.mixin(mixins)

app.directive('focus', {
  mounted(el, binding) {
    console.log(el)
    console.log(binding)
    el.focus()
  }
})

app.use(VueSweetalert2)
app.use(i18nPlugin, i18nStrings)

app.use(store)
app.use(router)
app.mount('#app')
