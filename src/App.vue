<template>
  <div class="main-wrap">
    <main class="main-middle-center">
      <SearchBar />
      <Clock />
    </main>
  </div>
</template>

<script setup>
  import SearchBar from './components/SearchBar/SearchBar.vue'
  import Clock from './components/Clock/Clock.vue'

</script>

<style lang="less">
@import url("normalize.css");

.main-wrap {
  background: url('/src/assets/images/back-img.jpg');
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
