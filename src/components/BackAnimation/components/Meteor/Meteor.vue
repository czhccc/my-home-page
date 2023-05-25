<template>
  <div class="Meteor">
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
  </div>
</template>

<script setup>
  
</script>

<style scoped lang="less">
// @meteorColor: rgba(244,65,165,1);
// @meteorColorTransparent: rgba(244,65,165,0.1);
@meteorColor: rgba(255,255,255,1);
@meteorColorTransparent: rgba(255,255,255,0.1);

.Meteor {
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
}
</style>