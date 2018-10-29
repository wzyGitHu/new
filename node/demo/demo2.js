//引入http模块，require  加载
//var http=require("http");
//var server=http.createServer((require,res)=>{
//    //实参 和形参  arguments
//   res.end("hello word 中国");
//    // res=> resquest 请求  res=>response  响应
//    //设置响应头  状态码 设置类型     HTML类型     编码格式
//    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
//});
////监听服务    端口  ip
//server.listen(3000,"location");



//var http=require("http");
//var fs=require('fs');
//var server=http.createServer((req,res)=>{
//    //设置响应头  状态码 设置类型     HTML类型     编码格式
//    res.writeHead(200,{"Content-type":"text.html;charset=UTF-8"});
//    if(req.url=="/index1"){
//        fs.readFile("content.html",(err,data)=>{
//            res.end(data);
//        })
//
//    }else if(req.url=="/index2"){
//        fs.readFile("index1.html",(err,data)=>{
//            res.end(data);
//        })
//    }else if(req.url=="/aa.css"){
//        fs.readFile("red.css",(err,data)=>{
//            res.writeHead(200,{"Content-type":"text/css"});
//            res.end(data)
//        })
//    }else {
//        res.end("错误");
//    }
//}).listen(3000,"location");
//1.css加载
//2.图片加载 res.end()








//引用http模块 require 加载
var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    if (req.url == "/index1"){
        fs.readFile("content.html",(err,data)=>{
            res.end(data)
        });
    } else if(req.url == "/index2") {
        fs.readFile("context.html",  (err,data)=>{
            res.end(data)
        });
    }
    else if (req.url == "/aa.css"){
        fs.readFile("red.css",  (err,data)=>{
            res.writeHead(200,{"Content-type":"text/css"});
            res.end(data)
        });
    } else  if (req.url == "/001.jpg"){
        fs.readFile("index2.html",  (err,data)=>{
            res.end(data)
        });
    }
});

server.listen(3000,"localhost");
