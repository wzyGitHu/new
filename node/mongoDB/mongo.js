var  mongodb = require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
mongodb.connect(url,function(err,db){
    var dbBase=db.db("test");
        //连接集合查询数据
    dbBase.collection('test1').insert({"username":"tom"},function(err,data){
        console.log("插入成功");
        db.close()
    })
    dbBase.collection("test1").find().toArray(function(err,data){
        console.log(data);
        db.close()
    })
});
