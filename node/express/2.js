exports.showIdex=showIdex;
exports.showStudent=showStudent;
exports.show404=show404;
//首页
function showIdex(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("首页")
}
//学生
function showStudent(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var id=req.url.substr(9,3);
    res.end("学生的ID"+id)
}
//404
function show404(req,res){
    res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
    res.end("404")
}