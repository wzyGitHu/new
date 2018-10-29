//功能：根据对应的路由跳转页面
//页面：首页  学生页 404页面
var http=require("http");
var route=require("./2.js");
http.createServer((req,res)=>{
    if(req.url=="/"){
        route.showIdex(req, res)
    }else if(req.url.substring(0,9)=="/Student/"){
        route.showStudent(req,res)
    }else {
        route.show404(req,res)
    }
}).listen(3000,"127.0.0.1");