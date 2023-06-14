<template>
  <div class="Sidebar" :style="{width: isShowSidebar?'100vw':'6vw'}"
  >
    <div class="show" v-if="isShowSidebar">
      <div class="mask" @mouseenter="maskMouseEnter"></div>
      <div class="content">
        <ul>
          <li style="--clr:#ff6493" @click="changeFancifulMode">
            <a href="#" data-text="&nbsp;FancifulMode" :style="{
              '--activeWidth': storeState.isFancifulMode.value?'100%':'0%', 
              '--activeShadow': storeState.isFancifulMode.value?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isFancifulMode.value?'100%':'50%'
            }">&nbsp;FancifulMode&nbsp;</a>
          </li>
          <li style="--clr:#dc00d4" @click="changePoorMode">
            <a href="#" data-text="&nbsp;PoorMode" :style="{
              '--activeWidth': storeState.isPoorMode.value?'100%':'0%', 
              '--activeShadow': storeState.isPoorMode.value?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isPoorMode.value?'100%':'50%'
            }">&nbsp;PoorMode&nbsp;</a>
          </li>
          <li style="--clr:#ffdd1c" @click="showWave">
            <a href="#" data-text="&nbsp;ShowWave" :style="{
              '--activeWidth': storeState.isShowWave.value?'100%':'0%', 
              '--activeShadow': storeState.isShowWave.value?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isShowWave.value?'100%':'50%'
            }">&nbsp;ShowWave&nbsp;</a>
          </li>
          <li style="--clr:#00dc82" @click="showWaveAndFish">
            <a href="#" data-text="&nbsp;ShowFish" :style="{
              '--activeWidth': storeState.isShowWaveAndFish.value?'100%':'0%', 
              '--activeShadow': storeState.isShowWaveAndFish.value?'drop-shadow(0 0 1rem var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isShowWaveAndFish.value?'100%':'50%'
            }">&nbsp;ShowFish&nbsp;</a>
          </li>
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

  let { commit } = useStore()

  let isShowSidebar = ref(false)

  const storeState = useState(['isFancifulMode', 'isPoorMode', 'isShowWave', 'isShowWaveAndFish'])

  function changeFancifulMode() {
    commit('changeFancifulMode')
  }
  function changePoorMode() {
    commit('changePoorMode')
  }
  function showWave() {
    commit('showWave')
  }
  function showWaveAndFish() {
    commit('showWaveAndFish')
  }

  function maskMouseEnter() {
    isShowSidebar.value = false
  }
  function hiddenAreaMouseEnter() {
    isShowSidebar.value = true
  }
</script>

<style scoped lang="less">
@hiddenAreaWidth: 2vw;
@hiddenAreaHeight: 50vh;
@contentWidth: 25vw;
@contentPadding: 2vw;
@ulGap: 0.2rem;
@fontSize: 2.6rem;
@lineHeight: 3.2rem;
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
      width: @contentWidth;
      height: 100%;
      backdrop-filter: blur(0.5rem);
      background-color: rgba(230, 235, 240, .95);
      box-sizing: border-box;
      box-shadow: 0 0 0.6rem rgba(0, 0, 0, .05);
      padding: @contentPadding;
      box-sizing: border-box;
      ul {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: @ulGap;
        padding-left: 0;
        li {
          list-style: none;
          position: relative;
          a {
            position: relative;
            font-size: @fontSize;
            line-height: @lineHeight;
            text-decoration: none;
            letter-spacing: 0.2rem;
            color: transparent;
            -webkit-text-stroke: 0.05rem rgba(0, 0, 0, 0.5);
          }
          a::before {
            line-height: @lineHeight;
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
    width: @hiddenAreaWidth;
    height: @hiddenAreaHeight;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>