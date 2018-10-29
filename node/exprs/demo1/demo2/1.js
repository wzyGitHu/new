//静态资源目录   static静态  public目录
var express=require("express");
var app=express();
app.use("/",express.static("./srtatic"));
app.listen(3000);
