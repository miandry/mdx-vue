<template>
  <Preloader />
  <div class="header-bg header-bg-1"></div>
  <Appbar/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Preloader from "./components/Preloader.vue";
import Appbar from "./components/Appbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Preloader,
    Appbar,
    Footer
  },
};
</script>

<style>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}
</style>
