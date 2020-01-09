<template>
  <div>
    <div class="page-title">
      <h3>{{ 'ProfileTitle' | localize }}</h3>
    </div>

    <form class="form" @submit.prevent="formSubmit">
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="name"
          :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="description">{{'ProfileName' | localize}}</label>
        <span class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">{{'MessageEnterName' | localize}}</span>
      </div>

      <div class="switch">
        <label>
          English
          <input type="checkbox" v-model="isRulocale">
          <span class="lever"></span>
          Русский
        </label>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{'ProfileUpdate' | localize}}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'Profile',
    data: () => ({
      name: '',
      isRulocale: true,
    }),
    computed: {
      ...mapGetters(['info'])
    },
    validations: {
      name: { required },
    },
    mounted () {
      this.name = this.info.name
      this.isRulocale = this.info.locale === 'ru-RU'
      setTimeout(() => M.updateTextFields(), 0)
    },
    methods: {
      ...mapActions(['updateInfo']),
      async formSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }

        try {
          await this.updateInfo({name: this.name, locale: this.isRulocale ? 'ru-RU' : 'en-US'})
        } catch {

        }
      }
    }
  }
</script>

<style scoped>
  .switch {
    margin-bottom: 2rem;
  }
</style>
