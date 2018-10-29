// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//主入口文件
import Vue from 'vue'  //相当于 <script></script>
import App from './App'
new Vue({
  el:'#app',
  components:{App},//组件加载
  template:'<App/>'//模板编译

});
