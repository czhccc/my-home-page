<template>
  <div class="BallStairs">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.BallStairs {
  /* 相对定位 */
  position: relative;
  color: #fff;
  width: 96px;
  height: 68px;
}
.BallStairs div {
  /* currentColor可以获取到父元素的color */
  background-color: currentColor;
}
/* BallStairs下的第一个div（小球） */
.BallStairs div:nth-child(1) {
  width: 32px;
  height: 32px;
  /* 绝对定位 */
  position: absolute;
  bottom: 32%;
  left: 18%;
  border-radius: 50%;
  /* 设置变换基点的位置 */
  transform-origin: center bottom;
  /* 执行动画：动画名 时长 加速后减速 无限次播放 */
  animation: ball-jump 0.6s ease-in-out infinite;
}
/* BallStairs下的非第一个div（其他三个div，楼梯） */
.BallStairs div:not(:nth-child(1)) {
  width: 32px;
  height: 5px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(60%);
  animation: ball-steps 1.8s linear infinite;
}
/* 接下来需要分别为每一节楼梯设置不同的动画延迟 */
.BallStairs div:nth-child(2) {
  animation-delay: 0s;
}
.BallStairs div:nth-child(3) {
  animation-delay: -0.6s;
}
.BallStairs div:nth-child(4) {
  animation-delay: -1.2s;
}

/* 定义动画 */
/* 小球弹跳动画 */
@keyframes ball-jump {
  0% {
    transform: scale(1, 0.7);
  }
  20% {
    transform: scale(0.7, 1.2);
  }
  40% {
    transform: scale(1, 1);
  }
  50% {
    bottom: 150%;
    transform: scale(1, 1);
  }
  80%,
  90% {
    transform: scale(0.7, 1.2);
  }
  100% {
    transform: scale(1, 0.7);
  }
}
/* 楼梯移动动画 */
@keyframes ball-steps {
  0% {
    top: 0;
    right: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 100%;
    right: 100%;
    opacity: 0;
  }
}
</style>
