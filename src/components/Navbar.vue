<template>
  <nav class="navbar custom-navbar">
    <div class="navbar-content">
      <span class="navbar-brand">TANA</span>

      <div class="nav-links">
          <router-link to="/">Login</router-link>
          <router-link to="/inventory">Inventory</router-link>
          <router-link to="/profile">Profile</router-link>
          <!-- <button class="logout-button" @click="logout">Logout</button> -->
          <router-link to="/register">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    isAuthenticated: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.custom-navbar {
  background-color: #5f82c3;
  border-bottom: 1px solid #4a6aa8;
  padding: 18px 0;
}

.navbar-content {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;              

  display: flex;
  flex-direction: column;      
  align-items: center;         
  gap: 10px;
}

.navbar-brand {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 3px;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}

.nav-links a.router-link-exact-active {
  color:#e6ecff;
  font-weight: 700;
}
</style>