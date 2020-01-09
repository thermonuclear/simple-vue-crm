<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link v-for="link in links" :key="link.url" tag="li" :to="link.url" active-class="active" exact>
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title | localize }}</a>
    </router-link>
  </ul>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: ['value'],
    data() {
      return {
        links: [
          {title: 'Menu_Bill', url: '/'},
          {title: 'Menu_History', url: '/history'},
          {title: 'Menu_Planning', url: '/planning'},
          {title: 'Menu_Record', url: '/record'},
          {title: 'Menu_Categories', url: '/categories'},
        ],
      }
    }
  }
</script>

<style scoped>

</style>
