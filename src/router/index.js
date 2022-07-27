import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('../page/Home.vue')
        },
        {
            path:'/detail/:id',
            props:true,
            component:()=>import('../page/Detail.vue')
        }
    ]
})
export default router