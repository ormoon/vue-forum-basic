<template>
  <div class="col-full text-center">
    <h1>Page Not Found</h1>
    <router-link :to="{ name: 'Home' }">Read Some Cool Threads</router-link>
  </div>
</template>
<script>
export default {
  created () {
    this.$emit('ready')
  }
}
</script>
<style>
</style>
