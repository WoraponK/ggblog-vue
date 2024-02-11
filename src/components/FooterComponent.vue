<script setup>
import SocialNormalComponent from './SocialNormalComponent.vue';
</script>

<template>
  <footer class="py-16 px-12 bg-clr-primary">
    <h1 class="text-clr-secondary text-4xl font-bold">GGBLOG</h1>
    <div class="pt-16 pb-8 border-b flex justify-between text-clr-light">
        <div class="uppercase text-2xl space-x-4">
            <router-link :to="{name: 'News'}" class="hover:text-clr-secondary">news</router-link>
            <router-link :to="{name: 'Blog'}" class="hover:text-clr-secondary">blog</router-link>
            <router-link :to="{name: 'Games'}" class="hover:text-clr-secondary">games</router-link>
        </div>
        <div class="text-lg">
            <h4 class="uppercase font-bold">Contact Us</h4>
            <p>ggblog@example.com</p>
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