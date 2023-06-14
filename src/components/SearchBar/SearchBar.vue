<template>
  <div class="SearchBar">
    <div class="SearchBar-container">
      <div class="left" @mouseenter="isShowLeftPopover = true">
        <img class="search-type-img" :src="currentSearchTypeIcon" alt="">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__flip"
          leave-active-class="animate__animated animate__hinge"
        >
          <div class="popover" v-if="isShowLeftPopover">
            <div class="popover-body">
              <div class="popover-item" @click="isShowLeftPopover = false"
                   v-for="(item, index) in searchTypeIconList" :key="index"
              >
                <img class="search-type-img" :src="item.url" alt=""
                    @click="changeSearchType(item)"
                    :class="{'popover-active':currentSearchType === item.type}"
                >
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="search-input-wrapper">
        <input v-model="searchParam" 
                @blur="searchInputBlur" 
                @focus="searchInputFocus"
                @keydown="searchInputKeydown"
                @mouseenter="isShowLeftPopover = false"
                type="text" 
                ref="searchInput" 
                id="searchInput" class="search-input" 
                placeholder="输入并搜索"
        >
        <img class="clear-icon" 
             src="../../assets/images/seachBar-icons/input-clear.png" alt=""
             @click="clear" v-show="searchParam"
        >
      </div>
      <button class="search-button search-button-concise" v-if="!storeState.isFancifulMode.value" @click="e => toSearch()">
        <img class="search-icon" src="../../assets/images/seachBar-icons/search-icon.png" alt="">
      </button>
      <button class="search-button search-button-fanciful" v-if="storeState.isFancifulMode.value" @click="e => toSearch()">
        <img class="search-icon" src="../../assets/images/seachBar-icons/search-icon.png" alt="">
      </button>
      <div class="recommend-content" id="recommend-content" v-if="searchParam" @mouseenter="recommendMoseenter" @mouseleave="recommendMoseleave">
        <div class="recommend-content-item" v-for="(item, index) in recommendList" :key="index" @click="recommendItemClick(item)">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onBeforeMount, onMounted, ref } from 'vue'
  import { watchEffect } from 'vue'

  import { useState } from '../../store/useMapper'
  
  let searchTypeIconList = ref([
    {type: 'google', url: require('../../assets/images/web-icons/google.png')},
    {type: 'baidu', url: require('../../assets/images/web-icons/baidu.png')},
    {type: 'bilibili', url: require('../../assets/images/web-icons/bilibili.png')},
    {type: 'youtube', url: require('../../assets/images/web-icons/youtube.png')},
    {type: 'google-translation', url: require('../../assets/images/web-icons/google-translation.png')},
    {type: 'baidu-translation', url: require('../../assets/images/web-icons/baidu-translation.png')},
    {type: 'pixiv', url: require('../../assets/images/web-icons/pixiv.png')},
  ])
  let currentSearchTypeIcon = ref('')
  let currentSearchType = ref('google')
  let searchParam = ref('')

  let recommendList = ref([])
  let isInRecommend = ref(false)

  let isShowLeftPopover = ref(false)
  let duringAnimateAndPreventDisappear = ref(false) // leftPopover添加了旋转出现的动画，旋转而变成一条线时鼠标移动会触发mouse

  const storeState = useState(['isFancifulMode'])

  onBeforeMount(() => {
    currentSearchTypeIcon.value = searchTypeIconList.value[0].url
  })

  onMounted(() => {
    //定义回调函数
    window.baidu = {
      sug: function(json) {
        if (json.s.length !== 0) {
          recommendList.value = json.s
        }
      }
    }
  })

  // 1.watchEffect传入的函数会被立即执行一次，收集的依赖发生变化时，会再次执行
  watchEffect(() => {
    // 2.没有指定具体的侦听对象，watchEffect在第一次立即执行时会自动收集依赖的对象
    if (searchParam.value) {
      getRecommendSearchList(searchParam.value)
    }
  })

  function getRecommendSearchList(param) { // 百度关键字推荐接口
    var sugurl = `http://suggestion.baidu.com/su?p=3&ie=UTF-8&cb=&wd=${param}&cb=window.baidu.sug`
    var script = document.createElement("script")
    script.src = sugurl
    script.id = 'recommendScript'
    document.body.appendChild(script);
    document.body.removeChild(document.getElementById('recommendScript'))
  }

  function toSearch(param='') {
    let theParam = param ? param : searchParam.value
    if (searchParam.value) {
      switch (currentSearchType.value) {
        case 'google': window.open(`https://www.google.it/search?q=${theParam}`);break;
        case 'baidu': window.open(`https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${theParam}`);break;
        case 'bilibili': window.open(`https://search.bilibili.com/all?keyword=${theParam}`);break;
        case 'youtube': window.open(`https://www.youtube.com/results?search_query=${theParam}`);break;
        case 'google-translation': window.open(`https://translate.google.it/?hl=zh-CN&sl=zh-CN&tl=en&text=${theParam}&op=translate`);break;
        case 'baidu-translation': window.open(`https://fanyi.baidu.com/translate#zh/en/${theParam}`);break;
        case 'pixiv': window.open(`https://www.pixiv.net/tags/${theParam}`);break;
        default: break;
      }
    } else {
      switch (currentSearchType.value) {
        case 'google': window.open(`https://www.google.it/`);break;
        case 'baidu': window.open(`https://www.baidu.com/`);break;
        case 'bilibili': window.open(`https://www.bilibili.com/`);break;
        case 'youtube': window.open(`https://www.youtube.com/`);break;
        case 'youtube': window.open(`https://www.youtube.com/`);break;
        case 'google-translation': window.open(`https://translate.google.it/?hl=zh-CN&sl=zh-CN&tl=en&op=translate`);break;
        case 'baidu-translation': window.open(`https://fanyi.baidu.com/translate`);break;
        case 'pixiv': window.open(`https://www.pixiv.net/`);break;
        default: break;
      }
    }
  }

  function searchInputFocus() { // 搜索框重新获取焦点
    if (searchParam.value) {
      getRecommendSearchList(searchParam.value)
    }
  }
  function searchInputBlur() { // 搜索框失去焦点
    if (!isInRecommend.value) {
      recommendList.value = []
    }
  }
  function searchInputKeydown(e) { // 搜索框监听键盘事件
    if (e.code === 'Enter' && !e.isComposing) {
      toSearch()
    }
  }

  function clear() {
    searchParam.value = ''
  }
  function recommendMoseenter() {
    isInRecommend.value = true
  }
  function recommendMoseleave() {
    isInRecommend.value = false
  }
  function recommendItemClick(item) {
    toSearch(item)
  }

  function changeSearchType(item) {
    currentSearchTypeIcon.value = item.url
    currentSearchType.value = item.type
  }
