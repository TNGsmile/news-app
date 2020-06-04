export default {
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home"),
<<<<<<< HEAD
      meta: {
        auth: true,
      }
=======
>>>>>>> 0e33e4bd791f461aa1eeef36bf680e1ccf384315
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login"),
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("@/views/Reg"),
    },
    {
      path: "/personal",
      name: "Personal",
      component: () => import("@/views/Personal"),
      meta: {
        auth: true,
      }
    },
    {
      path: "/protected",
      name: "Protected",
      component: () => import("@/views/Protected"),
      meta: {
        auth: true,
      }
    },
    {
      path: "/channel/:id",
      name: "ChannelNews",
      component: () => import("@/views/ChannelNews"),
<<<<<<< HEAD
      meta: {
        auth: true,
      }
=======
>>>>>>> 0e33e4bd791f461aa1eeef36bf680e1ccf384315
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("@/views/Auth"),
    },
    {
      path: "*", //匹配所有路径
      name: "404",
      component: () => import("@/views/NotFound"),
    },
  ],
  mode: "history",
};
