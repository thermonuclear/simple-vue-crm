<template>
  <loader v-if="loading" />
  <div class="app-main-layout" v-else>
    <navbar @clickMenu="menuIsOpen = !menuIsOpen"/>

    <sidebar v-model="menuIsOpen"/>

    <main class="app-content" :class="{full: !menuIsOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'Создать новую запись'">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/app/Navbar'
  import Sidebar from '@/components/app/Sidebar'
  export default {
    name: 'MainLayout',
    components: { Sidebar, Navbar },
    data: () => ({
      menuIsOpen: true,
      loading: true
    }),
    async mounted () {
      if (!Object.keys(this.$store.getters.info).length) {
        await this.$store.dispatch('fetchInfo')
      }
      this.loading = false
    }
  }
</script>

<style scoped>

</style>
