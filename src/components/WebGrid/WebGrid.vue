<template>
  <div class="WebGrid" @mousewheel="webGridMouseWheel">
    <div class="items" v-for="(item, index) in webList" :key="index" @click="openWeb(item.webUrl)">
      <div class="img-wrapper">
        <img class="icon" :src="item.iconUrl" alt="">
        <!-- <img class="icon" src="../../assets/images/web-icons/bilibili.png" alt=""> -->
      </div>
      <div class="name" :style="{color: storeState.isConciseMode.value ? 'black' : 'white'}">{{item.name}}</div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useState } from '../../store/useMapper'

  const storeState = useState(['isConciseMode'])

  let webList = ref([])
  let wenListFlag = ref('life')

  let webListLife = ref([
    {name: 'B站', iconUrl: new URL('../../assets/images/web-icons/bilibili.png', import.meta.url).href, weburl: 'https://www.bilibili.com/'},
    {name: '油管', iconUrl: new URL('../../assets/images/web-icons/youtube.png', import.meta.url).href, webUrl: 'https://www.youtube.com'},
    {name: '推特直播', iconUrl: new URL('../../assets/images/web-icons/twitch.png', import.meta.url).href, webUrl: 'https://www.twitch.tv/'},
    {name: '推特', iconUrl: new URL('../../assets/images/web-icons/twitter.png', import.meta.url).href, webUrl: 'https://www.twitter.com'},
    {name: 'pixiv', iconUrl: new URL('../../assets/images/web-icons/pixiv.png', import.meta.url).href, webUrl: 'http://www.pixiv.net/'},
  ])
  
  let webListWork = ref([
    {name: 'CSDN', iconUrl: new URL('../../assets/images/web-icons/csdn.png', import.meta.url).href, weburl: 'https://blog.csdn.net/eartholtainanwan'},
    {name: 'Github', iconUrl: new URL('../../assets/images/web-icons/github.png', import.meta.url).href, webUrl: 'https://github.com/'},
    {name: '微信公众平台', iconUrl: new URL('../../assets/images/web-icons/weixin-gzpt.png', import.meta.url).href, webUrl: 'https://mp.weixin.qq.com/'},
    {name: '微信开发者文档', iconUrl: new URL('../../assets/images/web-icons/weixin-kfzwd.png', import.meta.url).href, webUrl: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'},
    {name: 'Vue', iconUrl: new URL('../../assets/images/web-icons/vue.png', import.meta.url).href, webUrl: 'https://cn.vuejs.org/'},
    {name: 'React', iconUrl: new URL('../../assets/images/web-icons/react.png', import.meta.url).href, webUrl: 'https://react.docschina.org/'},
  ])

  onMounted(() => {
    webList.value = webListLife.value
  })

  function openWeb(webUrl) {
    window.open(webUrl);
  }

  function webGridMouseWheel(e) {
    if (e.wheelDelta<0) {
      if (wenListFlag.value === 'work') return;
      wenListFlag.value = 'work'
      webList.value = webListWork.value
    } else if (e.wheelDelta>0) {
      if (wenListFlag.value === 'life') return;
      wenListFlag.value = 'life'
      webList.value = webListLife.value
    }
  }

</script>

<style scoped lang="less">
.WebGrid {
  width: 1000px;
  height: 500px;
  // background-color: pink;
  display: grid;
  grid-template-columns: repeat(auto-fill,100px);
  column-gap: 15px;
  justify-content: space-between;
  .items {
    width: 100px;
    height: 136px;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-wrapper {
      .icon {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 15px 0px;
        transition: all 0.5s;
      }
    }
    .name {
      height: 30px;
      line-height: 30px;
      display: inline-block;
      margin-top: 6px;
      font-weight: 700;
      border-radius: 8px;
      padding: 0 4px;
      font-size: 18px;
      transition: all 0.5s;
    }
  }
  .items:hover {
    .img-wrapper {
      .icon {
        width: 120px;
        height: 120px;
        box-shadow: rgba(1,175,253, 0.8) 0px 3px 15px 0px;
      }
    }
    .name {
      box-shadow: rgba(1,175,253, 0.8) 0px 3px 15px 0px;
      font-size: 20px;
    }
  }
}
</style>