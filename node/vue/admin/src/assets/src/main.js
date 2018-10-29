// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'  //数据交互
//原型指向   axios别名alias
Vue.prototype.$http = Axios
import router from './router'
import "../static/css/css.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})

//全局前置守卫
// 路由判断登录 根据路由配置文件的参数
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
//     console.log('需要登录');
//     if (localStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
//       next();
//     }else {
//       next({
//         path: '/',
//         // query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }else {
//     next();
//   }
// });