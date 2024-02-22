<script setup>
import VideoContentComponent from './VideoContentComponent.vue';
</script>

<template>
    <div class="space-y-8">
        <h2 class="text-clr-primary text-3xl font-bold">VIDEOS</h2>
        <div>
            <h3 class="uppercase text-clr-secondary text-2xl font-semibold"><ion-icon name="play-circle" class="translate-y-0.5 mr-1"></ion-icon>Trailers</h3>
            <VideoContentComponent />
        </div>
        <div>
            <h3 class="uppercase text-clr-secondary text-2xl font-semibold"><ion-icon name="game-controller" class="translate-y-0.5 mr-1"></ion-icon>Gameplay</h3>
            <VideoContentComponent />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>