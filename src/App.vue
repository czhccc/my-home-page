<template>
  <!-- <div class="main-wrap"> -->
  <div class="main-wrap" :style="{'background-image': 'url(' + getBackgroundImg() + ')'}">
    <BackAnimation />
    <Clock />
    <main class="main-middle-center">
      <SearchBar class="SearchBar" />
      <div class="WebGrid-wrapper-app">
        <WebGrid class="WebGrid" />
      </div>
    </main>
    <Sidebar />
  </div>
</template>

<script setup>
  import BackAnimation from './components/BackAnimation/BackAnimation.vue'
  import SearchBar from './components/SearchBar/SearchBar.vue'
  import Clock from './components/Clock/Clock.vue'
  import Sidebar from './components/Sidebar/Sidebar.vue'
  import WebGrid from './components/WebGrid/WebGrid.vue'

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
  // background: url('/src/assets/images/back-imgs/niyan.jpg');
  // background: url('/src/assets/images/back-imgs/space.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  .main-middle-center {
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    .SearchBar {
      margin-top: 50px;
    }
    .WebGrid-wrapper-app {
      flex: 1;
      .WebGrid {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
