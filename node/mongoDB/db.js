var mongodb=require("mongodb").MongoClient;
var setting=require("./setting");
function connentDB(callback){
    var url=setting.url;
    mongodb.connect(url,function(err,db){
        var dbBase=db.db("test");
        if(err){
            callback(err, null)
        }
        callback(err,dbBase,db)
    })
}
//exports.add=function(collection,json,callback){
//    connentDB((function(err,dbBase,db){
//        dbBase.collection(collection).insertOne(json, function(err,data){
//            console.log("插入wkjgf成功");
//            db.close()
//        })
//    }))
//};
//exports.rem=function(collection,json,callback){
//    connentDB((function(err,dbBase,db){
//        dbBase.collection(collection).remove(json, function(err,data){
//            console.log("删除成功");
//            db.close()
//        })
//    }))
//};
exports.find=function(collection,json,callback){
    connentDB((function(err,dbBase,db){
        dbBase.collection(collection).find().toArray(function(err,data){
            console.log(data);
            db.close()
        })
    }))
};
exports.update=function(collection,json,json1,callback){
    connentDB((function(err,dbBase,db){
        dbBase.collection(collection).update(json,json1,function(err,data){
            console.log("更新成功");
            db.close()
        })
    }))
};