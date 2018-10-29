//var http = require("http");
//var querystring = require("querystring");
////querystring模块提供了一个工具，用来解析和格式化URL的查询字符。
//var server = http.createServer(function (req,res) {
//    //1.(路径 url 方式)如果你的请求地址是这个，并且提交方式是post
//    if(req.url == '/dopost' && req.method.toUpperCase() =='POST'){
//        // 定义了一个post变量，用于暂存请求体的信息
//        var postData = '';
//        //2.(存储)通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
//        //开始接受时，node 传输数据时分片段去传输，防止数据量过大
//        req.addListener("data",function (chunk) {
//            postData += chunk;//chunk  流
//
//        });
//        //接受完毕
//        req.addListener("end",function () {
//            var datastring = postData.toString();
//            console.log(datastring);
//            res.end("success");
//// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
//            var dataObj = querystring.parse(datastring);
//            console.log(dataObj.name);
//            console.log(dataObj.sex);
//            console.log(dataObj.hobby);
//
//        })
//    }
//});
//server.listen(3000,'127.0.0.1');

var formidable=require('formidable'),
    util=require('util'),
    http = require("http"),
    querystring = require("querystring");
var server = http.createServer(function (req,res) {
    //如果你的请求地址是这个，并且提交方式是post
    if(req.url == '/dopost' && req.method.toLowerCase() =='post'){
        // 定义了一个post变量，用于暂存请求体的信息
        var postData = '';
        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.addListener("data",function (chunk) {
            postData += chunk;
        });
        req.addListener("end",function () {
            var datastring = postData.toString();
            //console.log(datastring);
// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            var dataObj = querystring.parse(datastring);
            console.log(dataObj.name);
            console.log(dataObj.sex);
            console.log(dataObj.hobby);
        });
        res.end("success");
    }
});
server.listen(3000,'127.0.0.1');