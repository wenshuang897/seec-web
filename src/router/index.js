import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"login",
  },
  {
    path: "/home",
    name: "home",
    redirect:"/home/1",
    component: HomeView,
    children:[
      {
        path:"1",
        name:"index",
        component:()=>import("../views/Index.vue")
      },
      {
        path:"2",
        name:"document",
        component:()=>import("../views/DocumentView.vue")
      },
      {
        path:"3",
        name:"lead",
        component:()=>import("../views/Lead.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",  
    component: Login,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});



router.beforeEach((to,from,next)=>{
if(to.name === 'Login'){
  // 登录界面不设权限
  next()
}else{
  let token =localStorage.getItem("token")
  if(token){
    // 说明登录成功有权限
    next()
  }else{
  // 没登陆，无权限
  next({name:"Login"})
  
  }
  
}
// 路由守卫中千万不要使用for循
})

export default router;
