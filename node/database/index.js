//接口文件
var express=require("express");
var router=express.Router();
var db=require("./model/db");
var crypto=require("crypto");
var objectId=require("mongodb").ObjectID;
router.get("/AdminHandler",function(req,res){
    var actions=req.query.action;//获取地址栏字段
    switch (actions){
        case "veri":
            //获取验证码
            //1.生成随机数  Math.random() 封装函数
            var randomNum=function(min,max){
                return Math.floor(Math.random()*(max-min))+min
            };
            var str="1234567890abcdefghijklmnopqrstuvmxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var txt="";
            for (var i = 0; i < 4; i++) {
                var returntxt=str[randomNum(0,str.length-1)];
                txt+=returntxt;
            }
            req.flash.veri=txt;
            res.send({"success":txt});
            break;
        case "checkveri":
        //验证验证码
        if(req.query.veri==req.flash.veri){
            res.send({"success":"成功"})
        }else{
            res.send({"file":"失败"})
        }
            break;
        case "returninfo":
                var sessionId=new objectId(req.flash.user._id);
                db.find("test1",{"_id":sessionId},function(err,data){
                    res.send({"success":"获取成功","data":data[0]})
                });
            break;
        case "quit":
            //退出登录
            if(req.flash.user){
                req.flash.user={};
                // res.redirect("http://127.0.0.1:3000/login.html")
                res.send({"success":"成功"})
            }
            break;
    }

});
router.post("/AdminLogin",function(req,res){
    var actions=req.query.action;
    switch (actions){
        case "login"://登录
            db.find("test1",{"username":req.body.username},function(err,doc){
                if(doc.length==0){
                    res.send({"err":"没有此用户"});
                }else{
                    var md5=crypto.createHash("md5");
                    var pwd=md5.update(req.body.password).digest("base64");
                    if(pwd==doc[0].password){
                        var user=doc[0];
                        req.flash.user=user;
                         // res.redirect("http://127.0.0.1:3000/index.html")
                        res.send({"success":"登录成功","tokenId":user.tokenId})
                    }else{
                        res.send({"success":"登录失败"})
                    }

                }
            });
            break;
        case "updatepass":  //修改密码
            var md5=crypto.createHash("md5");
            var oldpwd=md5.update(req.body.oldpass).digest("base64");
            if(req.flash.user.password!=oldpwd){
                res.send({"error":"密码错误"})
            }else{
                var md6=crypto.createHash("md5");
                var newpwd=md6.update(req.body.newpass).digest("base64");
                db.update("test1",{"username":req.flash.user.username},{$set:{"password":newpwd,"updateAt":new Date()}},function(err,data){
                    if(err){
                        res.send({"error":"密码修改失败"})
                    }
                    res.send({"success":"密码修改成功"})
                })
            }
            break;

        case "remove"://删除用户信息
            db.find("test1", {tokenId:parseInt(req.body.tokenId)}, function (data) {
                if (data.length == 0) {
                    res.send({"err": "删除失败"});
                } else {
                    db.find("test1",{tokenId:parseInt(req.body.tokenId)}, function (da) {
                        db.remove("test1",{"username":req.remove},function(da){
                            res.send({"success":"删除成功"})
                        })
                    });
                }
            });
            break;
        case "register"://注册
            db.find("test1",{"username":req.body.username},function(err,doc){
                if(doc.length!=0){
                    res.send({"err":"该用户名已存在"})
                }else{
                    db.find("test1",{},function(err,arr){
                        if(err){
                            console.log("系统用户不存在")
                        }else{
                            var md5 = crypto.createHash("md5");
                            var obj = {
                                "username":req.body.username,
                                "password":md5.update(req.body.password).digest("base64"),   //base64    一种加密格式
                                "name":req.body.name,
                                "phone":req.body.phone,
                                "e-mail":req.body.email,
                                "power":req.body.powerCode == 0?"系统管理员":"课程管理员",
                                "powerCode":req.body.powerCode,
                                "createAt":new Date(),
                                "upDateAt":new Date(),
                                "tokenId":arr.length + 1
                            };
                            db.add("test1",obj,function(err,data){
                                if(err){
                                    res.send({"err":"注册失败"})
                                }
                                res.send({"success":"注册成功"})
                            })
                        }
                    })
                }
            });
            break;
    }
});
router.get("/Adminshow",function(req,res){
   var actions= req.query.action;
    switch (actions){
        case "show"://查询数据
            db.find("test1",null,function(err,data){
                var selector=!req.searchText?{
                    "tokenId":{
                        $gt:parseInt(req.query.pageStart),
                        $lte:parseInt(req.query.pageStart)+3
                    }
                }:{
                    turename:{
                        $regex:'.*'+req.query.searchText+'.*',
                        $options:'i'
                    }
                }
                db.find("test1",selector,function(err,data){
                    if(data.length==0){
                        res.send({"error":"没有此用户"})
                    }else{
                        var result={
                            "success":"成功",
                            data:{
                                pageSize:3,
                                count: err.length,
                                list: data
                            }
                        };
                        res.send(result)
                    }
                });
            });
            break;
    }
});
module.exports=router;
