import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { WaitingRoom } from '../local_types/store_state';
import type { User } from '../local_types/user';
import {store as user_registry } from './user_registry';
import { webSocketServer } from '../webSocketServer';
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
            console.log(user_registry.userExists(user.userid))

            if(user_registry.userExists(user.userid)){
                let real_user: User = user_registry.getUser(user.userid);
                update((room) =>{
                    console.log("agregando usuario", real_user)
                    let exists = room.queue.some((value: User) => value.userid == user.userid);
                    if(!exists){
                        room.queue.push(real_user);
                        room.queue = room.queue;
                        //console.log("agregando usuario", user)
                    }
                    return room;
                });
            }
        }
	};
}
const store : WritableRoom = createRoom();
export {store}
