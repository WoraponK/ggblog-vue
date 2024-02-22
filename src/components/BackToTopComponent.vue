<template>
  <div class="grid place-items-center text-3xl">
    <div class="grid place-items-center cursor-pointer group" @click="scrollToTop">
        <ion-icon name="chevron-up" class="text-clr-secondary group-hover:animate-bounce"></ion-icon>
        <p class="text-clr-light font-semibold transition-colors group-hover:text-clr-secondary">BACK TO TOP</p>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, left: 0 });
      }
    }
}
</script>

<style>

</style>