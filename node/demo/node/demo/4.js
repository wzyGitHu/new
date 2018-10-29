var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    var query=url.parse(req.url,true).query;
    var pathname=url.parse(req.url,true).pathname;
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(pathname=="/student"&&(query.Id).length <= 4){
        res.write("<h1>学生的ID是"+query.Id+"</h1>");
    }else if(pathname=="/teacher"&&(query.Id).length <= 4){
            res.write("<h1>老师的ID是"+query.Id+"</h1>");
    }
    res.end()
}).listen(4000,"127.0.0.1");

