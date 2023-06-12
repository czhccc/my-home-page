<template>
  <div class="main-wrap" :style="{'background-image': 'url(' + getBackgroundImg() + ')'}">
    <BackAnimation />
    <main class="main-middle-center">
      <SearchBar class="SearchBar-app" />
      <div class="WebGrid-wrapper-app">
        <WebGrid class="WebGrid" />
      </div>
    </main>
    <div class="main-left-container">
      <div class="Clock-app">
        <Clock class="Clock" />
      </div>
      <div class="Countdown-app">
        <Countdown class="Countdown" />
      </div>
    </div>
    <Sidebar />
    <!-- <div class="temporary">剩余功能：<br/>生日提醒、<br/>随机警醒句子</div> -->
  </div>
</template>

<script setup>
  import BackAnimation from './components/BackAnimation/BackAnimation.vue'
  import SearchBar from './components/SearchBar/SearchBar.vue'
  import Clock from './components/Clock/Clock.vue'
  import Sidebar from './components/Sidebar/Sidebar.vue'
  import WebGrid from './components/WebGrid/WebGrid.vue'
  import Countdown from './components/Countdown/Countdown.vue'

  import { onMounted, ref } from 'vue'

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

  onMounted(() => {
    // 首次加载应用，设置一次
    init()
  })

  // 动态为根元素设置字体大小
  function init () {
    // 获取屏幕宽度
    var width = document.documentElement.clientWidth
    // 设置根元素字体大小。此时为宽的10等分
    document.documentElement.style.fontSize = width / 100 + 'px'
  }

</script>

<style lang="less">
@import url("normalize.css");

.main-wrap {
  // background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  -webkit-user-drag: none;
  .main-left-container {
    position: fixed;
    left: 0.5vw;
    top: 0.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .Clock-app {
      width: 15vw;
    }
    .Countdown-app {
      width: 15vw;
      height: 15vw;
      margin-top: 3vh;
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
      width: 45vw;
      height: 10vh;
      margin-top: 10vh;
    }
    .WebGrid-wrapper-app {
      width: 55vw;
      margin-top: 5vh;
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
