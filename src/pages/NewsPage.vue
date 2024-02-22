<script setup>
import FilterComponet from '../components/FilterComponet.vue';
import NewsComponent from '../components/NewsComponent.vue';
import BackToTopComponent from '../components/BackToTopComponent.vue';
import VideoComponent from '../components/VideoComponent.vue';
import MightLikeComponent from '../components/MightLikeComponent.vue';
</script>

<template>
  <section class="pt-32 pb-16 px-16 grid grid-cols-[25%_75%] border-b max-xl:px-8 max-sm:px-4 max-lg:grid-cols-1 gap-8">
    <FilterComponet />
    <div class="max-xl:pr-8 max-lg:pr-4 max-sm:pr-2">
        <NewsComponent />
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