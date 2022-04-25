<template>
  <div  v-if="asyncDataStatus_ready" class="container">
    <h1>{{ category.name }}</h1>
    <forum-list :forums="forums" :title="category.name" />
  </div>
</template>
<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
import asyncDataStatus from '@/mixins/asyncDataStatus'
export default {
  props: {
    id: {
      type: String
    }
  },
  components: {
    ForumList
  },
  mixins: [asyncDataStatus],
  // computed: {
  //   category () {
  //     return sourceData.categories.find((category) => category.id === this.id)
  //   },
  //   forums () {
  //     return sourceData.forums.filter((forum) => forum.categoryId === this.id)
  //   }
  // }
  async created () {
    setTimeout(() => {
      this.category = sourceData.categories.find(
        (category) => category.id === this.id
      )
      this.forums = sourceData.forums.filter(
        (forum) => forum.categoryId === this.id
      )
      this.asyncDataStatus_fetched()
    }, 3000)
  }
}
</script>
<style>
</style>
