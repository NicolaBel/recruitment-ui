import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistsView from '../views/ArtistsView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import SongsView from '../views/SongsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/artists',
      name: 'artists',
      component: ArtistsView
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsView
    },
    {
      path: '/songs',
      name: 'songs',
      component: SongsView
    }
  ]
})

export default router
