<template>
    <div>
      <article class="athelas">
        <div class="vh-100 dt w-100 tc app_bg white cover">
          <div class="dtc v-mid">
            <header class="tc pv4 pv5-ns">
              <img :src="(displayintervalStatus)? currentDisplay.src : initialDisplay.src" class="pa1 b--black-10 h40 w40" width="50%" height="auto" alt="avatar">
              <h2 class="f32 white fw2 tracked">{{(displayintervalStatus)? currentDisplay.caption : initialDisplay.caption}}</h2>
            </header>
            <footer class="pv4 ph3 ph5-ns tc mt4">
              <span v-for="(note, index ) in welcomeNotes" :key="index">
                <a class="link dim gray dib h2 w2 br-100 mr3 pa2 bg-white  ba b--black-10" @click="gotoWelcomeNote(index)"  v-if="index !== displaycounter-1" href="#" title=""></a>
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
  import welcomeSrc2 from "../assets/img/mesh2.jpg"
  import welcomeSrc3 from "../assets/img/mesh3.jpg"

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
          caption: "Harmonizing knowlege, bringing out the beauty of schooling"
        },
        {
          src: welcomeSrc2,
          caption: "Harmonizing knowlege, bringing out the beauty of schooling"
        },
        {
          src: welcomeSrc3,
          caption: "Harmonizing knowlege, bringing out the beauty of schooling"
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
      // startWelcomeDisplay () {
      //   const intervalId = setInterval( function () {
      //
      //
      //       that.currentDisplay = {}
      //
      //       if (that.displaycounter === that.welcomeNotes.length)  {
      //           that.displaycounter = 0
      //           that.currentDisplay = {}
      //           that.currentDisplay = that.welcomeNotes[that.displaycounter]
      //       }
      //
      //       that.currentDisplay = that.welcomeNotes[that.displaycounter]
      //
      //       that.displaycounter++
      //
      //
      //   },3000)
      // }
      gotoWelcomeNote (index) {
        clearInterval(this.displayintervalId)
        this.currentDisplay = this.welcomeNotes[this.displaycounter]
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
