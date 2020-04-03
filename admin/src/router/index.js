import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../components/CategoryEdit.vue'
import CategoryList from '../components/CategoryList.vue'
import ItemEdit from '../components/ItemEdit.vue'
import ItemList from '../components/ItemList.vue'
import HeroEdit from '../components/HeroEdit.vue'
import HeroList from '../components/HeroList.vue'

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
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
