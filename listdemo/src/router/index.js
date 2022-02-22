import { createRouter, createWebHashHistory } from 'vue-router'

// const tabs = () => import('@/pages/tabs')
const one = () => import('@/pages/one')
const two = () => import('@/pages/two')
const three = () => import('@/pages/three')
const four = () => import('@/pages/four')

const routes = [
  // {
  //   path: '/', 
  //   redirect: '/one'
  // },
  // {
  //   path: '/tabs',
  //   name: 'tabs',
  //   component: tabs
    // children: [
    //   {
    //     path: 'one',
    //     name: 'one',
    //     component: one
    //   },
    //   {
    //     path: '',
    //     name: 'two',
    //     component: two
    //   },
    //   {
    //     path: 'three',
    //     name: 'three',
    //     component: three
    //   },
    //   {
    //     path: 'four',
    //     name: 'four',
    //     component: four
    //   }
    // ]
  // },
  {
    path: '/one',
    name: 'one',
    component: one
  },
  {
    path: '/two',
    name: 'two',
    component: two
  },
  {
    path: '/three',
    name: 'three',
    component: three
  },
  {
    path: '/four',
    name: 'four',
    component: four
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router