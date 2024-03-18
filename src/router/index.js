import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import("../views/WelcomeView.vue")
  },
  {
    path: '/list',
    name: 'list',
    component: () => import("../views/PokemonListView.vue")
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import("../views/FavoriteListView.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import("../views/NotFoundView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router