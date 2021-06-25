import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingInputText.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
