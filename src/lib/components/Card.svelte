<script lang="ts">
    import {Terrain} from "../../local_types/cards";
    import {longDiagonal, standardLine} from "../../local_types/shapes";
    import Shapes from "./Shapes.svelte";

    export let card = {
        id: 7,
        name: 'Gran Rio',
        time: 1,
        materialOptions: [Terrain.River],
        shapesOptions: [
            {shapes: [standardLine], coin: true},
            {shapes: [longDiagonal], coin: false}
        ]
    };

    export let selectedShape = card.shapesOptions.length == 1 ? 0  : undefined;
    export let selectedMaterial = card.materialOptions.length == 1 ? 0 : undefined;

    export let locked = false

</script>

<div class="w-40 h-60 bg-slate-100 m-4 p-2 rounded flex flex-col justify-between">
    <div>
        <div class="h-8 w-8 rounded-full text-center align-middle bg-slate-200"> {card.time}</div>
    </div>
    <div>
        <div>{card.name}</div>
        <div class="flex justify-center">
            {#each card.materialOptions as material,index}
                <Shapes/>
                <div class:selected={index === selectedMaterial} on:click={()=> selectedMaterial = locked ? selectedMaterial : index} class="h-12 w-12 rounded bg-green-200  { !locked ? 'hover:ring-amber-400 hover:ring-2 hover:ring-inset':''}"></div>
            {/each}
        </div>
        <div class="flex justify-center">
            {#each card.shapesOptions as shape, index}
                <div class:selected={index === selectedShape} on:click={ () => selectedShape = locked ? selectedShape : index} class="h-12 rounded bg-slate-200 p-1 flex items-center m-2 { !locked ? 'hover:ring-amber-400 hover:ring-2 hover:ring-inset':''}">
                    {#if shape.coin}
                        <div class="h-4 w-4  rounded-full bg-amber-400"></div>
                    {/if}
                    <div class="h-12 w-12 rounded ">
                        <Shapes shape="{shape.shapes[0]}"></Shapes>
                    </div>
                </div>
            {/each}
        </div>
    </div>

</div>


<style>
    .selected {
        --tw-ring-inset: inset;
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(251 191 36 / var(--tw-ring-opacity));
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
</style>
