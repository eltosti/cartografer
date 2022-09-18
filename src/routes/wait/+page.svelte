<script lang="ts">
    import { onMount } from 'svelte';
	import type { WaitingQueue } from "src/local_types/store_state";
	import store from "../../stores/waiting_room";
    let queue: WaitingQueue = [];
    onMount(async () => {
        let url = window.location.origin;
        let r = await fetch(url+"/api/rooms/waiting_room");
        let json = await r.json();
        console.log(json);
    });
    let unsuscribe = store.subscribe((value) => { queue = value.queue });
    
    console.log(queue);
</script>
{#each queue as player }
		<div class="flex">
            {player.nombre}
		</div>
{/each}