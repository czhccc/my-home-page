<template>
  <div class="ThreeSquare">
    <div class="square">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div class="square">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div class="square">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
  </div>
</template>

<script setup>
  
</script>

<style scoped lang="less">
.ThreeSquare {
  
}
.ThreeSquare
{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ThreeSquare .square
{
  position: absolute;
  width: 200px;
  height: 200px;
}

.ThreeSquare .square:nth-child(2)
{
  transform: translate(-25%, -25%) rotateX(180deg);
  filter: hue-rotate(60deg);
}


.ThreeSquare .square:nth-child(3)
{
  transform: translate(25%, 25%) rotateX(180deg);
  filter: hue-rotate(180deg);
}

.ThreeSquare .square::before
{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #0f0;
  box-shadow: 0 0 0 8px #0f03, 0 0 0 15px #0f01;
  animation: animateSquare 4s linear infinite;
}

@keyframes animateSquare {
  0%
  {
    transform: translate(2px, 2px);
  }
  25%
  {
    transform: translate(178px, 2px);
  }
  50%
  {
    transform: translate(178px, 178px);
  }
  75%
  {
    transform: translate(2px, 178px);
  }
  100%
  {
    transform: translate(2px, 2px);
  }
}

.ThreeSquare .square span
{
  position: absolute;
  inset: 10px;
  overflow: hidden;
  transform: rotate(calc(90deg * var(--i)));

}

.ThreeSquare .square span::before
{
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #0f0;
  transform: translateX(-100%);
  animation: animate 4s linear infinite;
  animation-delay: calc(1s * var(--i));
}

@keyframes animate {

  0%
  {
    transform: translateX(-100%);
  }
  
  50%, 100%
  {
    transform: translateX(100%);
  }
  
}
</style>