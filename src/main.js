import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);

// Register the router with the Vue app
app.use(router);

app.mount('#app');