<template>
  <div class="container">
    <!-- v-if will render the element when statement is true and otherwise it will remove it from the DOM.
     V-show always render the element and keep it in the DOM and conditionally update the CSS display property
    to either show or hide the element. In general, v-if has higher toggle costs while v-show has higher
    initial render costs. Thus prefer v-show if you need to toggle something very often, and prefer v-if when
    the condition is unlikely to change at runtime -->
    <router-view v-show="showPage" @ready="showPage = true" />
    <app-spinner v-show="!showPage"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      showPage: false
    }
  },
  created () {
    // we need to reset the showPage before we navigate to another page.
    this.$router.beforeEach(() => {
      this.showPage = false
    })
  }
}
</script>

<style>
@import "assets/style.css";
</style>
