<template>
  <main>
    <h1>日記アプリ</h1>
    <article>
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <div>
          {{ post.body }}
        </div>
      </div>
    </article>
  </main>
</template>

<script>
// import { Actions } from '~/store/post'

export default {
  computed: {
    posts() {
      return this.$store.getters['post/posts']
    },
  },
  created() {
    this.$store.dispatch('post/getPosts', {
      serach: '',
    })
  },
}
</script>
