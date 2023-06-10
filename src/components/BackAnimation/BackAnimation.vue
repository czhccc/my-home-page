<template>
  <div class="BackAnimation">

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
    
    <!-- <div class="ColorfulCircle-wrapper">
      <ColorfulCircle />
    </div> -->
    
    <!-- <div class="ConveyerBelt-wrapper">
      <ConveyerBelt />
    </div> -->
    
    <!-- <div class="ThreeSquare-wrapper">
      <ThreeSquare />
    </div> -->
    
    <!-- <div class="WaveAndFish-wrapper">
      <WaveAndFish />
    </div> -->
    
  </div>
</template>

<script setup>
  import Meteor from './components/Meteor/Meteor.vue'
  import Wave from './components/Wave/Wave.vue'
  import HelixLoader from './components/HelixLoader/HelixLoader.vue'
  import ColorfulCircle from './components/ColorfulCircle/ColorfulCircle.vue'
  import ConveyerBelt from './components/ConveyerBelt/ConveyerBelt.vue'
  import ThreeSquare from './components/ThreeSquare/ThreeSquare.vue'
  import WaveAndFish from './components/WaveAndFIsh/WaveAndFish.vue'
  
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
    height: 15vh;
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

  .ThreeSquare-wrapper {
    position: absolute;
    left: 700px;
    top: 500px;
  }

  .WaveAndFish-wrapper {
    width: 100%;
    height: 25vh;
    position: absolute;
    bottom: 0;
    .WaveAndFish {
      width: 100%;
      height: 100%;
    }
  }
}
</style>