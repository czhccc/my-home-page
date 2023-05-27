<template>
  <div class="BackAnimation">

    <!-- <video class="back-video" autoplay muted src="/src/assets/images/back-imgs/aaa.mp4"></video> -->

    <!-- 流星 -->
    <div v-if="!storeState.isConciseMode.value" class="Meteor-wrapper">
      <Meteor />
    </div>

    <!-- 波浪 -->
    <!-- <div class="Wave-wrapper">
      <Wave />
    </div> -->

    <!-- 彩带 -->
    <!-- <div class="HelixLoader-wrapper">
      <HelixLoader />
    </div> -->
    
    <div v-if="!storeState.isConciseMode.value" class="FireworksTube-wrapper">
      <FireworksTube />
    </div>
    
    <!-- <div class="ColorfulCircle-wrapper">
      <ColorfulCircle />
    </div> -->
    
    <!-- <div class="ConveyerBelt-wrapper">
      <ConveyerBelt />
    </div> -->
    
    <!-- <div class="BallStairs-wrapper">
      <BallStairs />
    </div> -->
    
    <!-- <div class="ThreeSquare-wrapper">
      <ThreeSquare />
    </div> -->


  </div>
</template>

<script setup>
  import Meteor from './components/Meteor/Meteor.vue'
  import Wave from './components/Wave/Wave.vue'
  import HelixLoader from './components/HelixLoader/HelixLoader.vue'
  import FireworksTube from './components/FireworksTube/FireworksTube.vue'
  import ColorfulCircle from './components/ColorfulCircle/ColorfulCircle.vue'
  import ConveyerBelt from './components/ConveyerBelt/ConveyerBelt.vue'
  import BallStairs from './components/BallStairs/BallStairs.vue'
  import ThreeSquare from './components/ThreeSquare/ThreeSquare.vue'
  
  import { computed } from 'vue'
  import { useState } from '../../store/useMapper'

  const storeState = useState(['isConciseMode'])


</script>

<style scoped lang="less">
.BackAnimation {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  .back-video {
    min-width: 100vw;
    min-height: 100vh;
  }

  .Wave-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .HelixLoader-wrapper {
    width: 200px;
    height: 1px;
    position: absolute;
    right: 200px;
    top: 0;
  }

  .FireworksTube-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    width: 50px;
    height: 87px;
  }

  .ColorfulCircle-wrapper {
    position: absolute;
    left: 10px;
    top: 300px;
  }
  
  .ConveyerBelt-wrapper {
    position: absolute;
    left: 300px;
    top: 400px;
  }
  
  .BallStairs-wrapper {
    position: absolute;
    left: 900px;
    top: 500px;
  }

  .ThreeSquare-wrapper {
    position: absolute;
    left: 700px;
    top: 500px;
  }
}
</style>