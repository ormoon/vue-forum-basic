<template>
  <div class="container">
    <!-- v-if will render the element when statement is true and otherwise it will remove it from the DOM.
     V-show always render the element and keep it in the DOM and conditionally update the CSS display property
    to either show or hide the element. In general, v-if has higher toggle costs while v-show has higher
    initial render costs. Thus prefer v-show if you need to toggle something very often, and prefer v-if when
    the condition is unlikely to change at runtime -->
    <router-view v-show="showPage" @ready="onPageReady" />
    <app-spinner v-show="!showPage"/>
  </div>
</template>

<script>
import NProgress from 'nprogress'
export default {
  name: 'App',
  components: {},
  data () {
    return {
      showPage: false
    }
  },
  created () {
    NProgress.configure({ speed: 200, showSpinner: false })
    // we need to reset the showPage before we navigate to another page.
    this.$router.beforeEach(() => {
      this.showPage = false
      NProgress.start()
    })
  },
  methods: {
    onPageReady () {
      this.showPage = true
      NProgress.done()
    }
  }
}
</script>

<style>
@import "assets/style.css";
/* tilde directly point to node_modules directory */
@import "~nprogress/nprogress.css";
#nprogress .bar{
  background: #57ADBD !important;
}
</style>
