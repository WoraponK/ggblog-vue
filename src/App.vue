<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <NavbarComponent />
  <div class="bg-clr-dark">
    <RouterView />
  </div>
  <FooterComponent />
</template>
