<template>
    <div>
    <div>
    <input type="text" name="username" placeholder="用户名" ref='user'><br/>
    <input type="password" name="password" placeholder="密码" ref='pass'><br/>
    <input type="text" name="phone" placeholder="电话" ref='phone'><br/>
    <input type="button" value="注册" @click='zhuce'>
    </div>
    <div>
        <div>查询数据：</div>
       用户名： <input type="" >
        密码：<input type="text">
        <input type="button" value="点击">
    </div>
   <div>
   </div>
    </div>
</template>
<script>
export default {
  
  methods: {
    zhuce() {
      this.$http({
        url: "/api/Handler/AdminLogin/?action=register",
        method: "post",
        data:{
            username:this.$refs.user.value,
            password:this.$refs.pass.value,
            phone:this.$refs.phone.value
        }
      }).then(result => {
        alert(result.data.success);
      });
    }

  }
};
</script>
<style>
</style>

