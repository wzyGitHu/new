//加载ejs模板引擎  处理HTML数据
var ejs=require("ejs");
//<%=%>输出数据
//<%_%>删除首位空格
//<%-%>非转义字符
//<%#%>注释
var string="今天买了一个iPhone<%= a %> <%#rtrtr%>";
var data={
    a:9
};
//render  渲染  首个参数是HTML  第二个参数是渲染数据
var html=ejs.render(string,data);
console.log(html);
