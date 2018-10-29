//var http=require("http");
//var url=require("url");
//http.createServer((req,res)=>{
//    var query=url.parse(req.url,true).query;
//    var pathname=url.parse(req.url,true).pathname;
//    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
//    if(pathname=="/student"&&(query.Id).length <= 4){
//        res.write("<h1>学生的ID是"+query.Id+"</h1>");
//    }else if(pathname=="/teacher"&&(query.Id).length <= 3){
//            res.write("<h1>老师的ID是"+query.Id+"</h1>");
//    }else{}
//    res.write("<h1>无此信息</h1>");
//    res.end()
//}).listen(4000,"127.0.0.1");


var http=require("http");
var url=require("url");

http.createServer((req,res)=>{
    var url=req.url;
    if(url.substring(0,9)=="/student/"){
        var studentId=url.substr(9);
        if((/^\d{9}$/).test(studentId)){
            console.log("学员ID:"+studentId)
        }else{
            console.log("学院Id不正确")
        }
    }else if(url.substring(0,9)=="/teacher/"){
        var teacherId=url.substr(9);
    }
    else{
        console.log("没有此学员")
    }
   res.end()
}).listen(10000,"127.0.0.1");
