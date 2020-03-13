import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favoris from '../views/Favoris.vue'
import MovieToSee from '../views/MovieToSee.vue'
import ShowFilm from '../views/ShowFilm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: Favoris
  },
  {
    path: '/movietosee',
    name: 'MovieToSee',
    component: MovieToSee
  },
  {
    path: '/show/:id',
    name : 'Show',
    component: ShowFilm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
