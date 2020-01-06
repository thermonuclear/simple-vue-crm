import Vue from 'vue'
import Vuelidate from 'vuelidate/lib'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import currencyFilter from './filters/currency.filter'

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(messagePlugin);

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)


Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyBA917lNvRVLk5TNLN_bELFEgUIYXXPyu0",
  authDomain: "vm-vue-crm.firebaseapp.com",
  databaseURL: "https://vm-vue-crm.firebaseio.com",
  projectId: "vm-vue-crm",
  storageBucket: "vm-vue-crm.appspot.com",
  messagingSenderId: "953393811816",
  appId: "1:953393811816:web:0f60b3c3e9bef4f9c106dd"
})
let app
firebase.auth().onAuthStateChanged(()=>{
    if (!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  })
