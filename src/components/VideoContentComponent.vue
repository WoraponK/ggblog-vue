<template>
    <div class="flex overflow-x-scroll gap-4 snap-x snap-mandatory">
        <template v-for="index in 10" :key="index">
            <div class="flex flex-col w-[225px] group space-y-1 cursor-pointer py-4 snap-always snap-start">
                <div class="h-[127px] w-[225px] overflow-hidden rounded-lg relative flex justify-center items-center">
                    <ion-icon name="play"
                        class="absolute z-20 text-clr-light text-3xl transition-all group-hover:text-clr-gray group-hover:scale-90"></ion-icon>
                    <img src="https://placehold.jp/64/3d4070/a0a2ca/640x480.png?text=thumbnail"
                        class="h-full w-full acpect-video object-cover transition-transform group-hover:scale-125">
                </div>
                <h3 class="text-clr-light text-lg line-clamp-2 text-semibold">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Doloremque, veritatis?</h3>
            </div>
        </template>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>