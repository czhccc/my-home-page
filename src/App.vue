<template>
  <div class="main-wrap">
    <BackAnimation />
    <main class="main-middle-center">
      <SearchBar />
      <Clock />
    </main>
  </div>
</template>

<script setup>
  import BackAnimation from './components/BackAnimation/BackAnimation.vue'
  import SearchBar from './components/SearchBar/SearchBar.vue'
  import Clock from './components/Clock/Clock.vue'

</script>

<style lang="less">
@import url("normalize.css");

.main-wrap {
  // background: url('/src/assets/images/back-imgs/niyan.jpg');
  background: url('/src/assets/images/back-imgs/space.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  .main-middle-center {
    width: 100vw;
    height: 100%;
  }
}
</style>
