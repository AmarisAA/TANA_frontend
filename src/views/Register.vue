<template>
  <div>
    <h1>Register</h1>

    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="Username" required />
      <input v-model="first_name" placeholder="First Name" required />
      <input v-model="last_name" placeholder="Last Name" required />
      <input v-model="phone_number" placeholder="Phone Number" />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <input v-model="password2" type="password" placeholder="Re-enter Password" required />
      <button type="submit">Register</button>
    </form>

    <p v-if="message">{{ message }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { registerUser } from '../services/api'

export default {
  data() {
    return {
      username: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: '',
      password2: '',
      message: '',
      error: ''
    }
  },
  methods: {
    async handleRegister() {
      this.message = ''
      this.error = ''

      try {
        await registerUser({
          username: this.username,
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          email: this.email,
          password: this.password,
          password2: this.password2
        })

        this.message = 'Registered successfully'
        this.$router.push('/')
      } catch (err) {
        this.error = err.message || 'Register failed'
      }
    }
  }
}
</script>