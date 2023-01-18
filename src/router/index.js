//配置路由的地方
import Vue from "vue"
//引入vue-router插件
import VueRouter from "vue-router"
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Search from "../pages/Search"
import Login from "../pages/Login"
import Register from "../pages/Register"
//配置路由
export default new VueRouter({
    routes:[
        {
            path:"/search",
            component:Search
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        }
    ]
})