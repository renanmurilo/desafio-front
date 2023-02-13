import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'HomeView',
    component: HomeView,
    children: [
        { path: '/products', component: () => import('@/pages/products/Index.vue') },
        { path: '/checkout', component: () => import('@/pages/checkout/Index.vue')},
        { path: '/cart', component: () => import('@/pages/carrinho/Index.vue')}
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
