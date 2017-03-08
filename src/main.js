'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import * as VueGoogleMaps from 'vue2-google-maps';

// Routes Components
import App from './components/App.vue';
import Prospection from './components/Prospection.vue';
import ProspectionAdmin from './components/ProspectionAdmin.vue';
import ProspectionAdminItem from './components/ProspectionAdminItem.vue';
import Landing_alt from './components/Landing_alt.vue';
import Calendrier from './components/Calendrier.vue';

import Card from './components/funnel/Card.vue';
import HairdressersList from './components/funnel/HairdressersList.vue';


// Les components actuellement utilisés sur le front.
import Home from './components/final/Home.vue';
import Prestation from './components/final/Prestation.vue';
import Results from './components/final/Results.vue';
import Calendar from './components/final/Calendar.vue';
import Coiffeur from './components/final/Coiffeur.vue';
import Search from './components/final/Search.vue';

import moment from 'moment'

Vue.use(VueRouter);
Vue.use(VueResource); // Client HTTP Vue : https://github.com/pagekit/vue-resource 
Vue.use(VueGoogleMaps, { // Client GoogleMaps pour Vue: https://www.npmjs.com/package/vue2-google-maps 
  load: {
    key:'AIzaSyBHeHzMkU8N0UlxJfH4UT9_C_cS2KSxCIw'
  }
});

// Forms data
Vue.http.options.emulateJSON = true


/** Routes: Pour le moment le root ('/') pointe vers l'ancienne landing page. La 'vraie' home est à l'adresse '/final/home'
 * La gestion des routes se fait grâce à vue-router : https://github.com/vuejs/vue-router. Ici, tout simple : on propose
 * juste une liste d'objets définissant chaque route avec son path, et le component que l'on souhaite rendre à cette route.
 * **/
const routes = [
    { path: '/prospection', component: Prospection },
    { path: '/prospection/goguys/admin', component: ProspectionAdmin },
    { path: '/prospection/goguys/admin/:id', component: ProspectionAdminItem, name:"prospects" },
    { path: '/', component: Landing_alt },
    { path: '/final/home', component: Home },
    { path: '/final/prestation', component: Prestation, name: "prestation" },
    { path: '/final/results', component: Results, name: "results" },
    { path: '/final/calendar', component: Calendar, name: "calendar" },
    { path: '/final/coiffeur', component: Coiffeur, name: "coiffeur" },
    { path: '/final/search', component: Search, name: "search" },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
