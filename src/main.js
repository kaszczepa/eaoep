import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import actualites from './components/actualites.vue'
import adhesion from './components/adhesion.vue'
import carriere from './components/carriere.vue'
import publications from './components/publications.vue'
import qui_sommes_nous from './components/qui_sommes_nous.vue'
import club from './components/club.vue'
import contact from './components/contact.vue'
import home from './components/home.vue'
import statut from './components/statut.vue'
import atelier from './components/atelier.vue'
import avion from './components/avion.vue'
import styles from './styles/general.css'
import recommandees from './components/recommandees.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: home },
    { path: '/actualites', component: actualites },
    { path: '/actualites/avion', component: avion },
    { path: '/actualites/atelier', component: atelier },
    { path: '/adhesion', component: adhesion },
    { path: '/carriere', component: carriere },
    { path: '/publications', component: publications },
    { path: '/qui_sommes_nous', component: qui_sommes_nous },
    { path: '/club', component: club },
    { path: '/contact', component: contact },
    { path: '/statut', component: statut },
    { path: '/recommandees', component: recommandees }
  ]
})

new Date().getTime() > 1534413600000 ?
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) : {};