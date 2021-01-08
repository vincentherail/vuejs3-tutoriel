import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    // ancienne route
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchall 404
  {
    // toutes les routes qui ne sont pas listées au-dessu
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

// creation du routeur pour l'app
const router = createRouter({
  // permet de cliquer sur préc / suivant dans le navigateur
  history: createWebHistory(process.env.BASE_URL),
  // le tableau des routes
  routes
})

// exportation du routeur
export default router
