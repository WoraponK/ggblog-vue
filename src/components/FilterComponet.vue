<template>
  <div class="bg-clr-primary p-4 space-y-6 h-fit">
    <h2 class="uppercase text-3xl font-bold text-clr-secondary">filter</h2>
    <div>
        <form>
            <label class="bg-clr-light p-2 flex justify-between">
                <input type="text" placeholder="Search" class="focus:outline-none bg-transparent pr-2 w-full">
                <button class="grid place-items-center"><ion-icon name="search"></ion-icon></button>
            </label>
        </form>
        <button class="uppercase w-full flex text-clr-light font-semibold text-lg pt-3 px-3 hover:bg-hover-primary-bright border-b">lastest</button>
        <button class="uppercase w-full flex text-clr-light font-semibold text-lg pt-3 px-3 hover:bg-hover-primary-bright border-b">popular</button>
        <button class="uppercase w-full flex text-clr-light font-semibold text-lg pt-3 px-3 hover:bg-hover-primary-bright border-b">oldest</button>
    </div>
    <div class="space-y-2">
        <h3 class="uppercase text-2xl font-semibold text-clr-light">trending</h3>
        <div class="flex flex-wrap gap-2">
            <div class="rounded-full py-1 px-3 flex space-x-1 border-2 border-clr-light hover:bg-hover-primary-bright cursor-pointer text-clr-light">
                <ion-icon name="search" class="translate-y-1"></ion-icon>
                <p class="text-md font-semibold">PUBG</p>
            </div>
            <div class="rounded-full py-1 px-3 flex space-x-1 border-2 border-clr-light hover:bg-hover-primary-bright cursor-pointer text-clr-light">
                <ion-icon name="search" class="translate-y-1"></ion-icon>
                <p class="text-md font-semibold">Fortnite</p>
            </div>
            <div class="rounded-full py-1 px-3 flex space-x-1 border-2 border-clr-light hover:bg-hover-primary-bright cursor-pointer text-clr-light">
                <ion-icon name="search" class="translate-y-1"></ion-icon>
                <p class="text-md font-semibold">Final Fantasy XV</p>
            </div>
            <div class="rounded-full py-1 px-3 flex space-x-1 border-2 border-clr-light hover:bg-hover-primary-bright cursor-pointer text-clr-light">
                <ion-icon name="search" class="translate-y-1"></ion-icon>
                <p class="text-md font-semibold">Counter-Strike 2</p>
            </div>
            <div class="rounded-full py-1 px-3 flex space-x-1 border-2 border-clr-light hover:bg-hover-primary-bright cursor-pointer text-clr-light">
                <ion-icon name="search" class="translate-y-1"></ion-icon>
                <p class="text-md font-semibold">Genshin Impact</p>
            </div>
            <div class="rounded-full py-1 px-3 flex space-x-1 border-2 border-clr-light hover:bg-hover-primary-bright cursor-pointer text-clr-light">
                <ion-icon name="search" class="translate-y-1"></ion-icon>
                <p class="text-md font-semibold">GTA6</p>
            </div>
            <div class="rounded-full py-1 px-3 flex space-x-1 border-2 border-clr-light hover:bg-hover-primary-bright cursor-pointer text-clr-light">
                <ion-icon name="search" class="translate-y-1"></ion-icon>
                <p class="text-md font-semibold">Valorant</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>