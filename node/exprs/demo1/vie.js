var express=require("express");
var app=express();
//指定搜索引擎  放置模板的文件夹必须为views
app.set("view engine","ejs");   //  是设置express.js所使用的render engine(渲染引擎)。
//利用模板文件home.ejs渲染为html
app.get("/",(req,res)=>{
    res.render('home',{
        news:[//渲染的数据
        {title:"sdfg","count":10},
        {title:"sdfg","count":12},
        {title:"sdfg","count":14}
    ]
    })

});
app.listen(3000);