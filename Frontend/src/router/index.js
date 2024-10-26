import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Admin from '@/components/Admin.vue'
import User from '@/components/User.vue'
import Users from '@/components/Users.vue'
import Documents from '@/components/Documents.vue'
import Document from '@/components/Document.vue'
import MyDocuments from '@/components/MyDocuments.vue'
import DeleteCookie from '@/components/DeleteCookie.vue'
const routes = [{ path: "/", name: "home", component: Home }, { path: "/register", name: "register", component: Register }, { path: "/login", name: "login", component: Login }, { path: "/admin", name: "admin", component: Admin }, { path: "/user", name: "user", component: User },{path:"/users",name:"users",component:Users},{path:"/documents",name:"documents",component:Documents},{path:"/myDocuments",name:"myDocuments",component:MyDocuments},{path:"/document/:id",name:"document",component:Document},{path:"/deleteCookie",name:"deletCookie",component:DeleteCookie}]
const router = createRouter({
    history: createWebHistory(), routes
})


export default router