<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div class="row" v-else>
        <category-create @created="addCategory" />
        <category-edit v-if="categories.length" :categories="categories" @updated="updateCategories" :key="categories.length + updateCount"/>
        <p v-else class="center">Категорий пока нет</p>
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
    metaInfo() {
      return {title: this.$title('Menu_Categories')}
    },
    data: () => ({
      categories: [],
      loading: true,
      updateCount: 0
    }),
    async mounted () {
      this.categories = await this.$store.dispatch('fetchCategories')
      this.loading = false
    },
    methods: {
      addCategory(category) {
        this.categories.push(category)
      },
      updateCategories(category) {
        const index  = this.categories.findIndex(c => c.id === category.id)
        this.categories[index].title = category.title
        this.categories[index].limit = category.limit
        this.updateCount++
      }
    }
  }
</script>

<style scoped>

</style>
