<template>
  <div class="auth-page">
    <div class="auth-box">
      <div class="auth-form">
        <input v-model="username" type="text" placeholder="Username" class="auth-input" />
        <input v-model="first_name" type="text" placeholder="First Name" class="auth-input" />
        <input v-model="last_name" type="text" placeholder="Last Name" class="auth-input" />
        <input v-model="phone_number" type="text" placeholder="Phone Number" class="auth-input" />
        <input v-model="email" type="email" placeholder="Email" class="auth-input" />
        <input v-model="password" type="password" placeholder="Password" class="auth-input" />
        <input v-model="password2" type="password" placeholder="Re-enter Password" class="auth-input" />
        <button type="button" @click="register" class="auth-button">Register</button>
        <span class="auth-link" @click="$router.push('/')">Back</span>
      </div>
    </div>
  </div>
</template>

<script>
import { registerUser } from '../services/api'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    async register() {
      if (this.password !== this.password2) {
        alert('Passwords do not match')
        return
      }

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

        this.$router.push('/')
      } catch (error) {
        alert(error.message || 'Registration failed')
      }
    }
  }
}
</script>