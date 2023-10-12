<script lang="ts">
    import {Terrain} from "../../local_types/cards";
    import {cross, longZigZag, shortLine} from "../../local_types/shapes";
    import Shapes from "./Shapes.svelte";
    import {store as placer} from "../../stores/placer"


    let iconFiles = [
        "",
        "src/resources/Village_Icon.png",
        "src/resources/Farm_Icon.png",
        "src/resources/Forest_Icon.png",
        "src/resources/Water_Icon.png",
        "src/resources/Monster_Icon.png",
        "src/resources/Mountain_Icon.png",
    ]

    export let card = {
        id: 8,
        name: 'Tierras de Cultivo',
        time: 1,
        materialOptions: [Terrain.Farm, Terrain.River],
        shapesOptions: [
            { shapes: [longZigZag], coin: true },
            { shapes: [cross], coin: false }
        ]
    };

    export let selectedShape = card.shapesOptions.length == 1 ? 0 : undefined;
    export let selectedMaterial = card.materialOptions.length == 1 ? 0 : undefined;

    export let locked = false

</script>

<div class="w-40 h-60 bg-slate-100 m-2 p-2 rounded flex flex-col justify-between">
    <div>
        <div class="h-8 w-8 rounded-full  flex items-center justify-center font-mono align-middle bg-slate-200"> {card.time}</div>
    </div>
    <div>
        <h1><b>{card.name}</b></h1>
        <div class="flex justify-center">
            {#each card.materialOptions as material,index}
                <img alt="{iconFiles[material]}" src="{iconFiles[material]}" class:selected={index === selectedMaterial}
                     on:click={()=> {selectedMaterial = locked ? selectedMaterial : index;$placer.terrain = card.materialOptions[selectedMaterial]}}
                     class="m-1 h-12 w-12 rounded  { !locked ? 'hover:ring-amber-400 hover:ring-2 hover:ring-inset':''}">
            {/each}
        </div>
        <div class="flex justify-center">
            {#each card.shapesOptions as shape, index}
                <div class:selected={index === selectedShape}
                     on:click={ () => {selectedShape = locked ? selectedShape : index;$placer.shape = card.shapesOptions[selectedShape].shapes[0]}}
                     class=" h-12 rounded bg-slate-200 p-1 flex items-center m-2 { !locked ? 'hover:ring-amber-400 hover:ring-2 hover:ring-inset':''}">
                    {#if shape.coin}
                        <div class="h-4 w-4  rounded-full bg-amber-400"></div>
                    {/if}
                    <div class="h-12 w-12 rounded flex justify-center items-center">
                        <Shapes shape="{shape.shapes[0].shape}"/>
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

    img:hover {
        outline: 2px solid rgb(251 191 36 / var(--tw-ring-opacity));;
        outline-offset: -1px;
    }

    img.selected {
        outline: 2px solid rgb(251 191 36 / var(--tw-ring-opacity));;
        outline-offset: -1px;
    }
</style>
