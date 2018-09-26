
import Vue from "vue"
import {router} from "@/routes"
import App from "./app.vue"
import firebase from "@/services/firebase.js"

import Vuefire from 'vuefire'
Vue.use(Vuefire)

new Vue ({
  el: "#app",
  router,
  firebase: {
    user: firebase.database.ref('users').orderByChild('created_at')
  },
  render: h => h(App)
})
