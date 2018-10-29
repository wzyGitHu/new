//var express = require('express');
//var app = express();
//var userSchema = require('./ user');
//var bodyParser = require('body-parser') 处理post请求
//var cookieParser = require('cookie-parser')   处理cookie请求
//var mongoose = require('mongoose');
//express -session 缓存
//express-router    路由中间件
////加密模块
//var crypto = require("crypto");
//
////链接本地数据库
//var DB_URL ='mongodb：// localhost：27017 / mongoose'
//mongoose.connect(DB_URL);
//
//app.use(express.static('公共'));
////解析表单数据
//app.use(bodyParser.urlencoded({扩展:真}))
////显示静态页面
//app.get('/',函数(REQ,RES){
//    res.render('索引',目录名称__ + "公共/ index.html中”)
//})
//
//
///*插入数据库函数*/
//function insert(name,psw,nick){
//    //数据格式
//    var user = new userSchema({
//        用户名:名称,
//                userpsw:psw,
//                昵称:尼克,
//                logindate:new Date()
//    });
//    user.save(函数(ERR,RES){
//        如果(ERR){
//            的console.log(ERR);
//        }
//        其他{
//            的console.log(RES);
//        }
//    })
//}
//
/// *注册页面数据接收* /
//app.post（'/ register'，function（req，res）{
//    //处理跨域的问题
//    res.setHeader（ '内容类型'， '应用程序/ JSON;字符集= UTF-8'）
//  res.header（“Access-Control-Allow-Origin”，“*”）;
//    res.header（“Access-Control-Allow-Headers”，“Content-Type，Content-Length，Authorization，Accept，X-Requested-With”）;
//    res.header（ “访问控制允许的方法”， “PUT，POST，GET，DELETE，OPTIONS”）;
//    res.header（“X-Powered-By”，“3.2.1”）
//    //先查询有没有这个用户
//    var UserName = req.body.username;
//    var UserPsw = req.body.password;
//    var Nickname = req.body.nickname;
//    //密码加密
//    var md5 = crypto.createHash（“md5”）;
//    var newPas = md5.update（UserPsw）.digest（“hex”）;
//    //通过账号验证
//    var updatestr = {username：UserName};
//    if（UserName ==''）{
//        res.send（{status：'success'，message：false}）;
//    }
//    res.setHeader（ '内容类型'， '应用程序/ JSON;字符集= UTF-8'）
//    userSchema.find（updatestr，function（err，obj）{
//        if（错误）{
//            console.log（“错误：”+错误）;
//        }
//        其他{
//            if（obj.length == 0）{
//                //如果查出无数据，就将账户密码插入数据库
//                插入（用户名，newPas，昵称）;
//                //返回数据到前端
//                res.send（{状态： '成功'，消息：真}）
//            } else if（obj.length！= 0）{
//                res.send（{状态： '成功'，消息：假}）
//            }其他{
//                res.send（{状态： '成功'，消息：假}）
//            }
//        }
//    }）
//}）;
//
/// *登录处理* /
//app.post（'/ login'，function（req，res，next）{
//    //先查询有没有这个用户
//    的console.log（ “req.body” + req.body）;
//    var UserName = req.body.username;
//    var UserPsw = req.body.password;
//    //密码加密
//    var md5 = crypto.createHash（“md5”）;
//    var newPas = md5.update（UserPsw）.digest（“hex”）;
//    //通过账号密码搜索验证
//    var updatestr = {username：UserName，userpsw：newPas};
//    //处理跨域的问题
//    res.setHeader（ '内容类型'， '应用程序/ JSON;字符集= UTF-8'）
//    res.header（“Access-Control-Allow-Origin”，“*”）;
//    res.header（“Access-Control-Allow-Headers”，“Content-Type，Content-Length，Authorization，Accept，X-Requested-With”）;
//    res.header（ “访问控制允许的方法”， “PUT，POST，GET，DELETE，OPTIONS”）;
//    res.header（“X-Powered-By”，“3.2.1”）
//
//    userSchema.find（updatestr，function（err，obj）{
//        if（错误）{
//            console.log（“错误：”+错误）;
//        }
//        其他{
//            if（obj.length == 1）{
//                的console.log（ '登录成功'）;
//                res.send（{状态： '成功'，消息：真，数据：OBJ}）;
//            }其他{
//                的console.log（ '请注册账号'）;
//                res.send（{状态： '成功'，消息：假}）;
//            }
//        }
//    }）
//}）;
//
////处理昵称和头像的上传
//app.post（ '/ uploadImg'，函数（REQ，RES，下一个）{
//    res.setHeader（ '内容类型'， '应用程序/ JSON;字符集= UTF-8'）
//    res.header（“Access-Control-Allow-Origin”，“*”）;
//    res.header（“Access-Control-Allow-Headers”，“Content-Type，Content-Length，Authorization，Accept，X-Requested-With”）;
//    res.header（ “访问控制允许的方法”， “PUT，POST，GET，DELETE，OPTIONS”）;
//    res.header（“X-Powered-By”，“3.2.1”）
//    //ID
//    var getName = req.body.sendName;
//    //昵称
//    var myName = req.body.myName;
//
//    var checkName = {username：getName};
//    //修改默认的昵称
//    userSchema.update（checkName，{nickname：myName}，function（err，nick）{
//        的console.log（ '我是昵称' +缺口）;
//        res.send（{状态： '成功'，消息：真，数据：缺口}）;
//    }）
//}）
//
//
//var server = app.listen（1993，function（）{
//    console.log（'server connect'）;
//}）