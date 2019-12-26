<template>
  <div class="app-main-layout">
    <navbar @clickMenu="menuIsOpen = !menuIsOpen"/>

    <sidebar v-model="menuIsOpen"/>

    <main class="app-content" :class="{full: !menuIsOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
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
      menuIsOpen: true
    }),
  }
</script>

<style scoped>

</style>
