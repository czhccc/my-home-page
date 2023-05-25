<template>
  <div class="Clock">
    <canvas id="canvas" width="220" height="220">
      你的浏览器不支持该元素！赶紧下载最新版本浏览器或使用其他浏览器！
    </canvas>
    <!-- <div class="text-wrapper">
      {{thisYearPassedDays}} ~ {{365-thisYearPassedDays}} ~ {{utilAge29Days}}
    </div> -->
    <div class="text-wrapper">
      <span class="text text1">{{thisYearPassedDays}}</span>
      ~ 
      <span class="text text2">{{365-thisYearPassedDays}}</span>
      ~
      <span class="text text3">{{utilAge29Days}}</span>
    </div>
    <!-- <div>
      <div>今年已过<b>{{thisYearPassedDays}}</b>天，还剩<b>{{365-thisYearPassedDays}}</b>天</div>
      <div>距离29岁只剩<b>{{utilAge29Days}}</b>天</div>
    </div> -->

    <!-- 周长动画 -->
    <span class="bg-span-1"></span>
    <span class="bg-span-2"></span>
    <span class="bg-span-3"></span>
    <span class="bg-span-4"></span>

    <div class="mask"></div>

    <div class="hourglass-wrapper">
      <Hourglass />
    </div>
    

  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import Hourglass from './components/Hourglass/Hourglass.vue'

  let thisYearPassedDays = ref(0)
  let utilAge29Days = ref(0)

  onMounted(() => {
    drowClock()
    getUtilAge29Days()
  })
  
  function drowClock(){
    let remainingTime = getPassedTime() // 返回的是还剩余多少天
    let passedTime = 365 - remainingTime // 已经过了多少天
    let passedTimePercentage = passedTime / 365 // 已经过了多少天的百分比
    
    //获取到canvas元素
    var canvas = document.getElementById('canvas');
    //获取canvas中的画图环境
    var context = canvas.getContext('2d'); 

    //钟表的大小：初始值设置
    var clockDimensions = 100;

    //清理当前画布，以便后期绘制
    context.clearRect(0,0,canvas.width,canvas.height);
    //绘制表盘
    context.beginPath(); //开启新路径
    context.lineWidth = clockDimensions/50;
    context.strokeStyle = "#FFEC8B";
    //绘制表盘圆圈
    context.arc(canvas.width/2,canvas.height/2,clockDimensions,0,Math.PI*2,false);
    context.stroke();//描边绘制 

    //绘制表盘的刻度线
    for(var i=1;i<=60;i++){
      if(i%5==0){
        context.save();//保存当前绘制环境
        context.beginPath();
        context.lineWidth =clockDimensions/30;
        context.strokeStyle = "#9AABB1";
        //重置坐标原点（0,0）
        context.translate(canvas.width/2,canvas.height/2);
        //绘制环境旋转方法,以（0,0）为参考点进行旋转
        context.rotate(Math.PI*2/60 * i);
        context.moveTo(0,clockDimensions-clockDimensions/30);
        context.lineTo(0,clockDimensions-clockDimensions/8);
        context.stroke();
        context.beginPath();
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = 'bold '+Math.floor(clockDimensions/10)+'px 宋体';
        context.fillStyle = "#03671F";
        context.fillText(i/5,0,0-(clockDimensions-clockDimensions/5));
        context.fill();
        context.restore();//恢复当前保存的绘制环境
      }else {
        context.save();
        context.beginPath();
        context.lineWidth = Math.floor(clockDimensions/100);
        context.strokeStyle = "#8EA5AB";
        //重置坐标原点（0,0）
        context.translate(canvas.width / 2, canvas.height / 2);
        //绘制环境旋转方法,以（0,0）为参考点进行旋转
        context.rotate(Math.PI * 2 / 60 * i);
        context.moveTo(0, clockDimensions-clockDimensions/20);
        context.lineTo(0, clockDimensions-clockDimensions/10);
        context.stroke();
        context.restore();
      }
    } 

    // 开始一条新路径
    context.beginPath();
    context.fillStyle = "rgb(40,44,52)";
    // 位移到圆心，方便绘制
    context.translate(canvas.width/2, canvas.height/2);
    // 移动到圆心
    context.moveTo(0, 0);
    // 绘制圆弧
    let endLocation = 2*passedTimePercentage + 1.5
    context.arc(0, 0, 65, 1.5*Math.PI, endLocation*Math.PI, false);
    // context.arc(canvas.width/2, canvas.height/2, 65, 1.5*Math.PI, 3.4*Math.PI, false);
    // 闭合路径
    context.closePath();
    context.fill();
  }

  // 获取今年的剩余天数
  function getPassedTime() { 
    let date = new Date(); 
    let year = date.getFullYear(); 
    let date2 = new Date(year, 11, 30, 23, 59, 59,999);
    let time = (date2 - date) / 1000; 
    var day = Math.floor(time / (24 * 60 * 60))

    thisYearPassedDays.value = day

    return day
  }

  // 获取29岁的剩余天数
  function getUtilAge29Days() { 
    let date = new Date(); 
    let date2 = new Date('2028-2-6 23:59:59'); 
    let time = (date2 - date) / 1000; 
    var day = Math.floor(time / (24 * 60 * 60))

    utilAge29Days.value = day
  }
  
