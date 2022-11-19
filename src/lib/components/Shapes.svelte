<script lang="ts">
    //import {Shape} from "../../local_types/shapes.js";

    export let shape = {
        offset: {
            x: 1,
            y: 0,
        },
        shape: [
            [true, true, true, true],
            [false, false, false, true],
            [false, false, false, false],
            [false, false, false, false]
        ]
    };

    // const isDiff = (a,x,y) => {
    //     if (x < 0 || y<0 || x>3 || y>3) return true
    //     return a === shape[x][y]
    // }

</script>

<div>
    {#each shape as row, x}
        <div class="flex">
            {#each row as col, y}
                <div class="p-1 border-black-700 m-px
                        {col ? 'bg-gray-700':''}"
                ></div>
            {/each}
        </div>
    {/each}
</div>
