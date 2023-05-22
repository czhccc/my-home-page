<template>
  <div class="Clock">
    <canvas id="canvas" width="220" height="220">
      你的浏览器不支持该元素！赶紧下载最新版本浏览器或使用其他浏览器！
    </canvas>
    <div><b>{{thisYearPassedDays}}</b> ~ <b>{{365-thisYearPassedDays}}</b> ~ <b>{{utilAge29Days}}</b></div>
    <!-- <div>
      <div>今年已过<b>{{thisYearPassedDays}}</b>天，还剩<b>{{365-thisYearPassedDays}}</b>天</div>
      <div>距离29岁只剩<b>{{utilAge29Days}}</b>天</div>
    </div> -->
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  

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
    context.lineWidth = clockDimensions/15;
    context.strokeStyle = "#A7C0DC";
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
.Clock {
  position: fixed;
  left: 10px;
  top: 10px;
  text-align: center;
  padding-bottom: 10px;
  border-radius: 20px;
  border: 1px solid rgb(177, 176, 176);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 19px 0px;
}
</style>