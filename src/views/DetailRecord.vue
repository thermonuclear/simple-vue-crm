<template>
  <div>
    <Loader v-if="loading" />
    <p class="center" v-else-if="!record">Запись с id {{$route.params.id}} не найдена</p>
    <div v-else>
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">История</router-link>
        <a class="breadcrumb" @click.prevent>
          {{record.type === 'income' ? 'Доход' : 'Расход'}}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card" :class="record.type === 'income' ? 'green' : 'red'">
            <div class="card-content white-text">
              <p>Описание: {{record.description}}</p>
              <p>Сумма: {{record.amount}}</p>
              <p>Категория: {{record.categoryName}}</p>

              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailRecord',
    metaInfo() {
      return {title: this.$title('DetailRecord_Title')}
    },
    data: () => ({
      record: null,
      loading: true,
    }),
    async mounted() {
      const id = this.$route.params.id
      const record = await this.$store.dispatch('fetchRecordById', id)

      if (Object.keys(record).length) {
        const category = await this.$store.dispatch('fetchCategoryById', record.catId)
        this.record = {...record, categoryName: category.title}
      }

      this.loading = false
    }
  }
</script>

<style scoped>

</style>
