import VueRouter from "vue-router";
import Vue from "vue";
import config from "./config"
import store from "../store";

//1. 安装
Vue.use(VueRouter);

//2. 创建路由对象
var router = new VueRouter(config);

// to 表示路由对象,我要进入那个路由
// from 表示从哪一个路由过来的
// next 是一个函数,可以通过该函数跳转到指定的路由
router.beforeEach(function (to, from, next) {
  if (to.meta.auth) {
    // 需要登录才可以访问
    if (store.state.loginUser.isLoading) {
      next({ name: "Auth", query: { returnurl: to.fullPath } });
    } else if (store.state.loginUser.data) {
      next(); //允许进入
    }
    else {
      next({ name: "Login" });
    }
  } else {
    // 都可以访问
    next();
  }
});
export default router;
