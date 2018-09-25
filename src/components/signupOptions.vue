<template lang="html">

  <div class="">
    <div class="w-100 fixed top-0 pa4 bg-dark-green" >
        <span @click="goBack" class="fs32 no-underline white bg-animate hover-bg-black hover-white inline-flex pa3 ba border-box items-center">
          <svg class="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style="fill:currentcolor">
            <title>chevronLeft icon</title>
            <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
          </svg>
          <span class="pl1">Back</span>
        </span>
        <router-link to="{name: signupOptions}"  class="fs32 ml42 no-underline white bg-animate hover-bg-black hover-white inline-flex pa3 ba border-box items-center">
          <span class="pr1">Next</span>
          <svg class="w1 white"  data-icon="chevronRight" viewBox="0 0 32 32" style="fill:currentcolor">
            <title>chevronRight icon</title>
            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
          </svg>
        </router-link>
    </div>
    <article class="mt4">
      <div class="vh-100 dt w-100 tc app_bg white cover">
        <div class="dtc v-mid">
          <header class="tc pv5 pv6-ns">
            <img :src="'/'+logo" class="pa1 b--black-10 h40 w40" width="100%" height="auto" alt="avatar">
            <div class="dtc flex flex-column cover ph3 ph4-m ph5-l" >
              <h1 class="f2 measure lh-title fw9 dark-green mb8" >Signup with any of the following :</h1>
              <a class="db grow no-underline br-pill ph2 pv4 f8 mb2  white bg-dark-red" href="#0">
                <span class=" ml3 pr2">Signup with Google</span>
              </a>
              <a class="db grow no-underline br-pill ph2 pv4 f8 mb2  white bg-dark-blue" href="#0">
                <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
                <span class=" ml3 pr2">Signup with Facebook</span>
              </a>
              <span class="db br-pill f2 mt4 mb4   dark-green" href="#0">|| OR || </span>
              <a class="db grow no-underline br-pill ph2 pv4 f8 mb2 white bg-dark-green" href="#0">Signup with email and password </a>
            </div>
          </header>
        </div>
      </div>
    </article>
  </div>

</template>

<script>
  import logo from "@/assets/img/logo-2.png"

  export default {
    name: "signupOptions",
    data () {
      return {
        logo
      }
    },
    created () {
      console.log('Routes : ',this.$route)
      console.log('Router', this.$router)
    },
    methods : {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="css">
</style>
