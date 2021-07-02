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
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingInputNumber.vue')
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingTextarea.vue')
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingSelect.vue')
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingCheckbox.vue')
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingCheckbox2.vue')
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingRadio.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
