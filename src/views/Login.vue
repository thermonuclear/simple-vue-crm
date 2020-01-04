<template>
  <form class="card auth-card" @submit.prevent="formSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && (!$v.email.required || !$v.email.email))}"
        >
        <label for="email">Email</label>
        <small v-if="$v.email.$dirty && !$v.email.required" class="helper-text invalid">Поле Email пустое</small>
        <small v-else-if="$v.email.$dirty && !$v.email.email" class="helper-text invalid">Поле Email некорректно</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && (!$v.password.required || !$v.password.minLength))}"
        >
        <label for="password">Пароль</label>
        <small v-if="$v.password.$dirty && !$v.password.required" class="helper-text invalid">Поле Пароль пустое</small>
        <small v-else-if="$v.password.$dirty && !$v.password.minLength" class="helper-text invalid">Поле Пароль менее {{ $v.password.$params.minLength.min }} символов. Текущая длина {{password.length}} символов</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/registr">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators'
  import messages from '../utils/messages'

  export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: ''
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    },
    mounted () {
      if (messages[this.$route.query.message]) {
        this.$message(messages[this.$route.query.message])
      }
    },
    methods: {
      formSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        let formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData);
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
