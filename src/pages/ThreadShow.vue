<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <post-list :posts="threadPosts" />
      <post-editor :threadId="id" @save="addPost($event)"/>
    </div>
  </div>
</template>
<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  computed: {
    thread () {
      //   return this.threads.find(thread => thread.id === this.$route.params.id)
      return this.threads.find((thread) => thread.id === this.id)
    },
    threadPosts () {
      return this.posts.filter((post) => post.threadId === this.id)
    }
  },
  methods: {
    addPost (event) {
      this.posts.push(event.post)
      this.threads.posts?.push(event.post.id)
    }
  }
}
</script>
<style scoped>
</style>
