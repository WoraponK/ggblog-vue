<script setup>
import PopBlogComponent from '../components/PopBlogComponent.vue';
import NewsComponent from '../components/NewsComponent.vue';
import ReviewComponent from '../components/ReviewComponent.vue';
import BackToTopComponent from '../components/BackToTopComponent.vue';
import VideoComponent from '../components/VideoComponent.vue';
import MightLikeComponent from '../components/MightLikeComponent.vue';
</script>

<template>
  <section class="bg-[url('/images/gaming-background.jpg')] bg-cover py-48 px-16 flex items-center space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-4">
    <img src="/logo.png" class="h-[256px] max-xl:h-[180px] max-md:h-[215px]">
    <div class="font-bold text-6xl uppercase text-clr-light space-y-2 max-xl:text-4xl max-md:text-center max-sm:text-2xl">
      <p>game news</p>
      <p>trending games</p>
      <p>game comunities</p>
    </div>
  </section>
  <section class="p-16 border-b max-xl:px-8 max-sm:px-4">
    <PopBlogComponent />
  </section>
  <section class="grid grid-cols-[65%_35%] divide-x border-b max-lg:grid-cols-1 max-lg:divide-x-0 max-lg:divide-y">
    <div class="py-16 pl-16 pr-8 max-xl:px-8 max-sm:px-4">
      <NewsComponent />
    </div>
    <div class="py-16 pr-16 pl-8 max-xl:px-8 max-sm:px-4">
      <ReviewComponent />
    </div>
  </section>
  <section class="p-16 border-b max-xl:px-8 max-sm:px-4">
    <VideoComponent />
  </section>
  <section class="p-16 border-b max-xl:px-8 max-sm:px-4">
    <MightLikeComponent />
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