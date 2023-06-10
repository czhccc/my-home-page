<template>
  <div class="Countdown">
    <div class="clock-wrap">
      <div class="clock pro-0">
        <span class="count"></span>
        <div><BallStairs class="BallStairs" /></div>
      </div>
    </div>
    <div class="action">
      <div class="input">
        <input
          class="input-num"
          type="number"
          min="1"
          placeholder="minutes"
        />
        <input
          data-action="start"
          class="input-btn"
          type="button"
          value="Start"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BallStairs from './BallStairs/BallStairs.vue'
import $ from 'jquery';
import { onMounted } from 'vue';

let $step = 1;
let $loops = Math.round(100 / $step);
let $increment = 360 / $loops;
let $half = Math.round($loops / 2);
let $barColor = '#ec366b';
let $backColor = '#feeff4';

onMounted(() => {
  clock.init();
})
let clock = {
  interval: null,
  init: function () {
    $('.input-btn').click(function () {
      switch ($(this).data('action')) {
        case 'start':
          clock.stop();
          clock.start($('.input-num').val());
          break;
        case 'stop':
          clock.stop();
          break;
      }
    });
  },
  start: function (t) {
    var pie = 0;
    var num = 0;
    var min = t ? t : 1;
    var sec = min * 60;
    var lop = sec;
    $('.count').text(min);
    if (min > 0) {
      $('.count').addClass('min');
    } else {
      $('.count').addClass('sec');
    }
    clock.interval = setInterval(function () {
      sec = sec - 1;
      if (min > 1) {
        pie = pie + 100 / (lop / min);
      } else {
        pie = pie + 100 / lop;
      }
      if (pie >= 101) {
        pie = 1;
      }
      num = (sec / 60).toFixed(2).slice(0, -3);
      if (num == 0) {
        $('.count').removeClass('min').addClass('sec').text(sec);
      } else {
        $('.count').removeClass('sec').addClass('min').text(num);
      }
      //$('.clock').attr('class','clock pro-'+pie.toFixed(2).slice(0,-3));
      //console.log(pie+'__'+sec);
      let $i = pie.toFixed(2).slice(0, -3) - 1;
      if ($i < $half) {
        let $nextdeg = 90 + $increment * $i + 'deg';
        $('.clock').css({
          'background-image':
            'linear-gradient(90deg,' +
            $backColor +
            ' 50%,transparent 50%,transparent),linear-gradient(' +
            $nextdeg +
            ',' +
            $barColor +
            ' 50%,' +
            $backColor +
            ' 50%,' +
            $backColor +
            ')',
        });
      } else {
        let $nextdeg = -90 + $increment * ($i - $half) + 'deg';
        $('.clock').css({
          'background-image':
            'linear-gradient(' +
            $nextdeg +
            ',' +
            $barColor +
            ' 50%,transparent 50%,transparent),linear-gradient(270deg,' +
            $barColor +
            ' 50%,' +
            $backColor +
            ' 50%,' +
            $backColor +
            ')',
        });
      }
      if (sec == 0) {
        clearInterval(clock.interval);
        $('.count').text(0);
        $('.clock').removeAttr('style');
      }
    }, 1000);
  },
  stop: function () {
    clearInterval(clock.interval);
    $('.count').text(0);
    $('.clock').removeAttr('style');
  },
};
</script>

<style scoped lang="less">
.Countdown {
  width: 100%;
  height: 100%;
  *,:after,:before {
    box-sizing: border-box;
  }
  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
  .clearfix:after,
  .clearfix:before {
    content: '';
    display: table;
  }
  .clearfix:after {
    clear: both;
    display: block;
  }

  .clock:before,
  .count:after {
    content: '';
    position: absolute;
  }
  .clock-wrap {
    margin: auto;
    width: 25vh;
    height: 25vh;
    position: relative;
    border-radius: 4vh;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
  .clock {
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    position: absolute;
    background-color: #feeff4;
    transform: translate(-50% ,-50%);
  }
  .BallStairs {
    position: absolute;
    left: 53%;
    top: 72%;
    transform: translate(-50%, -50%);
  }
  .clock:before {
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    transform: translate(-50% ,-50%);
    border-radius: inherit;
    background-color: #ec366b;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15),
      0 0 1rem rgba(255, 255, 255, 0.75) inset;
  }
  .count {
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 20%;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
    position: absolute;
    text-align: center;
  }
  .count:after {
    width: 100%;
    display: block;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1rem;
    text-align: center;
    position: relative;
  }
  .count.sec:after {
    content: 'sec';
  }
  .count.min:after {
    content: 'min';
  }
  .action {
    margin: auto;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15),
      0 0 1rem rgba(255, 255, 255, 0.75) inset;
    border-radius: 0 2rem 2rem 0;
    max-width: 8.5vw;
  }
  .action .input {
    margin-top: 1vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .action .input-num {
    width: 100%;
    border: none;
    outline: none;
  }
  .action .input-btn {
    top: 0;
    right: 0;
    color: #fff;
    border: none;
    padding: 0.3rem;
    border-radius: 2rem;
    background-color: #ec366b;
    text-transform: uppercase;
    cursor: pointer;
  }
  .tbl {
    display: table;
    width: 100%;
  }
  .tbl .col {
    display: table-cell;
  }
}
</style>
