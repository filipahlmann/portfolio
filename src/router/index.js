import Vue from 'vue'
//import VueRouter from 'vue-router'
import Router from 'vue-router'
import home from '../views/home.vue'
import produkt1 from '../views/produkt1.vue'
import produkt2 from '../views/produkt2.vue'
import produkt3 from '../views/produkt3.vue'
import produkt4 from '../views/produkt4.vue'
import produkt5 from '../views/produkt5.vue'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
  path: '/produkt1',
    name: 'produkt1',
    component: produkt1
  },
  {
  path: '/produkt2',
    name: 'produkt2',
    component: produkt2
  },
  {
  path: '/produkt3',
    name: 'produkt3',
    component: produkt3
  },
  {
  path: '/produkt4',
    name: 'produkt4',
    component: produkt4
  },
  {
  path: '/produkt5',
    name: 'produkt5',
    component: produkt5
  },
  ]
  })

//Vue.use(VueRouter)
/*
const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
  ]
})

export default router
*/