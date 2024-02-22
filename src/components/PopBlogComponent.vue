<template>
  <div class="space-y-8">
    <h2 class="text-clr-primary text-3xl font-bold">THE WEEK'S POPULAR BLOG</h2>
    <div class="flex flex-wrap gap-10 justify-center">
        <template v-for="index in 4" :key="index">
            <div class="w-[300px] aspect-square space-y-4 transition-all group hover:scale-105 hover:cursor-pointer">
                <div class="w-full aspect-video overflow-hidden flex justify-center items-center rounded-lg">
                    <img src="https://placehold.jp/64/3d4070/a0a2ca/640x480.png?text=thumbnail" alt="" class="w-full transition-all group-hover:scale-110">
                </div>
                <div class="grid grid-cols-[85%_15%]">
                    <h3 class="text-clr-light line-clamp-3 font-semibold text-xl group-hover:text-clr-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, harum.</h3>
                    <span class="text-clr-primary text-6xl font-bold h-full w-full place-items-center grid">{{ index }}</span>
                </div>
                <p class="text-clr-gray">BY John Doe</p>
            </div>
        </template>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>