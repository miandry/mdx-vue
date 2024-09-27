<template>
  <div class="appbar-area sticky-black">
    <div class="container">
      <div class="appbar-container">
        <div class="appbar-item appbar-actions">
          <div class="appbar-action-item">
            <a href="#" class="back-page"
              ><i class="flaticon-left-arrow"></i
            ></a>
          </div>
        </div>
        <div class="appbar-item appbar-page-title mx-auto">
          <h3>{{routeName}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

export default {
    
  name: "AppbarSimple",
   setup() {
    const route = useRoute();
    const routeName = ref(route.name);

    // Watch for route changes and update the route name
    watch(route, (newRoute) => {
      routeName.value = newRoute.name;
    });

    return {
      routeName
    };
  }
};
</script>
<style>
.header-bg-1 {
    background-image:none;
}
.appbar-item{
    z-index:11;
}
.appbar-action-item a.back-page{
  z-index:12;
}
</style>