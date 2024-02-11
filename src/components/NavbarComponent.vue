<script setup>
import SocialNormalComponent from './SocialNormalComponent.vue';
</script>

<template>
  <nav class="py-4 px-16 flex justify-between items-center fixed w-full z-[999]">
    <router-link :to="{name: 'Home'}" class="text-clr-secondary font-bold text-4xl">GGBLOG</router-link>
    <div class="uppercase flex justify-center items-center space-x-8 text-xl font-semibold text-clr-light">
        <router-link :to="{name: 'News'}" class="hover:text-clr-secondary">news</router-link>
        <router-link :to="{name: 'Blog'}" class="hover:text-clr-secondary">blog</router-link>
        <router-link :to="{name: 'Games'}" class="hover:text-clr-secondary">games</router-link>
        <router-link :to="{name: 'Contact'}" class="hover:text-clr-secondary">contact us</router-link>
    </div>
    <div class="flex justify-center items-center space-x-4">
        <form>
            <label class="bg-clr-light p-2 flex">
                <input type="text" placeholder="Search" class="focus:outline-none bg-transparent pr-2">
                <button class="grid place-items-center"><ion-icon name="search"></ion-icon></button>
            </label>
        </form>
        <router-link :to="{name: 'Support'}">
            <button class="uppercase bg-clr-light py-2 px-6 font-bold text-clr-primary hover:bg-clr-secondary">support</button>
        </router-link>
        <SocialNormalComponent />
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>