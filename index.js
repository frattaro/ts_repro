import Vue from 'vue'
import { VApp } from 'vuetify/lib'

export default new Vue({
  components: {
    VApp
  },
  render (el) {
    return el('v-app', {})
  }
}).$mount('#app')
