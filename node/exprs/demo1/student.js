var express=require("express");
var app=express();
//{"0":"123456789"}
//require.params[0] 遇到k 为数字的对象用【0】
//app.get(/^\/student\/([\d]{9})$/,(req,res)=>{
//        res.send("学生的ID:"+req.params[0]);
//});

app.get("/teacher/:aa",(req,res)=>{
    res.send("老师的ID："+req.params.aa)
});
app.listen(3000);
