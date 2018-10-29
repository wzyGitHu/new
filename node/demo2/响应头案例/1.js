var http=require("http");
var fs=require("fs");
var url=require("url");
var path=require("path");
http.createServer((req,res)=>{
    var pathname=url.parse(req.url).pathname;
    //判断在地址栏里面输入的是文件地址还是文件夹地址
    if(pathname.indexOf(".")==-1){
        //127.0.0.1:3000/login.html
    pathname+="index.html"
    }
    //./static/logo.png
    //取到文件的路径  logo.png  http://127.0.0.1:3000/static
    var fileurl="./"+path.normalize("./static"+pathname);
    var extname=path.extname(pathname);
    fs.readFile(fileurl,(err,data)=>{
       if(err){
           res.end("404,页面未找到")
       }else{
           getname(extname,(mime)=>{
               res.writeHead(200,{"Content-type":mime});
               res.end()
           })
       }
    });
}).listen(3000,"127.0.0.1");
function getname(extname,callback){
    fs.readFile("./mime.json",(err,data)=>{
        var mimeJson=JSON.parse(data);
        console.log(mimeJson);
        var mime=mimeJson[extname] || "text/plain";
        callback(mime)
    })
}