<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>

    <router-link to="/register">
      <button type="button">Register</button>
    </router-link>

    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { loginUser } from '../services/api'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async handleLogin() {
      this.error = ''

      try {
        const data = await loginUser({
          username: this.username,
          password: this.password
        })

        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh)

        this.$router.push('/inventory')
      } catch (err) {
        this.error = err.message || 'Login failed'
      }
    }
  }
}
</script>