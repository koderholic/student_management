<template >
    <div >
      <transition name="moveInUp">
        <router-view></router-view>
      </transition>
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
  @import "assets/css/app.css";
  .moveInUp-leave-active{
    animation: moveInUp .3s ease-in;
  }
  @keyframes moveInUp{
   0%{
    transform: translateX(0);
   }
    100%{
    transform: translateX(-400px);
   }
}
.moveInUp-enter-active{
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
</style>
