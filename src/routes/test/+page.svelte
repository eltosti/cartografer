<script>
    let colors = ["bg-amber-100", "bg-blue-100", "bg-red-100", "bg-green-100", "bg-yellow-100", "bg-violet-100"]

</script>

<div class="w-12 flex justify-center ">
    <div class="w-12  flex justify-center">
        {#each colors as color, index}
            <div id={color} class="{color} absolute w-4/5 h-52  hover:w-full hover:h-56  hover:z-50"
                 style="top: {index*2.5}rem;"></div>
        {/each}
    </div>
</div>
