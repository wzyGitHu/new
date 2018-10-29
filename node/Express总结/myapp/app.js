var express = require('express');
var app = express();
var router=express.Router();
//app.all('/secret',(req,res,next)=>{
//    console.log('Sorry cant find that!');
//    next()
//});
//app.get('/',(req,res)=>{
//    res.send('root')
//})
//app.get('/about',(req,res)=>{
//    res.send('about')
//})
//app.get('/random.text',(req,res)=>{
//    res.send('random.text')
//})
//app.get('/ab?cd',(req,res)=>{
//    res.send('ab?cd')
//})
//app.get('/ab+cd', function(req, res) {
//    res.send('ab+cd');
//});
//
//// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
//app.get('/ab*cd', function(req, res) {
//    res.send('ab*cd');
//});
//
//// 匹配 /abe 和 /abcde
//app.get('/ab(cd)?e', function(req, res) {
//    res.send('ab(cd)?e');
//});

//app.get('/example/b', function (req, res, next) {
//    console.log('response will be sent by the next function ...');
//    next();
//}, function (req, res) {
//    res.send('Hello from B!');
//});

//var cb0=function(req,res,next){
//    console.log('cb0');
//    next()
//};
//var cb1=function(req,res,next){
//    console.log('cb1')
//    next()
//};
//var cb2=function(req,res){
//    res.send('Hello from c!');
//};
//app.get('/example/c',[cb0,cb1,cb2]);

//var cb0 = function (req, res, next) {
//    console.log('CB0');
//    next();
//};
//
//var cb1 = function (req, res, next) {
//    console.log('CB1');
//    next();
//};
//
//app.get('/example/d', [cb0, cb1], function (req, res, next) {
//    console.log('response will be sent by the next function ...');
//    next();
//}, function (req, res) {
//    res.send('Hello from D!');
//});

//app.route('/book')
//    .get(function(req, res) {
//        res.send('Get a random book');
//    })
//    .post(function(req, res) {
//        res.send('Add a book');
//    })
//    .put(function(req, res) {
//        res.send('Update the book');
//    });



//中间件

//// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
//app.use(function (req, res, next) {
//    console.log('Time:', Date.now());
//    next();
//});
//// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
//app.use('/user/:id', function (req, res, next) {
//    console.log('Request Type:', req.method);
//    next();
//});
//// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
//app.get('/user/:id', function (req, res, next) {
//    res.send('USER');
//});

// 一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
//app.use('/user/:id', function(req, res, next) {
//    console.log('Request URL:', req.originalUrl);
//    next();
//}, function (req, res, next) {
//    console.log('Request Type:', req.method);
//    next();
//});

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
//app.get('/user/:id', function (req, res, next) {
//    console.log('ID:', req.params.id);
//    next();
//}, function (req, res, next) {
//    res.send('User Info');
//});
//
//// 处理 /user/:id， 打印出用户 id
//app.get('/user/:id', function (req, res, next) {
//    res.end(req.params.id);
//});

//app.get('/user/:id', function (req, res, next) {
//    if (req.params.id == 0) next('route');
//    else next(); //
//}, function (req, res, next) {
//    res.render('regular');
//});
//
//app.get('/user/:id', function (req, res, next) {
//    res.render('special');
//});

//router.use(function(req,res,next){
//    console.log('Time',Date.now);
//    next()
//});
//
//router.use('/user/:id',function(req,res,next){
//    console.log('Request URL:',req.originalUrl);
//    next();
//},function(req,res,next){
//   console.log('Request Type:',req.method);
//    next()
//});
//
//router.get('/user/:id',function(req,res,next){
//    if(req.params.id==0)next('route');
//    else next();
//},function(req,res,next){
//    res.render('regular')
//});
//
//router.get('/user/:id',function(req,res,next){
//    console.log(req.params.id);
//    res.render('special');
//});
//app.use('/',router);

//错误处理中间件
//app.use(function(err,req,res,next){
//    console.error(err.stack);
//    res.status(500).send('Something broke!');
//});



var cookieParser = require('cookie-parser');
// 加载用于解析 cookie 的中间件
app.use(cookieParser());


app.listen(3000);