<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <category-create @created="addCategory"/>
        <category-edit />
      </div>
    </section>
  </div>
</template>

<script>
  import CategoryCreate from '../components/categories/CategoryCreate'
  import CategoryEdit from '../components/categories/CategoryEdit'

  export default {
    name: 'Categories',
    components: { CategoryEdit, CategoryCreate },
    data: () => ({
      categories: []
    }),
    methods: {
      addCategory(category) {
        this.categories.push(category)

      }
    }
  }
</script>

<style scoped>

</style>
