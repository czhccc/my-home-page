<template>
  <div class="ConveyerBelt">
    <!-- --i为自定义属性（变量），CSS中通过var函数对其调用 -->
    <div style="--i: 0"></div>
    <div style="--i: 1"></div>
    <div style="--i: 2"></div>
    <div style="--i: 3"></div>
    <div style="--i: 4"></div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.ConveyerBelt {
  width: 100px;
  position: relative;
}
.ConveyerBelt div {
  width: 30px;
  height: 30px;
  background-color: #0abde3;
  /* 绝对定位 */
  position: absolute;
  /* 通过var函数调用自定义属性--i，并计算出各个div的left值 */
  left: calc(var(--i) * 30px);
  /* 执行动画：动画名 时长 线性的 无限次播放 */
  animation: move 2s linear infinite;
  /* 计算并设置每个动画的延迟时间 */
  animation-delay: calc(var(--i) * -400ms);
}

/* 定义动画 */
@keyframes move {
  0% {
    /* 5个方块，每个宽度30，所以这里为5*30=150 */
    left: 150px;
    top: 0;
  }
  80% {
    left: 0;
    top: 0;
  }
  85% {
    left: 0;
    top: -30px;
    width: 30px;
    height: 30px;
  }
  88% {
    left: 0;
    top: -30px;
  }
  90% {
    width: 60px;
    height: 25px;
  }
  95% {
    left: 150px;
    top: -30px;
    width: 30px;
    height: 30px;
  }
  98% {
    left: 150px;
    top: -30px;
  }
  100% {
    left: 150px;
    top: 0;
  }
}
</style>
