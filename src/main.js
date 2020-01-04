import Vue from 'vue'
import Vuelidate from 'vuelidate/lib'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from './filters/date.filter'

Vue.config.productionTip = false

Vue.use(Vuelidate);

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
