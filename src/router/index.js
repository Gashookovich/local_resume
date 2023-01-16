import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EducationPage from '../views/EducationPage.vue';
import WorkExperiencePage from '../views/WorkExperiencePage.vue';
import HobbiesPage from '../views/HobbiesPage.vue';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/education',
    component: EducationPage
  },
  {
    path: '/work',
    component: WorkExperiencePage
  },
  {
    path: '/hobbies',
    component: HobbiesPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
