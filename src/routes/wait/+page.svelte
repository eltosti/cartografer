<script lang="ts">
    import {onMount} from 'svelte';
    import type {WaitingQueue} from "src/local_types/store_state";
    import {store} from "../../stores/waiting_room";

    let queue: WaitingQueue = [];
    export let data;
    for (const user of data.users) {
        queue.push(user)
    }
    /*onMount(async () => {
        let r = await fetch("/api/rooms/waiting_room");
        let json = await r.json();
        queue = json
		console.log(json)
    });*/
    import {io} from 'socket.io-client'

    const socket = io()

    socket.on('eventFromServer', (message) => {
        console.log(message)
    })

    const testButton = () => {
        console.log("%%%%%%%%%%%%%%%%%################%%%%%%%%")

    }

    console.log(data);
</script>


<div class="flex justify-center flex-col items-center h-screen bg-amber-100">

    <div>
        {#each queue as player }
            <div>
                {player.nombre}
            </div>
        {/each}

    </div>
    <div class="mt-2">
        <button on:click={testButton} class="bg-green-600  text-white uppercase font-bold p-2 pb-3 rounded">
            start
        </button>
    </div>
</div>

