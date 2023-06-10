<template>
  <div class="loader">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="line"></div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
@color: #ffec8b;

.loader {
  animation: loader 5s cubic-bezier(0.8, 0, 0.2, 1) infinite;
  height: 4.1rem;
  width: 4rem;
  @keyframes loader {
    90% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  
  .top {
    animation: top 5s linear infinite;
    border-top: 2rem solid @color;
    border-right: 2rem solid transparent;
    border-left: 2rem solid transparent;
    height: 0rem;
    width: 0.1rem;
    transform-origin: 50% 100%;
    @keyframes top {
      90% {
        transform: scale(0);
      }
      100% {
        transform: scale(0);
      }
    }
  }

  .bottom {
    animation: bottom 5s linear infinite;
    border-right: 2rem solid transparent;
    border-bottom: 2rem solid @color;
    border-left: 2rem solid transparent;
    height: 0rem;
    width: 0.1rem;
    transform: scale(0);
    transform-origin: 50% 100%;
    @keyframes bottom {
      10% {
        transform: scale(0);
      }
      90% {
        transform: scale(1);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  .line {
    animation: line 5s linear infinite;
    border-left: 0.1rem solid @color;
    height: 0rem;
    width: 0rem;
    position: absolute;
    top: 2rem;
    left: 1.95rem;
    @keyframes line {
      10% {
        height: 2rem;
      }
      100% {
        height: 1.8rem;
      }
    }
  }
}
</style>
