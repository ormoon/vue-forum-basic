<template>
  <div class="col-full">
    <forum-list
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsForCategory(category)"
      :title="category.name"
      :categoryId="category.id"
    />
  </div>
</template>
<script>
import ForumList from './ForumList.vue'
import sourceData from '@/data.json'
export default {
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    getForumsForCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>
<style>
</style>
