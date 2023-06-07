<template>
  <!-- <div class="main-wrap"> -->
  <div class="main-wrap" :style="{'background-image': 'url(' + getBackgroundImg() + ')'}">
    <BackAnimation />
    <div class="main-left-container">
      <Clock class="Clock" />
      <Countdown class="Countdown" />
    </div>
    <main class="main-middle-center">
      <SearchBar class="SearchBar-app" />
      <div class="WebGrid-wrapper-app">
        <WebGrid class="WebGrid" />
      </div>
    </main>
    <Sidebar />
    

    <!-- <div class="temporary">剩余功能：<br/>生日提醒、<br/>眼睛倒计时、<br/>随机警醒句子</div> -->
  </div>
</template>

<script setup>
  import BackAnimation from './components/BackAnimation/BackAnimation.vue'
  import SearchBar from './components/SearchBar/SearchBar.vue'
  import Clock from './components/Clock/Clock.vue'
  import Sidebar from './components/Sidebar/Sidebar.vue'
  import WebGrid from './components/WebGrid/WebGrid.vue'
  import Countdown from './components/Countdown/Countdown.vue'

  import { ref } from 'vue'

  import { useState } from './store/useMapper'
  const storeState = useState(['isConciseMode'])

  let backgroundImgs = ref({
    space: '../src/assets/images/back-imgs/space.jpg',
    niyan: '../src/assets/images/back-imgs/niyan.jpg',
  })
  function getBackgroundImg() {
    if (storeState.isConciseMode.value) {
      return new URL('../src/assets/images/back-imgs/niyan.jpg', import.meta.url).href
    } else {
      return new URL('../src/assets/images/back-imgs/space.jpg', import.meta.url).href
    }
  }

</script>

<style lang="less">
@import url("normalize.css");

.main-wrap {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  .main-left-container {
    position: fixed;
    left: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .Clock {

    }
    .Countdown {
      margin-top: 10px;
    }
  }
  .main-middle-center {
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    .SearchBar-app {
      width: 60%;
      margin-top: 50px;
    }
    .WebGrid-wrapper-app {
      margin-top: 50px;
      .WebGrid {
        
      }
    }
  }

  .temporary {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
    color: red;
  }
}
</style>
