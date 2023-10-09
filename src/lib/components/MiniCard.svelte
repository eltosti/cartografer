<script lang="ts">
    import Shapes from "./Shapes.svelte";
    import {Terrain} from "../../local_types/cards"
    export let time = 1;
    export let material = Terrain.Farm
    export let coin = false
    export let shape = {
        offset: {
            x: 1,
            y: 0,
        },
        shape: [
            [true, true, true, true],
            [false, false, false, true],
        ]
    };
    let iconFiles = [
        "",
        "src/resources/Village_Icon.png",
        "src/resources/Farm_Icon.png",
        "src/resources/Forest_Icon.png",
        "src/resources/Water_Icon.png",
        "src/resources/Monster_Icon.png",
        "src/resources/Mountain_Icon.png",
        ]

</script>
<div class="flex items-center rounded justify-evenly m-2 h-16 w-40 bg-slate-100">
    {#if time !== 0 }
        <div class="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center font-mono">{time}</div>
    {/if}
    <div class="h-12 w-12 relative bg-slate-200">
        <img alt="{iconFiles[material]}" src="{iconFiles[material]}" class="relative">
        {#if coin}
            <div class="h-5 w-5 z-10 border-2 border-[#b37a3a] rounded-full bg-amber-400 absolute bottom-1 left-3.5"></div>
        {/if}
    </div>
    <div class="h-12 p-1 bg-slate-200 flex justify-center items-center">
        <div class="w-12 flex justify-center">
            <div>
                <Shapes shape={shape.shape}/>
            </div>
        </div>
    </div>
</div>
