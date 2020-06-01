// 登录用户 的仓库数据
import { login, loginOut, whoAmI } from "../services/userService";
export default {
  namespaced: true, // 开启命名空间
  state: {
    data: null, //  当前登录的用户
    isLoading: false, //  是否正在远程登录
  },
  // 突变
  mutations: {
    // 设置加载
    setIsloading (state, payload) {
      state.isLoading = payload
    },
    setData (state, payload) {
      state.data = payload
    },
  },
  actions: {
    async login (context, payload) {
      context.commit("setIsloading", true)
      var resp = await login(payload)
      var result = false;
      if (resp.code === 0) {
        //  登录成功
        context.commit("setData", resp.data)
        result = true;
      }
      context.commit("setIsloading", false)
      return result;
    },
    //  当前用户
    async whoAmI (context) {
      context.commit("setIsloading", true)
      var resp = await whoAmI()
      context.commit("setData", resp);
      context.commit("setIsloading", false)
    },
    loginOut (context) {
      loginOut()
      context.commit("setData", null)
    }
  },
}
