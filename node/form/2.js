var http=require("http");
var ejs=require("ejs");
var fs=require("fs");
http.createServer((req,res)=> {
    fs.readFile("./index.jade", (err, data)=> {
        var template = data.toString();
        var dictionary = {
            news: [
                {new: "新闻", "count": 10},
                {new: "关于", "count": 13},
                {new: "时间", "count": 16}
            ]
        }
        var html = ejs.render(template, dictionary);
        console.log(html);
        res.end(html)
    });
}).listen(3000,"127.0.0.1");