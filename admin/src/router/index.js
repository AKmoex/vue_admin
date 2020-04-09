import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../components/CategoryEdit.vue'
import CategoryList from '../components/CategoryList.vue'
import ItemEdit from '../components/ItemEdit.vue'
import ItemList from '../components/ItemList.vue'
import HeroEdit from '../components/HeroEdit.vue'
import HeroList from '../components/HeroList.vue'
import ArticleEdit from '../components/ArticleEdit.vue'
import ArticleList from '../components/ArticleList.vue'
import AdEdit from '../components/AdEdit.vue'
import AdList from '../components/AdList.vue'
import AdminUserList from '../components/AdminUserList.vue'
import AdminUserEdit from '../components/AdminUserEdit.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategoryEdit},
      {path:'/categories/list',component:CategoryList},
      {path:'/categories/edit/:id',component:CategoryEdit,props:true},
      
      {path:'/items/create',component:ItemEdit},
      {path:'/items/list',component:ItemList},
      {path:'/items/edit/:id',component:ItemEdit,props:true},
      
      {path:'/heroes/create',component:HeroEdit},
      {path:'/heroes/list',component:HeroList},
      {path:'/heroes/edit/:id',component:HeroEdit,props:true},

      {path:'/articles/create',component:ArticleEdit},
      {path:'/articles/list',component:ArticleList},
      {path:'/articles/edit/:id',component:ArticleEdit,props:true},

      {path:'/ads/create',component:AdEdit},
      {path:'/ads/list',component:AdList},
      {path:'/ads/edit/:id',component:AdEdit,props:true},

      {path:'/admin_users/create',component:AdminUserEdit},
      {path:'/admin_users/list',component:AdminUserList},
      {path:'/admin_users/edit/:id',component:AdminUserEdit,props:true},
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
  
]

const router = new VueRouter({
  routes
})

export default router
