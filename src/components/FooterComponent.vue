<script setup>
import SocialNormalComponent from './SocialNormalComponent.vue';
</script>

<template>
  <footer class="py-16 px-12 bg-clr-primary max-sm:px-4">
    <h1 class="text-clr-secondary text-4xl font-bold">GGBLOG</h1>
    <div class="pt-16 pb-8 border-b flex justify-between text-clr-light">
        <div class="uppercase text-2xl space-x-4 flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-2">
            <router-link :to="{name: 'News'}" class="hover:text-clr-secondary">news</router-link>
            <router-link :to="{name: 'Blog'}" class="hover:text-clr-secondary">blog</router-link>
            <router-link :to="{name: 'Games'}" class="hover:text-clr-secondary">games</router-link>
        </div>
        <div class="text-lg flex flex-col justify-end">
            <h4 class="uppercase font-bold">Contact Us</h4>
            <p class="cursor-pointer text-clr-gray hover:text-clr-light">ggblog@example.com</p>
        </div>
    </div>
    <div class="flex justify-between pt-4">
        <div class="flex space-x-4 text-clr-light">
            <p>Term & Privacy</p>
            <p>© 2024 GGBLOG</p>
        </div>
        <SocialNormalComponent />
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>