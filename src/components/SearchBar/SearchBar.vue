<template>
  <div class="search-wrap">
    <div class="isVpn">
      <a-checkbox v-model:checked="isVpn">VPN</a-checkbox>
    </div>
    <div class="SearchBar">
      <div class="left">
        <img class="search-type-img" :src="isVpn?'/src/assets/images/google-icon.png':'/src/assets/images/baidu-icon.png'" alt="">
        <caret-down-outlined />
      </div>
      <div class="search">
        <input v-model="searchParam" 
                @blur="searchInputBlur" 
                @focus="searchInputFocus"
                @keydown="searchInputKeydown" 
                type="text" 
                ref="searchInput" 
                id="searchInput" class="search-input" 
                placeholder="输入并搜索"
        >
        <sync-outlined spin @click="clear" class="clear-icon" v-show="searchParam" />
      </div>
      <button class="search-button" @click="e => toSearch()">
        <img class="search-icon" src="/src/assets/images/search-icon.svg" alt="">
      </button>
      <div class="content" id="content" v-if="searchParam" @mouseenter="recommendMoseenter" @mouseleave="recommendMoseleave">
        <div class="content-item" v-for="(item, index) in recommendList" :key="index" @click="recommendItemClick(item)">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { watchEffect } from 'vue'
  import axios from 'axios'
  import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons-vue';
  
  let isVpn = ref(false)
  let searchParam = ref('')

  let recommendList = ref([])
  let lastRecommendList = ref([])
  let isInRecommend = ref(false)

  onMounted(() => {
    //定义回调函数
    window.baidu = {
      sug: function(json) {
        recommendList.value = json.s
        lastRecommendList.value = json.s
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

  function getRecommendSearchList(param) {
    var sugurl = `http://suggestion.baidu.com/su?wd=${param}&cb=window.baidu.sug`
    var script = document.createElement("script")
    script.src = sugurl
    script.id = 'recommendScript'
    document.body.appendChild(script);
    document.body.removeChild(document.getElementById('recommendScript'))
  }

  function toSearch(param='') {
    let theParam = param ? param : searchParam.value
    if (searchParam.value) {
      isVpn.value ? window.open(`https://www.google.it/search?q=${theParam}`)
                  : window.open(`https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${theParam}`)
    } else {
      isVpn.value ? window.open(`https://www.google.it/`)
                  : window.open(`https://www.baidu.com/`)
    }
  }

  function searchInputFocus() { // 搜索框重新获取焦点
    if (searchParam.value) {
      getRecommendSearchList(searchParam.value)
      recommendList.value = lastRecommendList.value
    }
  }
  function searchInputBlur() { // 搜索框失去焦点
    if (!isInRecommend.value) {
      recommendList.value = []
    }
  }
  function searchInputKeydown(e) { // 搜索框监听键盘事件
    if (e.code === 'Enter') {
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
</script>

<style scoped lang="less">
.search-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 50px;
  .isVpn {
    margin-bottom: 10px;
  }
  .SearchBar {
    width: 500px;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 19px 0px;
    .left {
      min-width: 70px;
      max-width: 70px;
      background-color: white;
      height: 100%;
      border-radius: 50% 0 0 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .search-type-img {
        width: 40px;
        height: 40px;
      }
    }
    .search {
      width: 520px;
      background-color: white;
      height: 100%;
      position: relative;
      .search-input {
        height: 100%;
        width: calc(100% - 50px);
        box-sizing: border-box;
        background-color: rgb(255, 255, 255);
        border: none;
        outline: none;
        font-weight: 300;
        padding-left: 20px;
        padding: 20px;
        font-size: 24px;
        color: rgb(51, 51, 51);
      }
      .clear-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        font-size: 24px;
        cursor: pointer;
      }
    }
    .search-button {
      width: 70px;
      background-color: black;
      height: 100%;
      border-radius: 0 50% 50% 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .search-icon {
        width: 50%;
        height: 50%;
      }
    }
    .content {
      width: 100%;
      top: 110%;
      position: absolute;
      background-color: white;
      border-radius: 30px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 19px 0px;
      .content-item {
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        padding-left: 90px;
      }
      .content-item:hover {
        background-color: rgb(230,230,230);
      }
      .content-item:first-child:hover {
        border-radius: 30px 30px 0 0;
      }
      .content-item:last-child:hover {
        border-radius: 0 0 30px 30px;
      }
    }
  }
  
}
</style>