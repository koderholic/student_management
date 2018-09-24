import Router from "vue-router"
import Vue from "vue"
import welcomeComponent from "@/components/welcome"
import aboutComponent from "@/components/aboutSkeleton"

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
        path: '/about',
        name: 'about',
        component: aboutComponent
      }
    ]
  })
