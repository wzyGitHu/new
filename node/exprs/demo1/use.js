//学习的模板引擎 art-template     ejs   jade
//node 框架
//express
//
//koa2

//后端数据库
//MongoDB

//mysql
var express=require("express");
var app=express();
//如果路径里面没有任何东西时那么默认的路径为“/”
app.use((req,res,next)=>{
    console.log(new Date())
    next()  //执行函数
});
app.get("/admin",(req,res)=>{
    console.log(req.originalUrl);//取/后面的所有值
    console.log(req.baseUrl);//没有值 空白
    console.log(req.path);//取/后面的第一个
})
app.listen(3000);