<script setup>
import SocialLargeComponent from './SocialLargeComponent.vue';
import SocialNormalComponent from './SocialNormalComponent.vue';
</script>

<template>
    <nav class="py-4 px-16 flex justify-between items-center fixed w-full z-[888] max-xl:px-8 max-md:px-4 max-md:border-b max-md:border-clr-gray transition-colors"
        :class="toggleSticky()">
        <router-link :to="{ name: 'Home' }" class="text-clr-secondary font-bold text-4xl">GGBLOG</router-link>
        <div
            class="uppercase flex justify-center items-center space-x-8 text-xl font-semibold text-clr-light max-xl:hidden">
            <router-link :to="{ name: 'News' }" class="hover:text-clr-secondary">news</router-link>
            <router-link :to="{ name: 'Blog' }" class="hover:text-clr-secondary">blog</router-link>
            <router-link :to="{ name: 'Games' }" class="hover:text-clr-secondary">games</router-link>
            <router-link :to="{ name: 'Contact' }" class="hover:text-clr-secondary">contact us</router-link>
        </div>
        <div class="flex justify-center items-center gap-2 max-xl:gap-1 max-xl:flex-col-reverse max-xl:items-end">
            <div class="flex space-x-2 h-[32px]">
                <form class="max-md:hidden">
                    <label class="bg-clr-light px-2 flex h-full">
                        <input type="text" placeholder="Search" class="focus:outline-none bg-transparent pr-2">
                        <button class="grid place-items-center"><ion-icon name="search"></ion-icon></button>
                    </label>
                </form>
                <router-link :to="{ name: 'Support' }">
                    <button
                        class="uppercase h-full bg-clr-light px-6 font-bold text-clr-primary hover:bg-clr-secondary">support</button>
                </router-link>
                <button class="h-full hidden justify-center items-center text-4xl text-clr-light max-xl:flex"
                    @click="toggleSideMenu()">
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
            </div>
            <SocialNormalComponent class="max-md:hidden" />
        </div>
    </nav>
    <div class="h-screen w-[425px] bg-clr-primary fixed right-0 z-[999] flex flex-col max-sm:w-screen shadow-2xl hidden"
        :class="[side_active ? 'max-xl:block' : 'max-xl:hidden']">
        <div class="text-clr-light flex justify-end mr-7 mt-11 text-5xl max-md:mr-3 max-md:mt-4">
            <button @click="toggleSideMenu"><ion-icon name="close-circle-outline"></ion-icon></button>
        </div>
        <div class="px-8 space-y-12">
            <router-link :to="{ name: 'Home' }" class="text-clr-secondary font-bold text-4xl" @click="toggleSideMenu">GGBLOG</router-link>
            <form>
                <label class="bg-clr-light p-2 flex justify-between">
                    <input type="text" placeholder="Search" class="focus:outline-none bg-transparent pr-2 w-full">
                    <button class="grid place-items-center"><ion-icon name="search"></ion-icon></button>
                </label>
            </form>
            <div class="uppercase text-2xl space-y-2 flex flex-col font-semibold text-clr-light">
                <router-link :to="{name: 'News'}" class="hover:text-clr-secondary w-fit" @click="toggleSideMenu">news</router-link>
                <router-link :to="{name: 'Blog'}" class="hover:text-clr-secondary w-fit" @click="toggleSideMenu">blog</router-link>
                <router-link :to="{name: 'Games'}" class="hover:text-clr-secondary w-fit" @click="toggleSideMenu">games</router-link>
                <router-link :to="{name: 'Contact'}" class="hover:text-clr-secondary w-fit" @click="toggleSideMenu">contact us</router-link>
            </div>
            <div class="space-y-3">
                <p class="text-clr-gray hover:text-clr-light cursor-pointer w-fit">ggblog@example.com</p>
                <SocialLargeComponent />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            side_active: false
        }
    },
    methods: {
        toggleSticky() {
            if (this.active) {
                return 'bg-clr-primary max-md:border-b-0'
            }
        },

        toggleSideMenu() {
            this.side_active = !this.side_active
        },
    },
    mounted() {
        window.document.onscroll = () => {
            const nav = document.querySelector("nav");
            if (window.scrollY > nav.offsetTop) {
                this.active = true;
            } else {
                this.active = false;
            }
        }
    }
}
</script>

<style></style>