<template>
  <AppbarSimple  v-if="changeSimpleHeader()"/>
  <AppbarHome  v-else />
</template>
<script>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import AppbarSimple from "../components/AppbarSimple.vue";
import AppbarHome from "../components/AppbarHome.vue";

export default {

  name: "Appbar",
  components: {
    AppbarSimple,
    AppbarHome
  },
  data() {
    return {
      simpleHeader: true
    };
  },
    methods: {
    // Define a function to change the message
    changeSimpleHeader() {
        const route = useRoute();
        const routePath= ref(route.path);
        watch(route, (newRoute) => {
          routePath.value = newRoute.path;
        });

        if(routePath.value == '/'){
          return false ;
        }else if (routePath.value == '/register'){
          return true ;
        }else{
          return false ;
        }
    }
  }
};
</script>
<style>
.header-bg-1 {
  background-image: none;
}
.appbar-item {
  z-index: 11;
}
.appbar-action-item a.back-page {
  z-index: 12;
}
</style>
