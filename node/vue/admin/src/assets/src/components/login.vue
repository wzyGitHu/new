<template>
    <!-- <div>
        用户名：<input type="text" v-model="username"/>
        密码：<input type="text" v-model="password"/>
        验证码：<input type="text"/><Veri/>
        <input type="button" value="提交" @click="login"/>
    </div> -->
    <div class="container_shou">
        <div class="conter">
            <div class="logo">
                <img src="../../static/img/back_logo.png" alt="">
            </div>
            <div class="input1">
                <div class="left"></div>
                <input type="text" placeholder="用户名"  v-model="username">
            </div>
            <div class="input1">
                <div class="left"></div>
                <input type="password" placeholder="密码"  v-model="password">
            </div>
            <div class="input1" style="border:0">
                <div class="input2">
                    <div class="left"></div>
                    <input type="text" placeholder="验证码" ref="veri">
                </div> 
                <Veri/>
            </div>
            
            <div class="password">忘记密码</div>
            <div class="denglu"  @click="login">登录</div>
        </div>
    </div>
</template>

<script>
// import Axios from "axios"
import Veri from "./veri";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log(this.$refs.veri.value);
      this.$http({
        url: "/api/Handler/AdminHandler/?action=checkveri",
        method: "get",
        params: {
          veri: this.$refs.veri.value
        }
      }).then((result)=> {
        // console.log(result);
        if(result.data.success){
          this.next()
        }
      });
    },
    //登录
    next(){
      this.$http({
        url: "/api/Handler/AdminLogin/?action=login",
        method: "post",
        data:{
          username:this.username,
          password:this.password
        }
      }).then((result)=>{
        // console.log(result)
        // this.$router.push({path:"home"})
        this.$router.push("home")
        var userId=result.data.tokenId
        alert(result.data.success)
        localStorage.setItem("userId",userId)
      })
    }
  },
  //注册组件
  components: { Veri }
};
</script>

<style scopeds>
/* .veri{
  
} */
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.container_shou {
  width: 100%;
  height: 100%;
  background: #09184c;
  position: relative;
}
.conter {
  width: 560px;
  height: 290px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto auto;
}
.conter .logo {
  width: 280px;
  height: auto;
  margin: 0 auto;
}
.conter .logo img {
  width: 100%;
  height: 100%;
}
.input1 {
  width: 368px;
  height: 35px;
  border: 1px solid #f2602e;
  margin: 20px 82px;
}
.input1 .left {
  width: 38px;
  height: 100%;
  border-right: 1px solid #f2602e;
  float: left;
}
.input1 input {
  width: 329px;
  height: 100%;
  outline: none;
  display: inline-block;
  background: #09184c;
  border: none;
  color: #6e6c72;
}
.input2 {
  width: 258px;
  height: 35px;
  border: 1px solid #f2602e;
  float: left;
}
.input2 input {
  width: 219px;
}
.password {
  width: 111px;
  height: 38px;
  background: #01aecd;
  text-align: center;
  line-height: 38px;
  font-size: 14px;
  position: absolute;
  bottom: 0px;
  left: 10px;
}
.denglu {
  width: 111px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  font-size: 14px;
  position: absolute;
  bottom: 0px;
  right: 4px;
  background: #65fe2e;
}
</style>
