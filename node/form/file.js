var  formidable  = require(' formidable '),//处理form表单的请求数据
    http =require("http"),//http服务器
    utils=require("util");//实用工具
http.createServer((rq,res)=>{
   if(req.url=="/dopost"&&req.method.toUpperCase()=="POST"){
        var form=new formidable.IncomingForm();
       form.uploadDir="./upload";
       //1.获取到路径
       //2.获取到扩展名
       //3.加一个时间戳
       //4.fs rename 修改名称
       //5.完成 上传问文件
       form.parse(req,function(err,fields,files){
           res.writeHead(200,{"Content-type":"text/plain"});
           res.write()
       })
   }
}).listen(3000,"127.0.0.1");