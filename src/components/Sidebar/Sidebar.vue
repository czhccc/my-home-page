<template>
  <div class="Sidebar" :style="{width: isShowSidebar?'100vw':'10px'}"
  >
    <div class="show" v-if="isShowSidebar">
      <div class="mask" @mouseenter="maskMouseEnter"></div>
      <div class="content">
        <ul>
          <li style="--clr:#00ade1" @click="wordMode">
            <a href="#" data-text="&nbsp;工作模式" :style="{
              '--activeWidth': isWordMode?'100%':'0%', 
              '--activeShadow': isWordMode?'drop-shadow(0 0 25px var(--clr))':'unset',
              '--activeAndHoverWidth': isWordMode?'100%':'50%'
            }">&nbsp;工作模式&nbsp;
            </a>
          </li>
          <li style="--clr:#ff6493" @click="changeConciseMode">
            <a href="#" data-text="&nbsp;简约模式" :style="{
              '--activeWidth': storeState.isConciseMode.value?'100%':'0%', 
              '--activeShadow': storeState.isConciseMode.value?'drop-shadow(0 0 25px var(--clr))':'unset',
              '--activeAndHoverWidth': storeState.isConciseMode.value?'100%':'50%'
            }">&nbsp;简约模式&nbsp;</a>
          </li>
          <li style="--clr:#ffdd1c" @click="AAAAMode">
            <a href="#" data-text="&nbsp;AAAA" :style="{
              '--activeWidth': isAAAAMode?'100%':'0%', 
              '--activeShadow': isAAAAMode?'drop-shadow(0 0 25px var(--clr))':'unset',
              '--activeAndHoverWidth': isAAAAMode?'100%':'50%'
            }">&nbsp;AAAA&nbsp;</a>
          </li>
          <li style="--clr:#00dc82" @click="BBBBMode">
            <a href="#" data-text="&nbsp;BBBB" :style="{
              '--activeWidth': isBBBBMode?'100%':'0%', 
              '--activeShadow': isBBBBMode?'drop-shadow(0 0 25px var(--clr))':'unset',
              '--activeAndHoverWidth': isBBBBMode?'100%':'50%'
            }">&nbsp;BBBB&nbsp;</a>
          </li>
          <li style="--clr:#dc00d4" @click="CCCCMode">
            <a href="#" data-text="&nbsp;CCCC" :style="{
              '--activeWidth': isCCCCMode?'100%':'0%', 
              '--activeShadow': isCCCCMode?'drop-shadow(0 0 25px var(--clr))':'unset',
              '--activeAndHoverWidth': isCCCCMode?'100%':'50%'
            }">&nbsp;CCCC&nbsp;</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="hiddenArea" v-else @mouseenter="hiddenAreaMouseEnter"></div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { useState } from '../../store/useMapper'

  let { state, commit } = useStore()

  let isShowSidebar = ref(false)

  let isWordMode = ref(false)
  let isAAAAMode = ref(false)
  let isBBBBMode = ref(false)
  let isCCCCMode = ref(false)

  onMounted(() => {

  })

  const storeState = useState(['isConciseMode'])

  function wordMode() {
    isWordMode.value = !isWordMode.value
  }
  function changeConciseMode() {
    commit('changeConciseMode')
  }
  function AAAAMode() {
    isAAAAMode.value = !isAAAAMode.value
  }
  function BBBBMode() {
    isBBBBMode.value = !isBBBBMode.value
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
@itemHeight: 40px;
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
      backdrop-filter: blur(18px);
      background-color: rgba(230, 235, 240, .95);
      box-sizing: border-box;
      box-shadow: 0 0 30px rgba(0, 0, 0, .05);
      padding: 2vw;
      box-sizing: border-box;
      ul {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 0;
        li {
          list-style: none;
          position: relative;
          a {
            position: relative;
            font-size: 3rem;
            line-height: 3rem;
            text-decoration: none;
            letter-spacing: 2px;
            color: transparent;
            -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
          }
          a::before {
            content: attr(data-text);
            position: absolute;
            color: var(--clr);
            overflow: hidden;
            // width: 0;
            transition: 0.3s;
            border-right: 8px solid var(--clr);
            -webkit-text-stroke: 1px var(--clr);
            White-space: nowrap;
          }
          a:hover::before {
            // width: 50%;
            width: var(--activeAndHoverWidth);
            filter: drop-shadow(0 0 25px var(--clr));
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
    width: 10px;
    height: 50vh;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>