<template>
  <div class="fixed-top">
            <div class="appbar-area sticky-black">
                <div class="container">
                    <div class="appbar-container">
                        <div class="appbar-item appbar-actions">
                            <div class="appbar-action-item">
                                <a href="#" class="appbar-action-bar" data-bs-toggle="modal" data-bs-target="#sidebarDrawer"><i class="flaticon-menu"></i></a>
                            </div>
                        </div>
                        <div class="appbar-item appbar-brand me-auto">
                            <a href="index.html">
                                <img src="assets/images/logo.png" alt="logo" class="main-logo">
                                <img src="assets/images/logo-hover.png" alt="logo" class="hover-logo">
                            </a>
                        </div>
                  
                        <div class="appbar-item appbar-options">
                            <div class="appbar-option-item appbar-option-notification">
                                <a href="notifications.html"><i class="flaticon-bell"></i></a>
                                <span class="option-badge">5</span>
                            </div>
                            <div class="appbar-option-item appbar-option-profile">
                                <a href="settings.html"><img src="assets/images/profile.jpg" alt="profile"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>
<script>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

export default {
    
  name: "AppbarHome",
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