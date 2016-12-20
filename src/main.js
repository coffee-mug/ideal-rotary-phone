'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Components
import App from './components/App.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import Salon from './components/Salon.vue';
import Prospection from './components/Prospection.vue';
import ProspectionAdmin from './components/ProspectionAdmin.vue';
import ProspectionAdminItem from './components/ProspectionAdminItem.vue';
import Day from './components/Day.vue';
import Landing from './components/Landing.vue';
import Landing_alt from './components/Landing_alt.vue';
import Calendrier from './components/Calendrier.vue';

import profile from './components/coiffeur_profile/profile.vue';
import Card from './components/funnel/Card.vue';
import HairdressersList from './components/funnel/HairdressersList.vue';

import moment from 'moment'

Vue.use(VueRouter);
Vue.use(VueResource);

// Forms data
Vue.http.options.emulateJSON = true

var salon = {
    path: '/admin/salon',
    component: Salon,
    beforeEnter: (to, from, next) => {
      if (!window.localStorage.getItem('id')) {
        // BE CAREFUL TO SECURE THE THING, ANYBODY COULD JUST ADD 'id' TO ITS Localstorage
        next('/login');
      } else {
        next()
      }
    }
}

const routes = [
    { path: '/prospection', component: Prospection },
    { path: '/prospection/goguys/admin', component: ProspectionAdmin },
    { path: '/prospection/goguys/admin/:id', component: ProspectionAdminItem, name:"prospects" },
    { path: '/project/day', component: Day },
    { path: '/project/calendar', component: Calendrier },
    { path: '/project/landing', component: Landing },
    { path: '/', component: Landing_alt },
    { path: '/project/profile', component: profile },
    { path: '/project/card', component: Card },
    { path: '/project/list', component: HairdressersList },
      salon
]

const router = new VueRouter({
    routes
})

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
