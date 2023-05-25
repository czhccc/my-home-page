<template>
  <div class="FireworksTube">
    <img src="/src/assets/images/BackAnimation/lihuatong.png" class="lihuatong" alt="">
  </div>
</template>

<script setup>
  // 引入插件
import { confetti } from 'https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm';
import { onMounted } from 'vue';

  onMounted(() => {
    // 要操作的元素
    const lihuatong=document.querySelector('.lihuatong');

    // 喷出五彩纸屑
    const run=()=>{
        confetti({
            particleCount:100, //粒子数量
            spread:70, //扩散范围
            origin:{ //喷出的位置
                x:0.5,
                y:0.65
            }
        })
    }

    // 礼花筒绑定点击事件
    lihuatong.addEventListener('click',run);
  })
</script>

<style scoped lang="less">
.FireworksTube {
  .lihuatong {
    width: 50px;
    height: 87px;
  }
}
</style>