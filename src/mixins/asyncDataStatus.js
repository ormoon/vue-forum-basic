/*
mixins are fexible way to distribute reuseable functionalities in vue components. A mixin is an object that
contain any components options, like data or methods. When component uses a mixin, all options in the mixin
will be mixed into the component's own options.
*/

export default {
  data () {
    return {
      asyncDataStatus_ready: false
    }
  },
  methods: {
    asyncDataStatus_fetched () {
      this.asyncDataStatus_ready = true
      this.$emit('ready')
    }
  }
}
