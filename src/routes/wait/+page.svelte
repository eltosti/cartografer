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
    import { io } from 'socket.io-client'

    const socket = io()

    socket.on('eventFromServer', (message) => {
        console.log(message)
    })

    const testButton = () => {
        console.log("%%%%%%%%%%%%%%%%%################%%%%%%%%")

    }



    console.log(data);
</script>

{#each queue as player }
    <div class="flex justify-center items-center h-screen bg-amber-100">
        <div>
            <div>
                {player.nombre}
            </div>
            <div>
                {player.nombre}
            </div>
            <div>
                {player.nombre}
            </div>
            <div>
                {player.nombre}
            </div>
            <button on:click={testButton}>
                hello
            </button>
        </div>
    </div>
{/each}
