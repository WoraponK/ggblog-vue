<template>
    <div class="flex flex-col space-y-6">
        <div class="divide-y divide-clr-gray divide-dashed grid grid-cols-1 space-y-6">
            <template v-for="index in 5" :key="index">
                <div
                    class="h-[165px] grid grid-cols-[25%_75%] space-x-2 pt-6 cursor-pointer group max-xl:h-[120px] max-sm:grid-cols-1 max-sm:h-[275px]">
                    <div class="h-full w-full flex justify-center items-center rounded-lg overflow-hidden">
                        <img src="https://placehold.jp/64/3d4070/a0a2ca/640x480.png?text=thumbnail"
                            class="h-full w-full object-cover transition-transform group-hover:scale-110">
                    </div>
                    <div class="text-clr-light flex flex-col justify-between">
                        <h3 class="text-xl font-semibold line-clamp-1 group-hover:text-clr-secondary max-xl:line-clamp-2">Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore?</h3>
                        <p class="text-md line-clamp-3 max-xl:hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Consequuntur, doloribus beatae vel voluptate corporis non ratione optio sint quia explicabo saepe,
                            tempora dolore amet? Adipisci, ipsum atque omnis modi, quas magni reiciendis consequuntur aliquam
                            at, assumenda iusto cum dolorum perferendis magnam sint minima hic fugit. Repellat minus cum
                            nesciunt ratione.</p>
                        <div class="grid grid-cols-2 text-sm max-xl:grid-cols-1">
                            <span class="text-clr-primary">BY John Doe</span>
                            <p class="uppercase text-clr-gray">less than a minute ago</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="pt-8">
            <button class="bg-clr-primary p-2 w-full text-clr-light font-bold hover:bg-hover-primary uppercase">READ
                MORE</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>