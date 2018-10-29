//mdn
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    fs.writeFile("1.txt","123456789",(error,data)=>{
        res.end(data)
    })
}).listen(3000,"127.0.0.1");