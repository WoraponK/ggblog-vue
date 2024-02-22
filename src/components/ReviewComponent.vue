<template>
  <div class="space-y-12">
    <h2 class="text-clr-primary text-3xl font-bold">REVIEWS</h2>
    <div class="grid grid-cols-1 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
      <template v-for="index in 4" :key="index">
        <div class="w-full aspect-video rounded-lg overflow-hidden grid grid-rows-[80%_20%] group cursor-pointer">
          <div class="h-full w-full relative flex justify-center items-center overflow-hidden">
            <ion-icon name="star-half-outline" class="absolute text-5xl transition-all group-hover:scale-90 z-20 text-clr-light drop-shadow-lg group-hover:text-clr-gray"></ion-icon>
            <img src="https://placehold.jp/64/3d4070/a0a2ca/640x480.png?text=thumbnail" class="h-full w-full object-cover transition-transform group-hover:scale-125 z-10">
          </div>
          <div class="flex items-center px-4 bg-clr-primary text-clr-light">
            <h3 class="text-xl font-semibold group-hover:text-clr-secondary line-clamp-1">Lorem ipsum dolor sit amet.</h3>
          </div>
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