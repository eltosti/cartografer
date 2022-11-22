<script lang="ts">
    export let objective1 = 10;
    export let objective2 = 20;
    export let coins = 30;
    export let ambush = -5;

    let final = objective1 + objective2 + coins + ambush;

</script>


<div class="grid grid-cols-3 w-24 border rounded-lg">
    <div class="grid grid-cols-2 w-16 h-16   col-span-2">
        <div class="col-span-1 flex items-center justify-center border-b border-r w-8 h-8">{ objective1 != null ? objective1 : ""}</div>
        <div class="col-span-1 flex items-center justify-center border-r border-b w-8 h-8">{objective2 != null ? objective2 : ""}</div>
        <div class="col-span-1 flex items-center justify-center  border-r w-8 h-8">{coins != null ? coins : ""}</div>
        <div class="col-span-1 flex items-center justify-center border-r w-8 h-8">{ambush != null? ambush : ""}</div>
    </div>
    <div class=" w-8 h-16 flex flex-col items-center justify-center">
        { objective1 != null ? final : ""}
    </div>
</div>
