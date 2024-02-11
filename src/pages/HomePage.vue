<script setup>
import PopBlogComponent from '../components/PopBlogComponent.vue';
import NewsComponent from '../components/NewsComponent.vue';
import SideContentComponent from '../components/ReviewComponent.vue';
import BackToTopComponent from '../components/BackToTopComponent.vue';
</script>

<template>
  <section class="bg-[url('/images/gaming-background.jpg')] bg-cover py-48 px-16 flex items-center space-x-4">
    <img src="/logo.png" class="h-[256px]">
    <div class="font-bold text-6xl uppercase text-clr-light space-y-2">
      <p>game news</p>
      <p>trending games</p>
      <p>game comunities</p>
    </div>
  </section>
  <section class="p-16 border-b">
    <PopBlogComponent />
  </section>
  <section class="grid grid-cols-[65%_35%] divide-x border-b">
    <div class="py-16 pl-16 pr-4">
      <NewsComponent />
    </div>
    <div class="py-16 pr-16 pl-4">
      <SideContentComponent />
    </div>
  </section>
  <section class="p-16">
    <BackToTopComponent />
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>