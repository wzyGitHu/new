//npm init 项目初始化  -y   默认所有配置
//install  ==i   --save ==-S  --save-dev  ==-D
var express=require("express");//基于原生node封装
var app=express();//调用函数
app.get("/index",(req,res)=>{
   res.send("Hello Word")
}).listen(3000);
//var http=require("http");
//http.createServer((req,res)=>{
//    if(req.url=="/index"){
//        res.end("Hello Word")
//    }
//}).listen(3000,"127.0.0.1");

//1.res.send({})  如果涉及到动态数据的时候就用此方法
//2.res.end（）   涉及到静态数据就用此方法