import { createRouter, createWebHistory } from 'vue-router';

// Import your components (or use dynamic imports for lazy loading)
import Home from '../pages/Home.vue';
import SignIn from '../pages/user/SignIn.vue';
// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Registration',
    component: SignIn
  },
  
];

// Create the router instance and pass in the routes
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode for clean URLs
  routes
});

export default router;
