<template>
  <form @submit.prevent>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <input type="submit" @click="submit">
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      await this.$auth.loginWith('local', {
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then((response) => {
          return response
        },
        (error) => {
          return error
        })
    },
  }
}
</script>
