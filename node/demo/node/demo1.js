//引入http模块，require  加载
//var http=require("http");
////console.log(http);
//var server=http.createServer(function(req,res){
//    /* console.log(arguments)  */
//    //  req=>请求 res=>response 响应
//    res.end("hello word")
//});
//server.listen(3000,"localhost");

//用于指定客户端应相应的某些动作。
//{ '100': 'Continue',继续，延续
//    '101': 'Switching Protocols',  转换协议
//    '102': 'Processing',  加工/处理
//    '105': 'Processing',

//用于表示请求成功。
//    '200': 'OK',  成功
//    '201': 'Created', 已创建
//    '202': 'Accepted',    已接收
//    '203': 'Non-Authoritative Information',   非授权信息
//    '204': 'No Content',  无内容
//    '205': 'Reset Content',   重置内容
//    '206': 'Partial Content', 部分内容
//    '207': 'Multi-Status',    多状态
//    '208': 'Already Reported',    已报告
//    '226': 'IM Used', 使用

//用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。
//    '300': 'Multiple Choices',    多种选择
//    '301': 'Moved Permanently',   永久移动
//    '302': 'Found',   临时移动
//    '303': 'See Other',   查看其他位置
//    '304': 'Not Modified',    未修改
//    '305': 'Use Proxy',   使用代理
//    '307': 'Temporary Redirect',  临时重定向
//    '308': 'Permanent Redirect',  永久重定向

// 用于指出客户端的错误。
//    '400': 'Bad Request',    错误请求
//    '401': 'Unauthorized',    未授权
//    '402': 'Payment Required', 需要付费
//    '403': 'Forbidden',    已禁止
//    '404': 'Not Found',   未找到
//    '405': 'Method Not Allowed',  方法禁用
//    '406': 'Not Acceptable',  不接受
//    '407': 'Proxy Authentication Required',   需要代码授权
//    '408': 'Request Timeout',     请求超时
//    '409': 'Conflict',    冲突
//    '410': 'Gone',    已删除
//    '411': 'Length Required',     需要有效长度
//    '412': 'Precondition Failed', 未满足前提条件
//    '413': 'Payload Too Large',请求实体过大
//    '414': 'URI Too Long',请求的url过长
//    '415': 'Unsupported Media Type',不支持的媒体类型
//    '416': 'Range Not Satisfiable',请求范围不符合要求
//    '417': 'Expectation Failed',  未满足期望值
//    '418': 'I\'m a teapot',
//    '421': 'Misdirected Request',
//    '422': 'Unprocessable Entity',
//    '423': 'Locked',
//    '424': 'Failed Dependency',
//    '425': 'Unordered Collection',
//    '426': 'Upgrade Required',
//    '428': 'Precondition Required',
//    '429': 'Too Many Requests',
//    '431': 'Request Header Fields Too Large',
//    '451': 'Unavailable For Legal Reasons',

//用于支持服务器错误。
//    '500': 'Internal Server Error',   服务器内部错误
//    '501': 'Not Implemented',     尚未实施
//    '502': 'Bad Gateway',     错误网关
//    '503': 'Service Unavailable',     服务不可用
//    '504': 'Gateway Timeout',     网关超时
//    '505': 'HTTP Version Not Supported',  HTTP 版本不受支持
//    '506': 'Variant Also Negotiates',
//    '507': 'Insufficient Storage',
//    '508': 'Loop Detected',
//    '509': 'Bandwidth Limit Exceeded',
//    '510': 'Not Extended',
//    '511': 'Network Authentication Required' },
var fs=require("fs");
fs.readFile("aaa.txt",function(err,data){
   if(err){
       console.log('打开文件失败')
   }else{
       console.log(data.toString())
   }
});