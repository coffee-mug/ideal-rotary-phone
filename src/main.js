'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Components
import App from './components/App.vue'
import Signup from './components/Signup.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

// Forms data
Vue.http.options.emulateJSON = true

const routes = [
    { path: '/signup', component: Signup }
]


const router = new VueRouter({
    routes
})

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
