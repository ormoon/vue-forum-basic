<template>
<div v-if="asyncDataStatus_ready" class="container">
  <h1>Welcome To The Forum</h1>
  <CategoryList :categories="categories" />
  </div>
</template>
<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList.vue'
import asyncDataStatus from '@/mixins/asyncDataStatus'
export default {
  components: {
    CategoryList
  },
  mixins: [asyncDataStatus],
  // data () {
  //   return {
  //     categories: sourceData.categories
  //   }
  // },
  created () {
    setTimeout(() => {
      this.categories = sourceData.categories
      this.asyncDataStatus_fetched()
    }, 3000)
  }
}
</script>
<style scoped>
</style>
