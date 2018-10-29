<template>
  <div id="main">
    <div class="header">
      <div class="logo">
        <a href=""><img src="./assets/back_logo.png" alt=""></a>
      </div>
      <div class="right">
        <ul class="login">
          <li>卓新思创</li>
          <li>在线客服</li>
          <li>常见问题</li>
          <li>安全中心</li>
          <li>退出</li>
          <li>管理员</li>
          <li class="touxiang"><img src="./assets/touxiang.jpg" alt=""></li>
        </ul>

      </div>
    </div>
    <div class="nav">
      <ul>
        <li>用户管理</li>
        <li>课程管理</li>
        <li>统计报表</li>
        <li>其他管理</li>
        <li>数据字典</li>
        <li>系统维护</li>
      </ul>
    </div>
    <div class="main">
      <ul class="shouye">
        <li>首页</li>
        <li>/用户管理</li>
        <li>/系统人员</li>
      </ul>
      <div class="search">
        <div class="lt">
          <input type="text" placeholder="模糊查找姓名">
          <button>查询</button>
        </div>
        <div class="rt">添加</div>
      </div>
      <div class="liebiao">
        <div class="liebiao-nav">
          <div><img src="./assets/functional_block.png" alt=""></div>
          <div>系统人员列表</div>
        </div>
        <div class="lable">
          <div class="yonghu">用户名</div>
          <div class="youxiang">姓名</div>
          <div class="phone">后台权限</div>
          <div class="yonghu">手机</div>
          <div class="yonghu">编辑日期</div>
          <div class="caozuo">操作</div>
        </div>
        <div class="neirong">
          <div class="yonghu">liyi</div>
          <div class="youxiang">1234567890@qq.com</div>
          <div class="phone">9672167876</div>
          <div class="yonghu">2108-06-30T18:46:07</div>
          <div class="yonghu">正常</div>
          <div class="caozuo"><p class="p1">编辑</p><p class="p2">删除</p></div>
        </div>
        <div class="footer">
          <div class="first"><img src="./assets/first.png" alt=""></div>
          <div class="prev"><img src="./assets/prev.png" alt=""></div>
          <div class="tiaozhaun">跳转到第</div>
          <div class="ye">
            <p>1</p>
            <div class="sanjiao">
              <div class="top"></div>
              <div class="bottom"></div>
            </div>
          </div>
          <div class="tiaozhaun">页</div>
          <div class="box">Go</div>
          <div class="tiaozhaun">/共&nbsp;&nbsp;3&nbsp;&nbsp;页&nbsp;【7条】</div>
          <div class="next"><img src="./assets/next.png" alt=""></div>
          <div class="last"><img src="./assets/last.png" alt=""></div>
          <div class="tiaozhaun">1-3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background: #f5f5f5;
  }
  ul,ol,li{
    list-style: none;
  }
  .header{
    height: 60px;
    background: #000;
    overflow: hidden;
  }
  .logo{
    float: left;
    margin-top: 9px;
    margin-left: 10px;
  }
  .logo>a{
    display: inline-block;
    float: left;
    margin-right: 5px;
  }
  .right{
    float: right;
  }
  .login{
    float: left;
    overflow: hidden;
  }
  .touxiang{
    margin-top: 5px;
  }
  .login li{
    float: left;
    padding: 0 15px;
    line-height: 60px;
    color: #bebebe;
    font-weight: 600;
  }
  .nav{
    height: 60px;
    background: #0a4f96;
  }
  .nav ul{
    margin-left: 200px;
  }
  .nav ul li{
    float: left;
    padding: 0 30px;
    color: #fff;
    line-height: 60px;
  }
  .main{
    padding: 0 10px;
  }
  .shouye{
    padding: 10px 0;
    color: #878580;
    font-weight: bold;
    font-size: 15px;
    overflow: hidden;
  }
  .shouye li{
    float: left;
    padding: 0 3px;
  }
  .shouye li:first-child{
    color: #00a7e8;
  }
  .search{
    background: #fff;
    height: 50px;
    border:2px solid #f1efed;
  }
  .search .lt{
    margin-top: 10px;
    margin-left: 10px;
    float: left;
  }
  .search input{
    background: none;
    border: 1px solid #f2f2f2;
    height: 30px;
    width: 500px;
    margin-right: 8px;
    padding: 0 5px;
    overflow: hidden;
  }
  .search button{
    height: 30px;
    width: 100px;
    background: yellowgreen;
    border: none;
    color: #f1f2f6;
    letter-spacing: 5px;
    text-align: center;
  }
  .search .rt{
    float: right;
    height: 30px;
    background: #00a7e8;
    width: 100px;
    text-align: center;
    color: #f1f2f6;
    margin-top: 10px;
    line-height: 30px;
    letter-spacing: 10px;
    margin-right: 10px;
    font-size: 14px;
  }
  .liebiao{
    border: 2px solid #f1efed;
    margin-top: 20px;
    background: #fff;
  }
  .liebiao-nav{
    overflow: hidden;
  }
  .liebiao-nav div:first-child{
    border-right: 2px solid #f1efed;
    width: 40px;
    overflow: hidden;
    float: left;
    height: 40px;
  }
  .liebiao-nav div:first-child img{
    display: block;
    margin: auto;
    margin-top: 12px;
  }
  .liebiao-nav div:last-child{
    float: left;
    line-height: 40px;
    margin-left: 10px;
  }
  .liebiao .lable{
    background: #e0e0e0;
    height: 40px;
    border:2px solid #bebebe;
    overflow: hidden;
  }
  .lable div{
    float: left;
    border-right: 2px solid #d0d0d0;
    height: 40px;
    padding-left:5px;
    line-height: 40px;
    font-size: 15px;
  }
  .lable div:last-child{
    border-right: none;
  }
  .yonghu{
    width: 152px;
  }
  .youxiang{
    width: 500px;
  }
  .phone{
    width: 130px;
  }
  .neirong{
    height: 100px;
    overflow: hidden;
  }
  .neirong div{
    float: left;
    height: 40px;
    padding-left:5px;
    line-height: 40px;
    font-size: 15px;
    border-right: 2px solid transparent;
    overflow: hidden;

  }
  .footer{
    border-top:2px solid #f1efed;
    height: 35px;
  }
  .footer div{
    float: left;
    margin-top: 5px;
    height: 26px;
  }
  .first{
    width: 26px;
    margin-left: 5px;
  }
  .prev{
    margin-left: 10px;
  }
  .tiaozhaun{
    line-height: 26px;
    margin: 0 10px;
  }
  .ye{
    width: 64px;
    border:2px solid #f1efed;
    box-sizing: border-box;
  }
  .ye p{
    width:20px;
    float: left;
  }
  .ye .sanjiao{
    float: right;
    width: 20px;
    height: 24px;
    margin-top: 1px;
    position: relative;
  }
  .sanjiao .top{
    width: 0;
    height:0;
    border-width: 5px;
    border-style:solid;
    border-color: transparent transparent #969896 transparent;
    position: absolute;
    top:-8px;
  }
  .sanjiao .bottom{
    width: 0;
    height:0;
    border-width: 5px;
    border-style:solid;
    border-color: #969896 transparent transparent transparent;
    position: absolute;
    top:8px;
  }
  .box{
    width: 26px;
    height: 26px;
    border:2px solid #f1efed;
    box-sizing: border-box;
    line-height: 26px;
    text-align: center;
    font-size: 14px;
  }
  .last{
    margin-left: 10px;
  }

  .caozuo p{
    color: blue;
    float: left;
    margin-right: 10px;
  }
</style>
