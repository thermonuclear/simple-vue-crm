import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
    async fetchCurrency() {
      const listCurrency = await (await fetch('https://www.cbr-xml-daily.ru/daily_json.js')).json()
      return {
        rates: {EUR: listCurrency.Valute.EUR.Value, USD: listCurrency.Valute.USD.Value, RUB: 1},
        date: listCurrency.Date
      }
    }
  },
  modules: {
    auth,
    info,
    category
  }
})
