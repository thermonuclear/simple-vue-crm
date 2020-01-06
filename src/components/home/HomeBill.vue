<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p class="currency-line" v-for="c in currences" :key="c">
          <span>{{getCurrency(c) | currency(c)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBill',
    props: ['rates'],
    data: () => ({
      currences: ['RUB', 'USD', 'EUR']
    }),
    methods: {
      getCurrency(currency) {
        return Math.floor(this.$store.getters.info.bill / this.rates[currency])
      }
    }
  }
</script>

<style scoped>

</style>
