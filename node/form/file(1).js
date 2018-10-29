//1.获取到路径
//2.获取到扩展名
//3.加一个时间戳
//4.fs rename 修改名称
//5.完成 上传问文件
var  //处理form表单的请求数据
    http =require("http"),//http服务器
    formidable  = require('formidable'),  // 加载form表单处理插件
    path=require("path"),//实用工具  //加载path 从而取得路径
    sd=require("silly-datetime"),//加载时间插件
    fs=require("fs");
//jade ejs art-
http.createServer((req,res)=>{
      //前端发送的请求路径如果是/dopost请求的话并且请求方式是post的话
   if(req.url == '/dopost' && req.method.toLowerCase() =='post') {
      //创建表单请求
      var form =new formidable.IncomingForm();
      //创建图片保存的路径
      form.uploadDir = "./upload";
      //解析form请求数据， err错误 fields 文本域  files 文件域
      form.parse(req, function (err, fields, files) {
         //fields 文本域  输入框和radio的数据都在里面
         //files 文件域
         var pathname = path.extname(files.pic.name);
         var tt = sd.format(new Date, 'YYYYMMDDHHmm');
         //获取原路径
         var oldpath = __dirname + "/" + files.pic.path;
         //获取新路径
         var newpath = __dirname + "/upload" + tt + pathname;
         fs.rename(oldpath, newpath, function (err) {
            if (err) {
               throw err
            } else {
               res.end("改名成功")
            }
         });
         //__diename   绝对路径

      });
   }
}).listen(3000,"127.0.0.1");