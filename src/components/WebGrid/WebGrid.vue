<template>
  <div class="WebGrid" @mousewheel="webGridMouseWheel">
    <transition
      mode="out-in" 
      :duration="animationDuration" 
      enter-active-class="animate__animated animate__rollIn"
      leave-active-class="animate__animated animate__rollOut"
    >
      <div class="items-wrapper" v-if="isLifeWebList">
        <div class="items" v-for="(item, index) in webListLife" :key="index" @click="openWeb(item.webUrl)">
          <div class="img-wrapper">
            <img class="icon" :src="item.iconUrl" alt="">
          </div>
          <div class="name" :style="{color: storeState.isConciseMode.value ? 'black' : 'white'}">{{item.name}}</div>
        </div>
      </div>
      <div class="items-wrapper" v-else>
        <div class="items" v-for="(item, index) in webListWork" :key="index" @click="openWeb(item.webUrl)">
          <div class="img-wrapper">
            <img class="icon" :src="item.iconUrl" alt="">
          </div>
          <div class="name" :style="{color: storeState.isConciseMode.value ? 'black' : 'white'}">{{item.name}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useState } from '../../store/useMapper';

  const storeState = useState(['isConciseMode'])

  let animationDuration = ref(500) // 要改的话记得改CSS的动画持续时间
  let isInInterval = ref(false)

  let isLifeWebList = ref(true)
  let preIsLifeWebList = ref(true) // 用于防止偶数次滚轮后最终的列表和上次是一样的
  let times = ref(0)

  let webListLife = ref([
    {name: 'B站', iconUrl: new URL('../../assets/images/web-icons/bilibili.png', import.meta.url).href, webUrl: 'https://www.bilibili.com/'},
    {name: '油管', iconUrl: new URL('../../assets/images/web-icons/youtube.png', import.meta.url).href, webUrl: 'https://www.youtube.com'},
    {name: '推特直播', iconUrl: new URL('../../assets/images/web-icons/twitch.png', import.meta.url).href, webUrl: 'https://www.twitch.tv/'},
    {name: '推特', iconUrl: new URL('../../assets/images/web-icons/twitter.png', import.meta.url).href, webUrl: 'https://www.twitter.com'},
    {name: 'pixiv', iconUrl: new URL('../../assets/images/web-icons/pixiv.png', import.meta.url).href, webUrl: 'http://www.pixiv.net/'},
  ])
  
  let webListWork = ref([
    {name: '腾讯企业邮箱', iconUrl: new URL('../../assets/images/web-icons/txqyyx.png', import.meta.url).href, webUrl: 'https://exmail.qq.com/cgi-bin/loginpage'},
    {name: 'CSDN', iconUrl: new URL('../../assets/images/web-icons/csdn.png', import.meta.url).href, webUrl: 'https://blog.csdn.net/eartholtainanwan'},
    {name: 'Github', iconUrl: new URL('../../assets/images/web-icons/github.png', import.meta.url).href, webUrl: 'https://github.com/'},
    {name: '微信公众平台', iconUrl: new URL('../../assets/images/web-icons/weixin-gzpt.png', import.meta.url).href, webUrl: 'https://mp.weixin.qq.com/'},
    {name: '微信小程序开发文档', iconUrl: new URL('../../assets/images/web-icons/weixin-kfzwd.png', import.meta.url).href, webUrl: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'},
    {name: 'Vue', iconUrl: new URL('../../assets/images/web-icons/vue.png', import.meta.url).href, webUrl: 'https://cn.vuejs.org/'},
    {name: 'React', iconUrl: new URL('../../assets/images/web-icons/react.png', import.meta.url).href, webUrl: 'https://react.docschina.org/'},
  ])

  function openWeb(webUrl) {
    window.open(webUrl);
  }

  function webGridMouseWheel(e) {
    if (isInInterval.value) return;
    isLifeWebList.value = !isLifeWebList.value
    if (!isInInterval.value) {
      isInInterval.value = true
      setTimeout(() => {
        isInInterval.value = false
      }, 500)
    }
  }

</script>

<style scoped lang="less">
.animate__animated.animate__rollIn {
  --animate-duration: 0.5s;
}
.animate__animated.animate__rollOut {
  --animate-duration: 0.5s;
}

@gridTotalWidth: 800px; // 容器的总宽度
@itemWidth: 100px; // 每一项的宽度
@rowGap: 40px; // 行间距
@columnGap: 40px; // 列间距
.WebGrid {
  width: @gridTotalWidth;
  padding-bottom: 100px;
  .items-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, @itemWidth);
    grid-row-gap: @rowGap; // 行间距
    grid-column-gap: @columnGap; // 列间距
    justify-content: space-between;
    .items {
      width: @itemWidth;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.5s;
      .img-wrapper {
        .icon {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 15px 0px;
          user-select: none;
          -webkit-user-drag: none;
        }
      }
      .name {
        text-align: center;
        display: inline-block;
        margin-top: 6px;
        font-weight: 700;
        border-radius: 8px;
        padding: 0 4px;
        font-size: 18px;
        user-select: none;
        -webkit-user-drag: none;
      }
    }
    .items:hover {
      transform: scale(1.2);
      .img-wrapper {
        .icon {
          box-shadow: rgba(1,175,253, 0.8) 0px 3px 15px 0px;
        }
      }
      .name {
        box-shadow: rgba(1,175,253, 0.8) 0px 3px 15px 0px;
      }
    }
  }
}
</style>