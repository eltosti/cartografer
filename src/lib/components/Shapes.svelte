<script lang="ts">
    //import {Shape} from "../../local_types/shapes.js";

    export let shape = [
        [true, true, true, true],
        [false, false, false, true],
        [false, false, false, false],
        [false, false, false, false]
    ];

    const isDiff = (a,x,y) => {
        if (x < 0 || y<0 || x>3 || y>3) return true
        return a === shape[x][y]
    }

</script>

<div>
    {#each shape as row, x}
        <div class="flex">
            {#each row as col, y}
                <div class="bg-red-100 p-1 border-black-200
                        {isDiff(col,x-1,y) ? 'border-l-1':''}
                        {isDiff(col,x+1,y) ? 'border-r-1':''}
                        {isDiff(col,x,y-1) ? 'border-b-1':''}
                        {isDiff(col,x,y+1) ? 'border-t-1':''}
                        "
                ></div>
            {/each}
        </div>
    {/each}
</div>
