import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cards',
      component: CardView,
      },
  ],
})

export default router
