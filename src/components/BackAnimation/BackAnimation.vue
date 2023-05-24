<template>
  <div class="BackAnimation">

    <!-- 流星 开始 -->
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <!-- 流星 结束 -->

    <!-- 波浪 开始 -->
    <div class="wave-wrapper">
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
    <!-- 波浪 结束 -->

  </div>
</template>

<script setup>
  
</script>

<style scoped lang="less">
// @meteorColor: rgba(244,65,165,1);
// @meteorColorTransparent: rgba(244,65,165,0.1);
@meteorColor: rgba(255,255,255,1);
@meteorColorTransparent: rgba(255,255,255,0.1);
.BackAnimation {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  /* 流星 开始 */
  span{
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    /* 发光效果 */
    box-shadow: 0 0 0 4px rgba(255,255,255,0.1),
    0 0 0 8px @meteorColorTransparent,
    0 0 20px @meteorColor;
    /* 执行动画 */
    animation: animate 3s linear infinite;
  }
  span::before{ /* 拖尾效果 */
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 3px;
    background: linear-gradient(90deg,@meteorColor,transparent);
  }
  /* 接下来分别为每一个流星设置位置、动画延迟时间、动画时长 */
  span:nth-child(1){
    top: 0;
    right: 0;
    /* initial关键字用于设置CSS属性为它的默认值 */
    left: initial;
    /* 动画延迟时间 */
    animation-delay: 0s;
    /* 动画时长 */
    animation-duration: 1s;
  }
  span:nth-child(2){
    top: 0;
    right: 80px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }
  span:nth-child(3){
    top: 80px;
    right: 0;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }
  span:nth-child(4){
    top: 0;
    right: 180px;
    left: initial;
    animation-delay: 0.6s;
    animation-duration: 1.5s;
  }
  span:nth-child(5){
    top: 0;
    right: 400px;
    left: initial;
    animation-delay: 0.8s;
    animation-duration: 2.5s;
  }
  span:nth-child(6){
    top: 0;
    right: 600px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
  }
  span:nth-child(7){
    top: 300px;
    right: 0;
    left: initial;
    animation-delay: 1.2s;
    animation-duration: 1.75s;
  }
  span:nth-child(8){
    top: 0;
    right: 700px;
    left: initial;
    animation-delay: 1.4s;
    animation-duration: 1.25s;
  }
  span:nth-child(9){
    top: 0;
    right: 1000px;
    left: initial;
    animation-delay: 0.75s;
    animation-duration: 2.25s;
  }
  span:nth-child(10){
    top: 0;
    right: 450px;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.25s;
  }
  @keyframes animateBg { /* 背景缩放动画 */
    0%,100%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.2);
    }
  }
  @keyframes animate { /* 流星划过动画 */
    0%{
      transform: rotate(315deg) translateX(0);
      opacity: 1;
    }
    90%{
      opacity: 1;
    }
    100%{
      transform: rotate(315deg) translateX(-1000px);
      opacity: 0;
    }
  }
  /* 流星 结束 */

  /* 波浪 开始 */
  .wave-wrapper {
    width: 100%;
    position:absolute;
    bottom: 0;
  }
  .waves {
    width: 100%;
    height: 15vh;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }
  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px,0,0);
    }
    100% { 
      transform: translate3d(85px,0,0);
    }
  }
  /* 波浪 结束 */
}
</style>