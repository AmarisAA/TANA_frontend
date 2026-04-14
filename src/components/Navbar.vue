<template>
  <nav class="navbar custom-navbar">
    <div class="navbar-content">
      <span class="navbar-brand">TANA</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.custom-navbar {
  background-color: #f5efe6;
  border-bottom: 1px solid #d9d2c7;
  padding: 18px 0;
}

.navbar-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-brand {
  color: #5f82c3;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 3px;
}
</style>