<template>
  <div class="ColorfulCircle"></div>
</template>

<script setup></script>

<style scoped lang="less">
.ColorfulCircle {
  /* 相对定位 */
  position: relative;
  width: 240px;
  height: 240px;
  /* 渐变背景 金色到透明 */
  background: linear-gradient(gold, transparent 40%);
  border-radius: 50%;
  /* 执行动画：动画名 时长 线性 无限次播放 */
  animation: roll 1s linear infinite;
}
/* 遮罩层 */
.ColorfulCircle::before {
  content: '';
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background-color: white;
  /* 绝对定位 居中 */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.ColorfulCircle::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(gold, transparent 40%);
  border-radius: 50%;
  /* 模糊滤镜 */
  filter: blur(30px);
  z-index: -1;
}

/* 定义动画 */
@keyframes roll {
  to {
    transform: rotateZ(360deg);
    /* 转动时再加个颜色变化 */
    /* 颜色滤镜 通过设置度数可改变颜色 */
    filter: hue-rotate(360deg);
  }
}
</style>
