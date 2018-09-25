<template>
    <div>
      <article :class="{athelas: currentDisplay.caption == ''}">
        <div class="vh-100 dt w-100 tc app_bg white cover">
          <div class="dtc v-mid">
            <div class="tr w-100 fixed top-0 pa4" :class="{'bg-white': currentDisplay.caption == '', 'bg-dark-green': currentDisplay.caption != ''}">
              <a href="#0" class="fs32 no-underline black bg-animate hover-bg-black hover-white inline-flex pa3 ba border-box items-center" :class="{'white': currentDisplay.caption != '', 'dark-green': currentDisplay.caption == ''}">
                <span class="pr1">Next</span>
                <svg class="w1" :class="{'white': currentDisplay.caption != '', 'dark-green': currentDisplay.caption == ''}" data-icon="chevronRight" viewBox="0 0 32 32" style="fill:currentcolor">
                  <title>chevronRight icon</title>
                  <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                </svg>
              </a>
            </div>
            <header class="tc pv5 pv6-ns">
              <img :src="(displayintervalStatus)? currentDisplay.src : initialDisplay.src" class="pa1 b--black-10 h40 w40" width="100%" height="auto" alt="avatar">
              <h2 class="f32 white fw2 tracked"></h2>
              <div class="dtc v-mid cover bg-white ph3 ph4-m ph5-l" v-if="(currentDisplay.caption != '' || initialDisplay.caption != '' )">
                <h1 class="f2 f-subheadline-l measure lh-title fw9 dark-green" >{{(displayintervalStatus)? currentDisplay.caption : initialDisplay.caption}}</h1>
              </div>
            </header>
            <footer class="pv4 ph2 ph3-ns tc mt4">
              <span v-for="(note, index ) in welcomeNotes" :key="index">
                <a class="link dim gray dib h2 w2 br-100 mr3 pa2 ba b--black-10" :class="{'bg-white': currentDisplay.caption == '', 'bg-dark-green': currentDisplay.caption != ''}" @click="gotoWelcomeNote(index)"  v-if="index !== displaycounter-1" href="#" title=""></a>
                <a class="link dim gray dib h2 w2 br-100 mr3 pa2 bg-gray  ba b--black-10" @click="gotoWelcomeNote(index)" v-else href="#" title=""></a>
              </span>
            </footer>

          </div>
        </div>
      </article>

    </div>
</template>

<script type="text/javascript">

  import welcomeSrc1 from "../assets/img/logo.png"
  import welcomeSrc2 from "../assets/img/mesh15.png"
  import welcomeSrc3 from "../assets/img/mesh17.png"

  export default {

    data () {
      return {
        welcomeNotes: [],
        currentDisplay: {},
        displaycounter: 0,
        displayintervalId: 0,
        displayintervalStatus: false
      }
    },
    name: "welcome",
    created () {

      this.welcomeNotes = [
        {
          src: welcomeSrc1,
          caption: ""
        },
        {
          src: welcomeSrc2,
          caption: "School can be much more fun,the beauty of school is not just in a classroom. But in harmony of knowlege"
        },
        {
          src: welcomeSrc3,
          caption: "A community of fellow students collaborating and MESHing their knownledge together"
        }
      ]
      const that = this

      this.displayintervalId = setInterval( function () {

          that.currentDisplay = {}

          if (that.displaycounter === that.welcomeNotes.length)  {
              that.displaycounter = 0
              that.currentDisplay = {}
              that.currentDisplay = that.welcomeNotes[that.displaycounter]
          }
          that.displayintervalStatus = true
          that.currentDisplay = that.welcomeNotes[that.displaycounter]

          that.displaycounter++

      },3000)

    },

    methods : {
      startWelcomeDisplay () {
        const that = this
        this.displayintervalId = setInterval( function () {


            that.currentDisplay = {}

            if (that.displaycounter === that.welcomeNotes.length)  {
                that.displaycounter = 0
                that.currentDisplay = {}
                that.currentDisplay = that.welcomeNotes[that.displaycounter]
            }

            that.currentDisplay = that.welcomeNotes[that.displaycounter]

            that.displaycounter++


        },3000)
      },
      gotoWelcomeNote (index) {
        clearInterval(this.displayintervalId)
        this.currentDisplay = this.welcomeNotes[index]
        this.displaycounter = index
        this.startWelcomeDisplay()
      },

    },

    computed : {
      initialDisplay () {
        this.displaycounter = 1
        return this.currentDisplay = this.welcomeNotes[0]
      }
    }

  }
</script>

<style media="screen">
  @import "../assets/css/welcome.css";
</style>
