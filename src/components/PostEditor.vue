<template>
    <div class="col-full">
        <form @submit.prevent="save">
          <div class="form-group">
            <textarea
              v-model="text"
              name=""
              id=""
              cols="30"
              rows="5"
              class="form-input"
            />
          </div>
          <div class="form-actions">
            <button class="btn-blue">Submit Post</button>
          </div>
        </form>
      </div>
</template>
<script>
export default {
  props: {
    threadId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = Math.floor(Date.now() / 1000) * Math.random(1)
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.$emit('save', { post })
      this.text = ''
    }
  }
}
</script>
<style>

</style>
