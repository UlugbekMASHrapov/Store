import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { useCategoriesStore } from '@/stores/getCategoriesStore'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/product/:id',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue')
    },
     {
      path: '/category',
      name:'categories',
      component: () => import('@/pages/CategoriesPage.vue')
    },
    {
      path:'/basket',
      name:"basket",
      component: () => import('@/pages/BasketPage.vue')
    },
    {
      path: '/category/:name',
      name:'category',
      component: () => import('@/pages/CategoryPage.vue'),
      beforeEnter:(to, from) => {
        const productStore = useCategoriesStore()
        const exists = productStore?.categories?.find(item => item == to.params.name)
        console.log(exists);
        if (!exists) {
          return {
            name: 'NotFound',
            params: { pathMatch: to.path.split('/').splice(1) },
            query: to.query,
            hash: to.hash
          }
        }
      },
    },
    {
      path: "/:pathMatch(.*)*",
   name: "NotFound",
   component: () => import("@/pages/NotFoundPage.vue")
 },
    
  ]
})

export default router
