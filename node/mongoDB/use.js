var db=require("./db");
//db.add("test1",{"username":"abcd"},function(err,data){
//
//});
//db.rem("test1",{"username":"tom"},function(err,data){
//   console.log("删除成功")
//});
db.find("test1",function(err,data){
});
db.update("test1",{"username":"bbbb"},{$set:{"username":"aaaa"}},function(err,data){
});