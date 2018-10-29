<template>
  <div class="veri">
    <canvas id="canvas" width="100" height="30" @click="change"></canvas>
  </div>
</template>

<script>
/**
 * 验证码：
 * 1、canvas    创建画布   
 *      1、获取元素 var ctx=document.getElementById()
 *      2、绘制绘图环境  ctx.getContext(2d)
 * 2、绘制矩形  定义宽高  背景颜色 
 * 3、绘制文字  font
 * 4、绘制小点  circle
 * 5、绘制干扰线  line
 * 6、旋转画布
 * 
 */
export default {
  data(){
    return{
      canvas:"",
      ctc:"",
      width:"",
      height:"",
      text:"ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890",
      str:"ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890"
    }
  },
  methods:{
    randomNum(min,max){
      return Math.ceil(Math.random()*(max-min)+min)
    },
    randomColor(min,max){
      var r=this.randomNum(min,max)
      var g=this.randomNum(min,max)
      var b=this.randomNum(min,max)
      return 'rgb('+r+','+g+','+b+')'
    },
    drawpic(){
      this.$http({
        url: "/api/Handler/AdminHandler/?action=veri",
        method: "get",
      }).then((result)=> {
        // console.log(result)
        var data=result.data.data
        console.log(data)
        this.getpic(data)
      });
    },
    getpic(result){
      // var str="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
      this.canvas=document.getElementById("canvas")
      this.ctx=this.canvas.getContext("2d");
      this.width=this.canvas.width;
      this.height=this.canvas.height;
      this.ctx.fillStyle=this.randomColor(50,255)
      this.ctx.fillRect(0,0,this.width,this.height)
      this.ctx.stroke()
      //绘制小点
      for(var i=0;i<50;i++){  
        this.ctx.beginPath()
        this.ctx.arc(this.randomNum(0,100),this.randomNum(0,30),.5,2*Math.PI,false)
        this.ctx.strokeStyle=this.randomColor(50,255)
        this.ctx.closePath()
        this.ctx.stroke() 
      } 
      
      //绘制干扰线
      for (var i = 0; i < 5; i++) {
        this.ctx.beginPath()
        this.ctx.moveTo(this.randomNum(0,100),this.randomNum(0,34))
        this.ctx.lineTo(this.randomNum(0,100),this.randomNum(0,34))
        this.ctx.strokeStyle=this.randomColor(50,200)
        this.ctx.stroke()
        this.ctx.closePath()
      }
      //绘制验证码
      for (var i = 0; i < result.length; i++) {
        // var txt = this.text[this.randomNum(0, this.text.length - 1)]
        this.ctx.fillStyle=this.randomColor(130,200)
        var x=20+20*i;
        var y=15+Math.random()*10;//产生一个随机值
        var fs=this.randomNum(15,20)+"px"      
        this.ctx.font = "bold " +fs+ " Arial";
        this.ctx.fillText(result[i],x,y)
      }
      // for (var i = 0; i < 4; i++) {
      //   var text= this.str[this.randomNum(0,this.str.length-1)];
      //   var x=15+i*this.randomNum(10,25);
      //   var y=this.randomNum(20,30)
      //    this.ctx.font="bold "+this.randomNum(15,20)+"px"+" Arial"
      //   this.ctx.fillStyle=this.randomColor(50,200)
      //   this.ctx.fillText(text,x,y)
      //   this.ctx.stroke()  //绘制
      // }
    },
    change(){
      this.drawpic()
    }
  },  

  mounted() {
    this.drawpic()
  },
}
</script>

<style scoped>

</style>
