import Router from "vue-router"
import Vue from "vue"
import welcomeComponent from "@/components/welcome"
import signupOptionsComponent from "@/components/signupOptions"
import signupComponent from "@/components/signup"

Vue.use(Router)

export const router =  new Router({
    mode: "history",
    routes: [
      {
        path: '/',
        name: 'welcome',
        default: true,
        component: welcomeComponent
      },
      {
        path: '/signup/options',
        name: 'signupOptions',
        component: signupOptionsComponent
      },
      {
        path: '/signup',
        name: 'signup',
        component: signupComponent
      }
    ]
  })
