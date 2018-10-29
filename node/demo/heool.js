var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="favicon.ico"){
        return
    }
    fs.readdir("./status",(err,files)=>{
        //建立空文件夹等待放置目录
        var arr=[];
        //迭代处理，以为开始是一个异步函数通过迭代变成同步函数
        //1执行过后执行2 2执行过后执行3
        (function item(i){
            if(i==files.length){
                return
            }
            fs.stat("./status/"+files[i],(err, data)=>{
                    if(data.isDirectory()){
                    arr.push(files[i]);
                    console.log(arr);
                }
                item(i+1)
            })
        })(0);
        res.end()
    });

}).listen(3300,"127.0.0.1");