import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Inventory from '../views/Inventory.vue'

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/inventory', name: 'Inventory', component: Inventory },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router