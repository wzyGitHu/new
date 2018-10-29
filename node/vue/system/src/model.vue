<template>
  <div id="model">
   <div class="pass">
    <div class=""></div>
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
  #model{
    width: 100%;
    height: 100%;
    background: #f1f2f6;
    opacity: .5;
    position: absolute;
    z-index: 1000;
  }
  .pass{
    width: 600px;
    height: 330px;
    background: #fff;
    border:5px solid #4563AC;
    margin: 50px auto;
  }
</style>