</script>

<style scoped lang="less">
@canvasWidth: 220px;
@canvasHeight: 220px;

.Clock {
  position: fixed;
  left: 10px;
  top: 10px;
  text-align: center;
  padding-bottom: 10px;
  // border-radius: 20px;
  // border: 1px solid rgb(177, 176, 176);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 19px 0px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  
  // .text-wrapper{
  //   // color: linear-gradient(to right,red,green);
  //   color: white;
  //   /* 将元素裁剪为一个圆形（100px表示圆的直径，0% 50%表示圆心的位置） */
  //   // clip-path: circle(100px at 0% 50%);
  //   animation: light 5s infinite;
  // }

  /* 定义动画 改变圆心的位置 */
  // @keyframes light{
  //   0%{
  //     clip-path: circle(20px at 0% 50%);
  //   }
  //   50%{
  //     clip-path: circle(20px at 100% 50%);
  //   }
  //   100%{
  //     clip-path: circle(20px at 0% 50%);
  //   }
  // }


  .text-wrapper {
    .text {
      color: white;
      font-weight: bold;
      color: #111;
      /* 模糊滤镜 */
      filter: blur(2px);
      /* 执行动画：动画名称 时长 线性的 无限次播放 */
      animation: animate 2.5s linear infinite;
    }
    .text1 {
      animation-delay: 0s;
    }
    .text2 {
      animation-delay: 0.5s;
    }
    .text3 {
      animation-delay: 1s;
    }
    /* 文字发光动画 */
    @keyframes animate {
      0%,100%{
        color: #fff;
        /* 模糊滤镜 */
        filter: blur(2px);
        /* 文字阴影 */
        text-shadow: 
          0 0 10px white,
          0 0 20px white,
          0 0 30px white;
        }
      5%,95%{
        color: #111;
        filter: blur(0px);
        text-shadow: none;
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // backdrop-filter: blur(10px);
  }
  .hourglass-wrapper {
    width: @canvasWidth;
    height: @canvasHeight;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>

<!-- 周长边框动态条 -->
<style scoped lang="less">
  .bg-span-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    // background: linear-gradient(to right, #ffffff, #17ff8f);
    background: linear-gradient(to right, #f441a5,#FF7F00,#ffeb3b,#17ff17,#45fffc,#03a9f4,#b661fd,#f441a5);
    animation: animate1 2s linear infinite;
  }
  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .bg-span-2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #f441a5,#FF7F00,#ffeb3b,#17ff17,#45fffc,#03a9f4,#b661fd,#f441a5);
    animation: animate2 2s linear infinite;
    animation-delay: -1s;
  }
  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  .bg-span-3 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to left, #f441a5,#FF7F00,#ffeb3b,#17ff17,#45fffc,#03a9f4,#b661fd,#f441a5);
    animation: animate3 2s linear infinite;
  }
  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .bg-span-4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to top, #f441a5,#FF7F00,#ffeb3b,#17ff17,#45fffc,#03a9f4,#b661fd,#f441a5);
    animation: animate4 2s linear infinite;
    animation-delay: -1s;
  }
  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>