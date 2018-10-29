<template>
    <div class="nav_content_wrap">
            <div class="nav_moveout">
                <span>首页</span>
                <span>/</span>
                <span>用户管理</span>
                <span>/</span>
                <span>系统人员</span>
            </div>
            <div class="one_nav_content">
                <div class="input">
                    <input placeholder="用户名" type="text">
                </div>
                <div class="input">
                    <input placeholder="邮箱" type="text">
                </div>
                <div class="input">
                    <input placeholder="手机号" type="text">
                </div>
                <div class="inquiry btn">查&nbsp;询</div>
            </div>
            <div class="two_nav_content">
                <div class="title">
                    <div class="left">
                        <img src="../../static/img/functional_block.png" alt="">
                    </div>
                    <span class="hot">系统人员列表</span>
                </div>
                <div class="content">
                    <div class="title_nav">
                        <span class="username">用户名</span>
                        <span class="mail">邮箱</span>
                        <span class="phone">手机</span>
                        <span class="data">注册日期</span>
                        <span class="state">状态</span>
                        <span class="operation">操作</span>
                    </div>
                    <ul class="nav">
                        <li>
                            <span>dsfdgfg</span>
                            <span>15935835430sun@sina</span>
                            <span>15935835430</span>
                            <span>正常</span>
                            <span>2018-10-05T00:05:21</span>
                            <span>冻结</span>
                        </li>
                        <li>
                            <span>fdfeeffe</span>
                            <span>15935835430sun@sina</span>
                            <span>15935835430</span>
                            <span>正常</span>
                            <span>2018-10-05T00:05:21</span>
                            <span>冻结</span>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <div class="first">
                        <img src="../../static/img/first.png" alt="">
                    </div>
                    <div class="prev">
                        <img src="../../static/img/prev.png" alt="">
                    </div>
                    跳转到第
                    <div class="input">
                      <input type="text" class="input1" value="1">
                      <span class="fa fa-sort-up shang"></span>
                      <span class="fa fa-sort-desc xia"></span>
                    </div>
                    页
                    <input type="button" class="input2" value="Go">
                    /共&nbsp;2&nbsp;页
                    <span>【4条】</span>
                    <div class="next">
                        <img src="../../static/img/next.png" alt="">
                    </div>
                    <div class="last">
                        <img src="../../static/img/last.png" alt="">
                    </div>
                    1-3
                </div>
            </div>
        </div>
</template>
<script>
export default {
  
};
</script>
<style scoped>
body {
  background: #f7f5f5;
}
.nav_content_wrap {
  position: relative;
  padding: 8px;
}
.nav_moveout {
  line-height: 50px;
  margin-left: 15px;
  color: #75736e;
}
.nav_moveout span {
  margin: 0 -2px;
}
.nav_moveout span:first-child {
  color: #127fd0;
}
.one_nav_content {
  background: #fff;
  width: 100%;
  height: 55px;
  margin: 0 auto;
  border: 1px solid #d1cfc9;
  margin-bottom: 20px;
}
.one_nav_content .input {
  width: 180px;
  height: 32px;
  border: 1px solid #c5c1bb;
  margin: 10px 11px;
  overflow: hidden;
  float: left;
}
.one_nav_content .input input {
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 12px;
  margin-left: 8px;
}
.one_nav_content .btn {
  width: 114px;
  height: 34px;
  line-height: 34px;
  color: #fff;
  font-size: 14px;
}
.one_nav_content .inquiry {
  background: #1fbb5c;
  line-height: 34px;
  text-align: center;
  float: left;
  margin: 10px 0;
}
.two_nav_content {
  background: #fff;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border: 1px solid #d1cfc9;
}
.two_nav_content .title {
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #d1cfc9;
}
.two_nav_content .title .left {
  width: 36px;
  border-right: 1px solid #d1cfc9;
  height: 100%;
  float: left;
}
.two_nav_content .title .left img {
  margin: 11px 8px;
}
.two_nav_content .title .hot {
  font-weight: bold;
  font-size: 14px;
  line-height: 38px;
  margin-left: 10px;
  color: #666460;
}
.two_nav_content .content {
  height: 290px;
  border-bottom: 1px solid #c5c1bb;
}
.two_nav_content .title_nav {
  width: 100%;
  border: 1px solid #c5c1bb;
  background: #f1efed;
  height: 36px;
  box-sizing: border-box;
  font-size: 0;
}
.two_nav_content .title_nav > span {
  display: inline-block;
  height: 100%;
  line-height: 36px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  color: #666460;
}
.two_nav_content .title_nav .username {
  border-right: 1px solid #c5c1bb;
  /* width: 180px; */
  width: 12%;
}
.two_nav_content .title_nav .mail {
  border-right: 1px solid #c5c1bb;
  /* width: 600px; */
  width: 38%;
}
.two_nav_content .title_nav .phone {
  border-right: 1px solid #c5c1bb;
  /* width: 150px; */
  width: 10%;
}
.two_nav_content .title_nav .data {
  border-right: 1px solid #c5c1bb;
  /* width: 180px; */
   width: 12%;
}
.two_nav_content .title_nav .state {
  border-right: 1px solid #c5c1bb;
  /* width: 180px; */
   width: 12%;
}
.two_nav_content .title_nav .operation {
  /* width: 230px; */
  width: 16%;
}
.two_nav_content .nav li {
  font-size: 0;
  height: 36px;
  border-bottom: 1px solid #efedeb;
  line-height: 36px;
}
.two_nav_content .nav li span {
  /* display: inline-block; */
  font-size: 14px;
  padding-left: 10px;
  float: left;
  box-sizing: border-box;
}
.two_nav_content .nav li span:nth-child(1) {
  /* width: 181px; */
  width: 12%;
}
.two_nav_content .nav li span:nth-child(2) {
  /* width: 600px; */
  width: 38%;
}
.two_nav_content .nav li span:nth-child(3) {
  /* width: 150px; */
  width: 10%;
}
.two_nav_content .nav li span:nth-child(4) {
  /* width: 180px; */
  width: 12%;
}
.two_nav_content .nav li span:nth-child(5) {
  /* width: 180px; */
  width: 12%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.two_nav_content .nav li span:nth-child(6) {
  /* width: 230px; */
  width: 16%;
  color: #1e50e6;
}
.two_nav_content .bottom {
  height: 32px;
  font-size: 13px;
  line-height: 32px;
}
.two_nav_content .bottom > * {
  vertical-align: middle;
}
.two_nav_content .bottom > div {
  display: inline-block;
}
.two_nav_content .bottom .first {
  width: 26px;
  height: 26px;
  margin-left: 6px;
}
.two_nav_content .bottom .prev {
  width: 26px;
  height: 26px;
  margin: 0 4px;
}
.two_nav_content .bottom .input {
  position: relative;
}
.two_nav_content .bottom .shang {
  position: absolute;
  right: 10px;
  top: 10px;
}
.two_nav_content .bottom .xia {
  position: absolute;
  right: 10px;
  bottom: 7px;
}
.two_nav_content .bottom .input1 {
  width: 58px;
  height: 24px;
  border: 1px solid #c5c1bb;
  outline: none;
  margin: 0 5px;
}
.two_nav_content .bottom .input2 {
  width: 34px;
  height: 24px;
  border: 1px solid #c5c1bb;
  background: #fff;
  outline: none;
  margin: 0 5px;
}
.two_nav_content .bottom .next {
  width: 26px;
  height: 26px;
  margin: 0 3px;
}
.two_nav_content .bottom .last {
  width: 26px;
  height: 26px;
  margin: 0 2px;
}
</style>
