import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { WaitingRoom } from '../lib/types/store_state';
import type { User } from '$lib/types/user';

interface WritableRoom extends Writable<WaitingRoom>{
    addUser: Function
}

function createRoom(): WritableRoom {
	const { subscribe, set, update } = writable<WaitingRoom>({
        queue: []
    });

	return {
		subscribe,
		set,
		update, 
        addUser(user: User){
            update((room) =>{
                room.queue.push(user);
                return room;
            });
        }
	};
}

export const store: WritableRoom = createRoom();
