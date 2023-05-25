<template>
  <div class="Sidebar">
    <div class="show" v-if="isShowSidebar">
      <div class="mask" @mouseenter="maskMouseEnter"></div>
      <div class="content">
        <ul>
          <li style="--clr:#00ade1">
            <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
          </li>
          <li style="--clr:#ff6493">
            <a href="#" data-text="&nbsp;AAA">&nbsp;AAA&nbsp;</a>
          </li>
          <li style="--clr:#ffdd1c">
            <a href="#" data-text="&nbsp;BBB">&nbsp;BBB&nbsp;</a>
          </li>
          <li style="--clr:#00dc82">
            <a href="#" data-text="&nbsp;CCC">&nbsp;CCC&nbsp;</a>
          </li>
          <li style="--clr:#dc00d4">
            <a href="#" data-text="&nbsp;DDD">&nbsp;DDD&nbsp;</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="hiddenArea" v-else @mouseenter="hiddenAreaMouseEnter"></div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";

  let isShowSidebar = ref(true)

  onMounted(() => {

  })

  function maskMouseEnter() {
    isShowSidebar.value = true
  }
  function hiddenAreaMouseEnter() {
    isShowSidebar.value = true
  }
</script>

<style scoped lang="less">
.Sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  .show {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .mask {
      flex: 1;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .content {
      width: 400px;
      height: 100%;
      background-color: black;
      ul {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 30px;
        li {
          list-style: none;
          position: relative;
          a {
            position: relative;
            font-size: 4em;
            text-decoration: none;
            line-height: 1em;
            letter-spacing: 2px;
            color: transparent;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
          }
          a::before {
            content: attr(data-text);
            position: absolute;
            color: var(--clr);
            overflow: hidden;
            width: 0;
            transition: 1s;
            border-right: 8px solid var(--clr);
            -webkit-text-stroke: 1px var(--clr);
            White-space: nowrap;
          }
          a:hover::before {
            width: 100%;
            // -webkit-text-stroke: 1px var(--clr);
            filter: drop-shadow(0 0 25px var(--clr));
          }
        }
      }
    }
  }
  .hiddenArea {
    width: 10px;
    height: 100%;
  }
}
</style>