</script>

<style scoped lang="less">
.animate__animated.animate__flip {
  --animate-duration: 0.8s;
}

.SearchBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  .SearchBar-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: calc(100% / 2);
    box-shadow: rgba(0, 0, 0, 0.2) 0rem 1rem 4rem 0rem;
    .left {
      width: 10%;
      height: 100%;
      background-color: white;
      border-radius: 50% 0 0 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      .search-type-img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
      }
      .popover {
        width: 100%;
        padding: 10%;
        background-color: white;
        position: absolute;
        top: -10%; // 和padding-top有关
        z-index: 999;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.2) 0rem 1rem 4rem 0rem;
        .popover-body {
          .popover-item {
            box-sizing: border-box;
            text-align: center;
            padding: 10%;
            img {
              width: 3.5rem;
              height: 3.5rem;
            }
          }
          .popover-active {
            transform: scale(1.2);
            box-shadow: rgba(1,175,253, 1) 0em 0rem 1.5rem 0em;
          }
        }
      }
    }
    .search-input-wrapper {
      flex: 1;
      background-color: white;
      height: 100%;
      position: relative;
      .search-input {
        vertical-align: middle;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: rgb(255, 255, 255);
        border: none;
        outline: none;
        padding-right: 3.4rem;
        font-size: 1.8rem;
        color: rgb(51, 51, 51);
      }
      .clear-icon {
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.2rem;
        cursor: pointer;
      }
    }
    .search-button {
      width: 10%;
      height: 100%;
      border-radius: 0 50% 50% 0;
      border: none;
      padding: 0;
      position: relative;
      cursor: pointer;
      .search-icon {
        position: absolute;
        width: 3rem;
        height: 3rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .search-button-concise {
      height: 100%;
      background-color: black;
    }
    .search-button-fanciful {
      height: 100%;
      background: linear-gradient(90deg,#f441a5,#FF7F00,#ffeb3b,#17ff17,#45fffc,#03a9f4,#b661fd,#f441a5);
      background-size: 400%;
      animation: sun 10s linear infinite;
    }
    .search-button:hover{
      background: linear-gradient(90deg,#f441a5,#FF7F00,#ffeb3b,#17ff17,#45fffc,#03a9f4,#b661fd,#f441a5);
      background-size: 400%;
      animation: sun 10s linear infinite;
    }
    @keyframes sun{
      100%{
        background-position: 400% 0;
      }
    }
    .recommend-content {
      width: 100%;
      top: 110%;
      position: absolute;
      background-color: white;
      border-radius: 1.5rem;
      box-shadow: rgba(0, 0, 0, 0.2) 0rem 1rem 4rem 0rem;
      z-index: 999;
      overflow: hidden;
      .recommend-content-item {
        cursor: pointer;
        height: 2rem;
        line-height: 2rem;
        padding: 0.4rem 0;
        padding-left: 4.5rem;
        font-size: 1.2rem;
      }
      .recommend-content-item:hover {
        background-color: rgb(230,230,230);
      }
    }
  }
}
</style>