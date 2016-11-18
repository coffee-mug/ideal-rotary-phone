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
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/prospection', component: Prospection },
    { path: '/prospection/admin', component: ProspectionAdmin },
    { path: '/prospection/admin/:id', component: ProspectionAdminItem, name:"prospects" },
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
