var http=require("http");
var url=require("url");
var path=require("path");
http.createServer((req,res)=>{
    //url.parse()   Json.parse()转换为对象   stringify()转换为字符串
    var pathname=url.parse(req.url).pathname;
    var query=url.parse(req.url,true).query;
    //query时如果第二个参数是true 会生成一个对象
    //pathname  /red    斜杠后面的
    //query     ?       ?后面的
console.log(pathname);
res.end("232")
}).listen(3001,"127.0.0.1");