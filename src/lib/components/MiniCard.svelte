<script lang="ts">
    export let time = 1;
</script>
<div class="flex items-center rounded justify-evenly m-4 h-12 w-40 bg-slate-100">
    {#if time !== 0 }
        <div class="h-8 w-8 rounded-full bg-slate-200 text-center">{time}</div>
    {/if}
    <div class="h-8 w-12 bg-slate-200"></div>
    <div class="h-8 w-12 bg-slate-200"></div>
</div>
