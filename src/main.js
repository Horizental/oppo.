import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

import router from '../src/assets/js/router.js'
import '../src/assets/css/cssreset.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
