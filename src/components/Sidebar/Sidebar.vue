<template>
  <div class="Sidebar" :style="{width: isShowSidebar?'100vw':'6vw'}"
  >
    <div class="show" v-if="isShowSidebar">
      <div class="mask" @mouseenter="maskMouseEnter"></div>
      <div class="content">
        <ul>
          <li style="--clr:#ff6493" @click="changeConciseMode">
            <a href="#" data-text="&nbsp;简约模式" :style="{
              '--activeWidth': storeState.isConciseMode.value?'100%':'0%', 
              '--activeShadow': storeState.isConciseMode.value?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isConciseMode.value?'100%':'50%'
            }">&nbsp;简约模式&nbsp;</a>
          </li>
          <li style="--clr:#ffdd1c" @click="showWave">
            <a href="#" data-text="&nbsp;波浪特效" :style="{
              '--activeWidth': storeState.isShowWave.value?'100%':'0%', 
              '--activeShadow': storeState.isShowWave.value?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isShowWave.value?'100%':'50%'
            }">&nbsp;波浪特效&nbsp;</a>
          </li>
          <li style="--clr:#00dc82" @click="showWaveAndFish">
            <a href="#" data-text="&nbsp;养鱼特效" :style="{
              '--activeWidth': storeState.isShowWaveAndFish.value?'100%':'0%', 
              '--activeShadow': storeState.isShowWaveAndFish.value?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isShowWaveAndFish.value?'100%':'50%'
            }">&nbsp;养鱼特效&nbsp;</a>
          </li>
          <!-- <li style="--clr:#dc00d4" @click="CCCCMode">
            <a href="#" data-text="&nbsp;CCCC" :style="{
              '--activeWidth': isCCCCMode?'100%':'0%', 
              '--activeShadow': isCCCCMode?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': isCCCCMode?'100%':'50%'
            }">&nbsp;CCCC&nbsp;</a>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="hiddenArea" v-else @mouseenter="hiddenAreaMouseEnter"></div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useStore } from "vuex";
  import { useState } from '../../store/useMapper'

  let { state, commit } = useStore()

  let isShowSidebar = ref(false)

  const storeState = useState(['isConciseMode', 'isShowWave', 'isShowWaveAndFish'])

  function changeConciseMode() {
    commit('changeConciseMode')
  }
  function showWave() {
    commit('showWave')
  }
  function showWaveAndFish() {
    commit('showWaveAndFish')
  }
  function CCCCMode() {
    isCCCCMode.value = !isCCCCMode.value
  }

  function maskMouseEnter() {
    isShowSidebar.value = false
  }
  function hiddenAreaMouseEnter() {
    isShowSidebar.value = true
  }
</script>

<style scoped lang="less">
.Sidebar {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  transition: all 1s;
  .show {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;
    .content {
      width: 25vw;
      height: 100%;
      backdrop-filter: blur(0.5rem);
      background-color: rgba(230, 235, 240, .95);
      box-sizing: border-box;
      box-shadow: 0 0 0.6rem rgba(0, 0, 0, .05);
      padding: 2vw;
      box-sizing: border-box;
      ul {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding-left: 0;
        li {
          list-style: none;
          position: relative;
          a {
            position: relative;
            font-size: 3rem;
            line-height: 3.2rem;
            text-decoration: none;
            letter-spacing: 0.2rem;
            color: transparent;
            -webkit-text-stroke: 0.05rem rgba(0, 0, 0, 0.5);
          }
          a::before {
            line-height: 3.2rem;
            content: attr(data-text);
            position: absolute;
            color: var(--clr);
            overflow: hidden;
            transition: 0.3s;
            border-right: 0.4rem solid var(--clr);
            -webkit-text-stroke: 0.02rem var(--clr);
            White-space: nowrap;
          }
          a:hover::before {
            // width: 50%;
            width: var(--activeAndHoverWidth);
            filter: drop-shadow(0 0 0.5rem var(--clr));
            // -webkit-text-stroke: 1px var(--clr);
          }
          a::before {
            width: var(--activeWidth);
            filter: var(--activeShadow);
            // -webkit-text-stroke: 1px var(--clr);
          }
        }
      }
    }
    .mask {
      flex: 1;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      z-index: 999;
    }
  }
  .hiddenArea {
    width: 2vw;
    height: 50vh;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>