//加载express 作用：配置路由编写接口
var express = require('express');
//调用
var app = express();
//作用：解析路径
var path=require("path");
var bodyParser = require('body-parser');/*处理post请求*/
var cookie = require('cookie-parser');        //处理cookie请求
//连接数据库
var db = require('./model/db');
//后期保存信息
var session = require('express-session');       //缓存
//路由 接口的跳转
var router = require('express-router');
var index=require("./index");// 路由中间件
var flash=require("connect-flash");
//app.use(session());
app.use(cookie());
//处理post请求
app.use(bodyParser.json());
app.use(flash());
//处理字符串请求
app.use(bodyParser.urlencoded({extended:true}));

//加载静态资源目录
app.use(express.static(path.join(__dirname,"static")));
app.use("/Handler",index);
//使用session
//app.use(session)({
//    secret:"fcht",
//    name:"fcht",
//    "cookie":{maxAge:90000},
//    resave:false, //是否重新获取
//    saveUninitialized:false//是否自动保存为初始化的内容
//
//})
app.all('*', function(req, res, next) {
    //响应头  允许所有网段请求
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
module.exports=app;
