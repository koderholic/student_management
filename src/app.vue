<template >
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<!-- App specific objects  -->
<script type="text/javascript">
  module.exports = {
    name: "app"
  }
</script>

<!-- App specific stylings  -->
<style media="screen">
  body {
    margin: 0;
  }
  #app {
    width: inherit;
    height: 100vh;
    background-color: blue;
    /* background: url("./assets/hello.jpeg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20rem;
    padding-left: 60rem;
    padding-right: 0;
  }
  .heading {
    color: #fff;
    font-size: 2.5rem;
  }
</style>
